export type ItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: { rate: number; count: number };
};

export interface IS {
  category: string;
  selectedColor: string;
  totalAmount: number;
  products: ItemType[];
}
const INITIAL_STATE: IS = {
  category: 'all',
  selectedColor: 'all',
  totalAmount: 0,
  products: [],
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
