import React from 'react';
import {
  DeepRequired,
  FieldErrorsImpl,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { IAddress } from '@context/checkout';

interface IAddressForm {
  register: UseFormRegister<IAddress>;
  errors: FieldErrorsImpl<DeepRequired<IAddress>>;
  handleSubmit: UseFormHandleSubmit<IAddress>;
  submitAddress: SubmitHandler<IAddress>;
}
const Address: React.FC<IAddressForm> = ({ register, errors, handleSubmit, submitAddress }) => {
  return (
    <section>
      <form className="flex justify-center" onSubmit={handleSubmit(submitAddress)}>
        <fieldset className="forms">
          <legend>Endereço</legend>
          <label className="labels">
            Rua:
            <input
              {...register('street', { required: true })}
              className="inputs"
              placeholder="Ex: Antônio SIlva"
            ></input>
            {errors.street && <p>Campo obrigatório</p>}
          </label>
          <label className="labels">
            Número:
            <input
              {...register('number', { required: true })}
              className="inputs"
              placeholder="Ex: 178"
            ></input>
            {errors.number && <p>Campo obrigatório</p>}
          </label>
          <label className="labels">
            Complemento: (opcional)
            <input
              {...register('complement', { required: false })}
              className="inputs"
              placeholder="Ex: apartamento 503"
            ></input>
            {errors.complement && <p>Campo obrigatório</p>}
          </label>
          <label className="labels">
            Bairro:
            <input
              {...register('district', { required: true })}
              className="inputs"
              placeholder="Ex: Pampulha"
            ></input>
            {errors.district && <p>Campo obrigatório</p>}
          </label>
          <label className="labels">
            Cidade:
            <input
              {...register('city', { required: true })}
              className="inputs"
              placeholder="Ex: Belo Horizonte"
            ></input>
            {errors.city && <p>Campo obrigatório</p>}
          </label>
          <button type="submit">Confirmar endereço</button>
        </fieldset>
      </form>
    </section>
  );
};

export { Address };
