export function TextInput({ title, state, setState }) {
  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = Number(value);

    if (
      (title.toLowerCase().includes("interest") ||
        title.toLowerCase().includes("fee")) &&
      numericValue > 100
    )
      return;
    setState(value);
  };
  return (
    <>
      <span className="title">{title}</span>
      <input
        type="number"
        placeholder={title}
        value={state}
        // onChange={(e) => setState(e.target.value
        onChange={handleChange}
      />
    </>
  );
}
