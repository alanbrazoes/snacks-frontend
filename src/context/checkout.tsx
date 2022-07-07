import React, { createContext, useContext, useState } from 'react';

export interface IAddress {
  street: string;
  number: number;
  complement: number;
  district: string;
  city: string;
}

interface IMethod {
  method: 'cash' | 'card';
  isReturnCash: boolean;
  returnCash: number;
}

interface IPayment {
  method: IMethod;
  setMethod: React.Dispatch<React.SetStateAction<IMethod>>;
}

interface IAddressState {
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
}

type ICheckoutState = IAddressState & IPayment;

const context = createContext({} as ICheckoutState);

const CheckoutContext: React.FC = ({ children }) => {
  const [address, setAddress] = useState<IAddress>({} as IAddress);
  const [method, setMethod] = useState<IMethod>({} as IMethod);

  return (
    <context.Provider value={{ address, method, setAddress, setMethod }}>
      {children}
    </context.Provider>
  );
};

const useCheckout = () => useContext(context);

export { CheckoutContext, useCheckout };
