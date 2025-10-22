import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems = [], setOpenCartSheet }) {
  const navigate = useNavigate();

  // ✅ Local cart state to instantly reflect changes
  const [localCartItems, setLocalCartItems] = useState(cartItems);

  // ✅ Keep local state synced if Redux cart updates
  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);

  // ✅ Compute total dynamically
  const totalCartAmount = localCartItems.reduce((sum, currentItem) => {
    const price =
      currentItem?.salePrice > 0 ? currentItem?.salePrice : currentItem?.price;
    return sum + price * currentItem?.quantity;
  }, 0);

  // ✅ Update quantity locally when user adds/removes items
  function handleQuantityChange(productId, newQuantity) {
    setLocalCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }

  return (
    <SheetContent className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>

      {/* ✅ Cart Items List */}
      <div className="mt-8 space-y-4">
        {localCartItems.length > 0 ? (
          localCartItems.map((item) => (
            <UserCartItemsContent
              key={item.productId}
              cartItem={item}
              onQuantityChange={handleQuantityChange} // 👈 added
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* ✅ Total Section */}
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">₹{totalCartAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* ✅ Checkout Button */}
      <Button
        onClick={() => {
          navigate("/shop/checkout");
          setOpenCartSheet(false);
        }}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;
