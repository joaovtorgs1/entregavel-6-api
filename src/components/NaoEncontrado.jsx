function NaoEncontrado({ termo, onLimpar }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <p className="text-5xl mb-3">🔍</p>
      <h2 className="text-xl font-bold text-gray-900 mb-1">
        Nenhum Pokémon encontrado
      </h2>
      <p className="text-gray-600 mb-4">
        Não achamos nada para "{termo}". Confira o nome e tente de novo.
      </p>
      <button
        onClick={onLimpar}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
      >
        Limpar
      </button>
    </div>
  );
}

export default NaoEncontrado;