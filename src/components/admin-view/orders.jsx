import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import { Badge } from "../ui/badge";
import AdminOrderDetailsView from "./order-details";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  resetOrderDetails,
} from "@/store/admin/order-slice";

function AdminOrdersView() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { orderList, orderDetails } = useSelector((state) => state.adminOrder);
  const dispatch = useDispatch();

  function handleFetchOrderDetails(getId) {
    dispatch(getOrderDetailsForAdmin(getId));
  }

  useEffect(() => {
    dispatch(getAllOrdersForAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (orderDetails !== null) setOpenDetailsDialog(true);
  }, [orderDetails]);

// Sort latest first
const sortedOrders = [...orderList]?.sort(
  (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
);

// Filter by search term
const filteredOrders = sortedOrders?.filter((order) =>
  order?._id?.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="px-4 py-3 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <CardTitle className="text-lg sm:text-xl">All Orders</CardTitle>
        <div className="w-full sm:w-64">
          <Input
            placeholder="Search by Order ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sm"
          />
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:px-4">
        {/* Mobile-friendly scroll */}
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse sm:table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-xs sm:text-sm p-2 text-left">Order ID</th>
                <th className="text-xs sm:text-sm p-2 text-left">Order Date</th>
                <th className="text-xs sm:text-sm p-2 text-left">Status</th>
                <th className="text-xs sm:text-sm p-2 text-left">Price</th>
                <th className="text-xs sm:text-sm p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders && filteredOrders.length > 0 ? (
                filteredOrders.map((orderItem) => (
                  <tr
                    key={orderItem?._id}
                    className="sm:hover:bg-gray-50 border-b"
                  >
                    <td className="text-xs sm:text-sm p-2 break-words">
                      {orderItem?._id}
                    </td>
                    <td className="text-xs sm:text-sm p-2 whitespace-nowrap">
                      {orderItem?.orderDate.split("T")[0]}
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <Badge
                        className={`py-0.5 px-2 text-xs sm:text-sm ${
                          orderItem?.orderStatus === "confirmed"
                            ? "bg-green-500"
                            : orderItem?.orderStatus === "rejected"
                            ? "bg-red-600"
                            : "bg-black"
                        }`}
                      >
                        {orderItem?.orderStatus}
                      </Badge>
                    </td>
                    <td className="text-xs sm:text-sm p-2 whitespace-nowrap">
                      ₹{orderItem?.totalAmount}
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <Dialog
                        open={openDetailsDialog}
                        onOpenChange={() => {
                          setOpenDetailsDialog(false);
                          dispatch(resetOrderDetails());
                        }}
                      >
                        <Button
                          size="sm"
                          className="text-xs sm:text-sm"
                          onClick={() =>
                            handleFetchOrderDetails(orderItem?._id)
                          }
                        >
                          View Details
                        </Button>
                        <AdminOrderDetailsView orderDetails={orderDetails} />
                      </Dialog>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center text-sm py-6 whitespace-nowrap"
                  >
                    {searchTerm
                      ? "No orders match your search."
                      : "No orders found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile card view for very small screens */}
        <div className="sm:hidden mt-4 flex flex-col gap-3">
          {filteredOrders && filteredOrders.length > 0
            ? filteredOrders.map((orderItem) => (
                <div
                  key={orderItem?._id}
                  className="p-4 border rounded-md shadow-sm flex flex-col gap-2"
                >
                  <div>
                    <strong>Order ID:</strong> {orderItem?._id}
                  </div>
                  <div>
                    <strong>Date:</strong>{" "}
                    {orderItem?.orderDate.split("T")[0]}
                  </div>
                  <div>
                    <strong>Status:</strong>{" "}
                    <Badge
                      className={`py-0.5 px-2 text-xs ${
                        orderItem?.orderStatus === "confirmed"
                          ? "bg-green-500"
                          : orderItem?.orderStatus === "rejected"
                          ? "bg-red-600"
                          : "bg-black"
                      }`}
                    >
                      {orderItem?.orderStatus}
                    </Badge>
                  </div>
                  <div>
                    <strong>Price:</strong> ₹{orderItem?.totalAmount}
                  </div>
                  <Dialog
                    open={openDetailsDialog}
                    onOpenChange={() => {
                      setOpenDetailsDialog(false);
                      dispatch(resetOrderDetails());
                    }}
                  >
                    <Button
                      size="sm"
                      className="text-xs mt-2"
                      onClick={() => handleFetchOrderDetails(orderItem?._id)}
                    >
                      View Details
                    </Button>
                    <AdminOrderDetailsView orderDetails={orderDetails} />
                  </Dialog>
                </div>
              ))
            : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default AdminOrdersView;
