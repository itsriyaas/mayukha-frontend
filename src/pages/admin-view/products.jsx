import ProductImageUpload from "@/components/admin-view/image-upload";
import AdminProductTile from "@/components/admin-view/product-tile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input"; // ✅ Added for search
import { useToast } from "@/components/ui/use-toast";
import { addProductFormElements } from "@/config/index";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} from "@/store/admin/products-slice";
import { Fragment, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialFormData = {
  image: "",
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
  sizes: "",
};

const normalizeSizes = (sizesStr) =>
  sizesStr
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ New state for search

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    const cleanedFormData = {
      ...formData,
      totalStock: Number(formData.totalStock),
      sizes: normalizeSizes(formData.sizes),
      image: uploadedImageUrl || formData.image,
    };

    if (currentEditedId !== null) {
      dispatch(
        editProduct({
          id: currentEditedId,
          formData: cleanedFormData,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          setFormData(initialFormData);
          setUploadedImageUrl("");
          setCurrentEditedId(null);
          setOpenCreateProductsDialog(false);
          toast({ title: "Product updated successfully" });
        }
      });
    } else {
      dispatch(addNewProduct(cleanedFormData)).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          setOpenCreateProductsDialog(false);
          setImageFile(null);
          setUploadedImageUrl("");
          setFormData(initialFormData);
          toast({ title: "Product added successfully" });
        }
      });
    }
  }

  function handleDelete(getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast({ title: "Product deleted" });
      }
    });
  }

  function isFormValid() {
    const hasImage = uploadedImageUrl || formData.image;
    if (imageLoadingState) return false;

    return (
      hasImage &&
      Object.keys(formData)
        .filter((key) => key !== "averageReview" && key !== "image")
        .every((key) => {
          const value = formData[key];
          if (key === "totalStock") {
            return value !== "" && value !== null && value !== undefined;
          }
          return value !== "" && value !== null && value !== undefined;
        })
    );
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  function handleEdit(product) {
    setOpenCreateProductsDialog(true);
    setCurrentEditedId(product?._id);

    setFormData({
      ...product,
      totalStock:
        product?.totalStock !== undefined && product?.totalStock !== null
          ? product.totalStock.toString()
          : "",
      sizes: Array.isArray(product?.sizes)
        ? product.sizes.join(", ")
        : product.sizes || "",
    });

    setUploadedImageUrl(product?.image || "");
  }

  // ✅ Filter products based on search term (case insensitive)
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return productList;
    return productList?.filter((p) =>
      p.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, productList]);

  return (
    <Fragment>
      {/* ✅ Top Bar: Search + Add Button */}
      <div className="mb-5 w-full flex flex-col sm:flex-row gap-3 justify-between items-center">
        <Input
          type="text"
          placeholder="Search by product title..."
          className="w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Button
          onClick={() => {
            setFormData(initialFormData);
            setUploadedImageUrl("");
            setImageFile(null);
            setCurrentEditedId(null);
            setOpenCreateProductsDialog(true);
          }}
        >
          Add New Product
        </Button>
      </div>

      {/* ✅ Product Grid */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((productItem) => (
            <AdminProductTile
              key={productItem._id}
              handleDelete={handleDelete}
              product={productItem}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products found.
          </p>
        )}
      </div>

      {/* ✅ Add/Edit Product Sheet */}
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={(open) => {
          if (!open) {
            setOpenCreateProductsDialog(false);
            setCurrentEditedId(null);
            setFormData(initialFormData);
            if (currentEditedId === null) setUploadedImageUrl("");
          }
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? "Edit Product" : "Add New Product"}
            </SheetTitle>
          </SheetHeader>

          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditedId !== null}
          />

          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? "Edit" : "Add"}
              formControls={addProductFormElements}
              isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
