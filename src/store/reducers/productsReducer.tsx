export type ItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: { rate: number; count: number };
};

export type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export interface IS {
  category: string;
  selectedColor: string;
  totalAmount: number;
  products: ItemType[];
  cartItems: cartItemType[];
}
const INITIAL_STATE: IS = {
  category: 'all',
  selectedColor: 'all',
  totalAmount: 0,
  products: [],
  cartItems: [
    {
      id: 1,
      category: 'test',
      description: 'description test',
      image: 'image',
      price: 4,
      title: 'test title',
      amount: 2,
    },
  ],
};

export const productReducer = (state = INITIAL_STATE, action: any) => {
  console.log('reducer called');
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
