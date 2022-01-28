const CreateBurguer = () => {
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Adicionar hamburguer</legend>
          <input></input>
          <input></input>
          <input></input>
          <button type="submit">Adicionar</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreateBurguer;
