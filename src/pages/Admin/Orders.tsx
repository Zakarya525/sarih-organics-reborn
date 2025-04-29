
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Order, OrderStatus } from "@/types";
import { orders } from "@/data/orders";
import { toast } from "@/components/ui/sonner";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentOrders, setCurrentOrders] = useState<Order[]>(orders);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredOrders = currentOrders.filter(order => 
    order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.shippingAddress.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current orders for pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const paginatedOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const handleStatusChange = (orderId: number, newStatus: OrderStatus) => {
    setCurrentOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast.success(`Order #${orderId} status updated to ${newStatus}`);
  };

  const handleDeleteOrder = (orderId: number) => {
    if (confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
      setCurrentOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
      toast.success(`Order #${orderId} has been deleted`);
    }
  };

  const getStatusBadgeColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.Pending:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case OrderStatus.Processing:
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case OrderStatus.Shipped:
        return "bg-sari-terracotta-100 text-sari-terracotta-800 hover:bg-sari-terracotta-200";
      case OrderStatus.Delivered:
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case OrderStatus.Cancelled:
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold text-sari-terracotta-800">
            Order Management
          </h1>
          <Button className="bg-sari-terracotta-500 hover:bg-sari-terracotta-600">
            Export Orders
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search by order number or customer name"
              className="pl-10"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                    No orders found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">#{order.orderNumber}</TableCell>
                    <TableCell>{order.shippingAddress.name}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge className={`${getStatusBadgeColor(order.status)}`}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(order.id, OrderStatus.Processing)}
                          >
                            Mark as Processing
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(order.id, OrderStatus.Shipped)}
                          >
                            Mark as Shipped
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(order.id, OrderStatus.Delivered)}
                          >
                            Mark as Delivered
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(order.id, OrderStatus.Cancelled)}
                          >
                            Mark as Cancelled
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-red-600 focus:text-red-600"
                            onClick={() => handleDeleteOrder(order.id)}
                          >
                            Delete Order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-sari-terracotta-600">
              Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, filteredOrders.length)} of {filteredOrders.length} orders
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
