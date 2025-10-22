import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import {
  addFeatureImage,
  getFeatureImages,
  deleteFeatureImage,
} from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList, isLoading } = useSelector(
    (state) => state.commonFeature
  );

  // ✅ Handle add feature image
  function handleUploadFeatureImage() {
    if (!uploadedImageUrl) return;

    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  }

  // ✅ Handle delete feature image
  function handleDeleteFeatureImage(id) {
    dispatch(deleteFeatureImage(id));
  }

  // ✅ Fetch on mount
  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="p-3 sm:p-5">
      {/* Image Upload */}
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
      />

      {/* Upload Button */}
      <Button
        onClick={handleUploadFeatureImage}
        className="mt-5 w-full"
        disabled={isLoading || !uploadedImageUrl}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </Button>

      {/* Images List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {featureImageList?.length > 0 ? (
          featureImageList.map((featureImgItem) => (
            <div
              key={featureImgItem._id}
              className="relative w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={featureImgItem.image}
                alt="Feature"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
              />

              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => handleDeleteFeatureImage(featureImgItem._id)}
                disabled={isLoading}
              >
                Delete
              </Button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No feature images added yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
