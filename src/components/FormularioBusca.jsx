function FormularioBusca({ valor, onChange, onBuscar, desabilitado }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (valor.trim() === '') return;
    onBuscar(valor);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nome do Pokémon (ex: pikachu)"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={desabilitado}
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Buscar
      </button>
    </form>
  );
}

export default FormularioBusca;