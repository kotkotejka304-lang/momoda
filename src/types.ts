export interface MenuItemOptionChoice {
  label: string;
  extraPrice?: number;
}

export interface MenuItemOption {
  name: string;
  choices: MenuItemOptionChoice[];
  required?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  asianName?: string;
  category:
    | 'starters'
    | 'soup'
    | 'chef-specials'
    | 'wok'
    | 'noodles'
    | 'fried-rice'
    | 'european'
    | 'sides'
    | 'desserts'
    | 'drinks';
  price: number;
  description: string;
  image: string;
  spicyLevel: 0 | 1 | 2 | 3; // 0 = none, 1 = mild, 2 = spicy, 3 = extra spicy
  tags: ('chef-pick' | 'popular' | 'vegetarian' | 'vegan' | 'gluten-free' | 'crispy')[];
  options?: MenuItemOption[];
  allergens?: string[];
  prepTimeMinutes?: number;
}

export interface CartItem {
  cartItemId: string;
  menuItemId: string;
  item: MenuItem;
  quantity: number;
  selectedOptions: Record<string, string>;
  specialInstructions: string;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderTicket {
  orderId: string;
  orderCode: string;
  tableNumber?: string;
  diningType: 'dine-in' | 'takeaway';
  items: CartItem[];
  subtotal: number;
  tax: number;
  tip: number;
  total: number;
  paymentMethod: 'show-to-waiter' | 'cash' | 'card';
  status: 'draft' | 'presented-to-waiter' | 'preparing';
  customerNotes?: string;
  createdAt: string;
}

export type CategoryId =
  | 'all'
  | 'starters'
  | 'soup'
  | 'chef-specials'
  | 'wok'
  | 'noodles'
  | 'fried-rice'
  | 'european'
  | 'sides'
  | 'desserts'
  | 'drinks';
