
import { Order, OrderStatus } from "@/types";

export const orders: Order[] = [
  {
    id: 1,
    userId: 101,
    orderNumber: "ORD-2023-0001",
    date: "2023-04-15",
    status: OrderStatus.Delivered,
    items: [
      {
        id: 1,
        productId: 1,
        productName: "Original Granola",
        quantity: 2,
        price: 12.99,
        total: 25.98
      },
      {
        id: 2,
        productId: 2,
        productName: "Wild Forest Honey",
        quantity: 1,
        price: 15.99,
        total: 15.99
      }
    ],
    subtotal: 41.97,
    shipping: 5.00,
    tax: 4.20,
    total: 51.17,
    shippingAddress: {
      id: 201,
      name: "John Smith",
      addressLine1: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "United States"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "TRK123456789"
  },
  {
    id: 2,
    userId: 102,
    orderNumber: "ORD-2023-0002",
    date: "2023-04-16",
    status: OrderStatus.Shipped,
    items: [
      {
        id: 3,
        productId: 3,
        productName: "Coconut Cookies",
        quantity: 3,
        price: 9.99,
        total: 29.97
      }
    ],
    subtotal: 29.97,
    shipping: 5.00,
    tax: 3.00,
    total: 37.97,
    shippingAddress: {
      id: 202,
      name: "Emily Johnson",
      addressLine1: "456 Park Avenue",
      city: "New York",
      state: "NY",
      postalCode: "10022",
      country: "United States"
    },
    paymentMethod: "PayPal",
    trackingNumber: "TRK987654321"
  },
  {
    id: 3,
    userId: 103,
    orderNumber: "ORD-2023-0003",
    date: "2023-04-17",
    status: OrderStatus.Processing,
    items: [
      {
        id: 4,
        productId: 4,
        productName: "Mango Passion Jam",
        quantity: 1,
        price: 11.99,
        total: 11.99
      },
      {
        id: 5,
        productId: 5,
        productName: "Chocolate Granola",
        quantity: 2,
        price: 14.99,
        total: 29.98
      }
    ],
    subtotal: 41.97,
    shipping: 5.00,
    tax: 4.20,
    total: 51.17,
    shippingAddress: {
      id: 203,
      name: "Michael Brown",
      addressLine1: "789 Oak Drive",
      city: "Chicago",
      state: "IL",
      postalCode: "60611",
      country: "United States"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: 4,
    userId: 104,
    orderNumber: "ORD-2023-0004",
    date: "2023-04-18",
    status: OrderStatus.Pending,
    items: [
      {
        id: 6,
        productId: 2,
        productName: "Wild Forest Honey",
        quantity: 1,
        price: 15.99,
        total: 15.99
      },
      {
        id: 7,
        productId: 6,
        productName: "Cinnamon Granola",
        quantity: 1,
        price: 13.99,
        total: 13.99
      }
    ],
    subtotal: 29.98,
    shipping: 5.00,
    tax: 3.00,
    total: 37.98,
    shippingAddress: {
      id: 204,
      name: "Sarah Wilson",
      addressLine1: "101 Pine Street",
      addressLine2: "Apt 303",
      city: "Seattle",
      state: "WA",
      postalCode: "98101",
      country: "United States"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: 5,
    userId: 105,
    orderNumber: "ORD-2023-0005",
    date: "2023-04-19",
    status: OrderStatus.Cancelled,
    items: [
      {
        id: 8,
        productId: 3,
        productName: "Coconut Cookies",
        quantity: 2,
        price: 9.99,
        total: 19.98
      }
    ],
    subtotal: 19.98,
    shipping: 5.00,
    tax: 2.00,
    total: 26.98,
    shippingAddress: {
      id: 205,
      name: "David Lee",
      addressLine1: "222 Maple Avenue",
      city: "Boston",
      state: "MA",
      postalCode: "02115",
      country: "United States"
    },
    paymentMethod: "PayPal"
  },
  {
    id: 6,
    userId: 106,
    orderNumber: "ORD-2023-0006",
    date: "2023-04-20",
    status: OrderStatus.Delivered,
    items: [
      {
        id: 9,
        productId: 1,
        productName: "Original Granola",
        quantity: 1,
        price: 12.99,
        total: 12.99
      },
      {
        id: 10,
        productId: 7,
        productName: "Clover Honey",
        quantity: 1,
        price: 14.99,
        total: 14.99
      },
      {
        id: 11,
        productId: 8,
        productName: "Almond Cookies",
        quantity: 1,
        price: 10.99,
        total: 10.99
      }
    ],
    subtotal: 38.97,
    shipping: 0.00, // Free shipping
    tax: 3.90,
    total: 42.87,
    shippingAddress: {
      id: 206,
      name: "Jennifer Martinez",
      addressLine1: "333 Beach Road",
      city: "Miami",
      state: "FL",
      postalCode: "33139",
      country: "United States"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "TRK567891234"
  },
  {
    id: 7,
    userId: 107,
    orderNumber: "ORD-2023-0007",
    date: "2023-04-21",
    status: OrderStatus.Processing,
    items: [
      {
        id: 12,
        productId: 5,
        productName: "Chocolate Granola",
        quantity: 3,
        price: 14.99,
        total: 44.97
      }
    ],
    subtotal: 44.97,
    shipping: 5.00,
    tax: 4.50,
    total: 54.47,
    shippingAddress: {
      id: 207,
      name: "Robert Taylor",
      addressLine1: "444 River Street",
      city: "Austin",
      state: "TX",
      postalCode: "78701",
      country: "United States"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: 8,
    userId: 108,
    orderNumber: "ORD-2023-0008",
    date: "2023-04-22",
    status: OrderStatus.Shipped,
    items: [
      {
        id: 13,
        productId: 2,
        productName: "Wild Forest Honey",
        quantity: 2,
        price: 15.99,
        total: 31.98
      },
      {
        id: 14,
        productId: 4,
        productName: "Mango Passion Jam",
        quantity: 1,
        price: 11.99,
        total: 11.99
      }
    ],
    subtotal: 43.97,
    shipping: 5.00,
    tax: 4.40,
    total: 53.37,
    shippingAddress: {
      id: 208,
      name: "Lisa Anderson",
      addressLine1: "555 Mountain View",
      city: "Denver",
      state: "CO",
      postalCode: "80202",
      country: "United States"
    },
    paymentMethod: "PayPal",
    trackingNumber: "TRK234567890"
  },
  {
    id: 9,
    userId: 109,
    orderNumber: "ORD-2023-0009",
    date: "2023-04-23",
    status: OrderStatus.Pending,
    items: [
      {
        id: 15,
        productId: 6,
        productName: "Cinnamon Granola",
        quantity: 1,
        price: 13.99,
        total: 13.99
      },
      {
        id: 16,
        productId: 8,
        productName: "Almond Cookies",
        quantity: 2,
        price: 10.99,
        total: 21.98
      }
    ],
    subtotal: 35.97,
    shipping: 5.00,
    tax: 3.60,
    total: 44.57,
    shippingAddress: {
      id: 209,
      name: "Thomas White",
      addressLine1: "666 Valley Road",
      city: "Portland",
      state: "OR",
      postalCode: "97205",
      country: "United States"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: 10,
    userId: 110,
    orderNumber: "ORD-2023-0010",
    date: "2023-04-24",
    status: OrderStatus.Delivered,
    items: [
      {
        id: 17,
        productId: 1,
        productName: "Original Granola",
        quantity: 1,
        price: 12.99,
        total: 12.99
      },
      {
        id: 18,
        productId: 3,
        productName: "Coconut Cookies",
        quantity: 1,
        price: 9.99,
        total: 9.99
      },
      {
        id: 19,
        productId: 7,
        productName: "Clover Honey",
        quantity: 1,
        price: 14.99,
        total: 14.99
      }
    ],
    subtotal: 37.97,
    shipping: 5.00,
    tax: 3.80,
    total: 46.77,
    shippingAddress: {
      id: 210,
      name: "Patricia Harris",
      addressLine1: "777 Sunset Boulevard",
      city: "Los Angeles",
      state: "CA",
      postalCode: "90046",
      country: "United States"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "TRK345678901"
  },
  {
    id: 11,
    userId: 111,
    orderNumber: "ORD-2023-0011",
    date: "2023-04-25",
    status: OrderStatus.Processing,
    items: [
      {
        id: 20,
        productId: 5,
        productName: "Chocolate Granola",
        quantity: 1,
        price: 14.99,
        total: 14.99
      },
      {
        id: 21,
        productId: 6,
        productName: "Cinnamon Granola",
        quantity: 1,
        price: 13.99,
        total: 13.99
      }
    ],
    subtotal: 28.98,
    shipping: 5.00,
    tax: 2.90,
    total: 36.88,
    shippingAddress: {
      id: 211,
      name: "James Clark",
      addressLine1: "888 Highland Avenue",
      city: "Phoenix",
      state: "AZ",
      postalCode: "85004",
      country: "United States"
    },
    paymentMethod: "PayPal"
  },
  {
    id: 12,
    userId: 112,
    orderNumber: "ORD-2023-0012",
    date: "2023-04-26",
    status: OrderStatus.Pending,
    items: [
      {
        id: 22,
        productId: 2,
        productName: "Wild Forest Honey",
        quantity: 3,
        price: 15.99,
        total: 47.97
      }
    ],
    subtotal: 47.97,
    shipping: 5.00,
    tax: 4.80,
    total: 57.77,
    shippingAddress: {
      id: 212,
      name: "Nancy Lewis",
      addressLine1: "999 Lake Drive",
      city: "Chicago",
      state: "IL",
      postalCode: "60601",
      country: "United States"
    },
    paymentMethod: "Credit Card"
  }
];
