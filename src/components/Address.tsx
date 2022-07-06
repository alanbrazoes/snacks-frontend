import * as React from 'react';

const Address: React.FC = () => {
  return (
    <section>
      <button>Obter localização atual</button>

      <form>
        <fieldset>
          <legend>Endereço</legend>
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

          <button type="submit">Confirmar endereço</button>
        </fieldset>
      </form>
    </section>
  );
};

export { Address };
