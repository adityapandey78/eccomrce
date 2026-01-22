import { CartItem as cartItem } from "../../../commons/types/product";

 export enum bankEnum {
    bkash = 'bkash',
    mastercard = 'mastercard',
    visa = 'visa',
    nagad = 'nagad'

}

export type paymentMethod = { type: 'cod' } | { type: 'bank'; provider: bankEnum }

interface billingFormProps {
    firstName: string,
    companyName?: string,
    streetAddress: string,
    apartment?: string,
    town: string,
    phone: string,
    email: string,
    payment:paymentMethod,
    saveInfo?:boolean

}
export interface checkoutPayload {
  customer: billingFormProps;
  items: cartItem[];
  totals: {
    subtotal: number;
  };
  createdAt: string;
}

export default billingFormProps;