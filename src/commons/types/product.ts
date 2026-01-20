export interface ApiProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface Product {
  id: number
  title: string
  image: string
  price: number
  originalPrice?: number
  discount?: string
  rating?: number,
  category?:string,
  description?:string
}

export interface Rating {
  rate: number;
  count: number;
}
export interface CartItem extends Product{
  quantity:number;
}
export interface Cart{
products:CartItem[]
}

// export interface CartProductProps {
//   title: string;
//   image: string;
//   price: number;
//   quantity: number;
//   totalValue:number;
//   onIncrement: () => void;
//   onDecrement: () => void;
//   onRemoveAll: () => void;
// }
