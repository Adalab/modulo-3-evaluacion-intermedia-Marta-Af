function Filter(handleFilterName) {
  const handleInput = (event) => {
    handleFilterName(event.Target.value);
  };
  return (
    <>
      <form className="form">
        <label htmlFor="">Filtrar por frase</label>
        <input type="text" onChange={handleInput} />
      </form>
      <form>
        <label htmlFor="">Filtrar por nombre</label>
        <input type="text" onChange={handleInput} />
      </form>
    </>
  );
}

export default Filter;
