import React from 'react';
import { DeepRequired, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

import { ICheckout } from '@pages/checkout';

interface IAddressForm {
  register: UseFormRegister<ICheckout>;
  errors: FieldErrorsImpl<DeepRequired<ICheckout>>;
}
const Address: React.FC<IAddressForm> = ({ register, errors: { address } }) => {
  return (
    <fieldset className="forms">
      <legend data-testid="address">Endereço</legend>
      <label className="labels">
        Rua:
        <input
          {...register('address.street', { required: true })}
          className="inputs"
          placeholder="Ex: Antônio SIlva"
        ></input>
        {address?.street && <p className="input_error">Campo obrigatório</p>}
      </label>
      <label className="labels">
        Número:
        <input
          {...register('address.number', { required: true })}
          className="inputs"
          placeholder="Ex: 178"
        ></input>
        {address?.number && <p className="input_error">Campo obrigatório</p>}
      </label>
      <label className="labels">
        Complemento: (opcional)
        <input
          {...register('address.complement', { required: false })}
          className="inputs"
          placeholder="Ex: apartamento 503"
        ></input>
        {address?.complement && <p className="input_error">Campo obrigatório</p>}
      </label>
      <label className="labels">
        Bairro:
        <input
          {...register('address.district', { required: true })}
          className="inputs"
          placeholder="Ex: Pampulha"
        ></input>
        {address?.district && <p className="input_error">Campo obrigatório</p>}
      </label>
      <label className="labels">
        Cidade:
        <input
          {...register('address.city', { required: true })}
          className="inputs"
          placeholder="Ex: Belo Horizonte"
        ></input>
        {address?.city && <p className="input_error">Campo obrigatório</p>}
      </label>
    </fieldset>
  );
};

export { Address };
