import * as React from 'react';

const Address: React.FC = () => {
  return (
    <section>
      <h1>Endereço</h1>
      <button>Localização atual</button>
      <form>
        <label>
          Rua
          <input></input>
        </label>
        <label>
          Número
          <input></input>
        </label>
        <label>
          Complemento
          <input></input>
        </label>
        <label>
          Bairro
          <input></input>
        </label>
        <label>
          Cidade
          <input></input>
        </label>
        <label>
          Estado
          <input></input>
        </label>

        <button type="submit">Confiemar endereço</button>
      </form>
    </section>
  );
};

export { Address };
