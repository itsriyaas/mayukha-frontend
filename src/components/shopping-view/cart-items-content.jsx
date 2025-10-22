import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

function UserCartItemsContent({ cartItem, onQuantityChange }) {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { productList } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  // ✅ Local quantity state for instant update (no refresh)
  const [localQuantity, setLocalQuantity] = useState(cartItem?.quantity || 1);

  async function handleUpdateQuantity(getCartItem, typeOfAction) {
    let newQuantity =
      typeOfAction === "plus"
        ? localQuantity + 1
        : localQuantity - 1;

    if (typeOfAction === "plus") {
      const product = productList.find(
        (p) => p._id === getCartItem?.productId
      );
      const totalStock = product?.totalStock || 0;
      if (newQuantity > totalStock) {
        toast({
          title: `Only ${localQuantity} quantity available for this item`,
          variant: "destructive",
        });
        return;
      }
    }

    // ✅ Update local state immediately
    setLocalQuantity(newQuantity);
    if (onQuantityChange) {
  onQuantityChange(getCartItem.productId, newQuantity);
}

    // ✅ Dispatch update to backend
    const response = await dispatch(
      updateCartQuantity({
        userId: user?.id,
        productId: getCartItem?.productId,
        quantity: newQuantity,
      })
    );

    if (response?.payload?.success) {
      toast({
        title: "Cart item updated successfully",
      });
    } else {
      // rollback in case of failure
      setLocalQuantity(cartItem?.quantity);
    }
  }

  async function handleCartItemDelete(getCartItem) {
    const response = await dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    );

    if (response?.payload?.success) {
      toast({
        title: "Cart item deleted successfully",
      });
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItem?.title}</h3>
        {cartItem.size && (
          <p className="text-sm text-gray-500">Size: {cartItem.size}</p>
        )}
        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            disabled={localQuantity === 1}
            onClick={() => handleUpdateQuantity(cartItem, "minus")}
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="font-semibold">{localQuantity}</span>
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            onClick={() => handleUpdateQuantity(cartItem, "plus")}
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          ₹
          {(
            (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
            localQuantity
          ).toFixed(2)}
        </p>
        <Trash
          onClick={() => handleCartItemDelete(cartItem)}
          className="cursor-pointer mt-1"
          size={20}
        />
      </div>
    </div>
  );
}

export default UserCartItemsContent;
