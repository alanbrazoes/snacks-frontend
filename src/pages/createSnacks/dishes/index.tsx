const CreateDishes = () => {
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Adicionar pratos</legend>
          <label>Nome</label>
          <input></input>
          <label>Ingredientes</label>
          <input></input>
          <label>Preço</label>
          <input></input>
          <button type="submit">Adicionar</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreateDishes;
