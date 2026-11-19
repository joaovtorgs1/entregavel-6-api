function PokemonCard({ pokemon }) {
  const imagem = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <img
        src={imagem}
        alt={pokemon.name}
        className="w-48 h-48 object-contain mx-auto"
      />
      <h2 className="text-2xl font-bold text-gray-900 capitalize">
        {pokemon.name}
      </h2>
      <p className="text-sm text-gray-500 mb-3">#{pokemon.id}</p>

      <div className="flex justify-center gap-2 mb-4">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-8 text-gray-700">
        <p>Altura: {pokemon.height / 10} m</p>
        <p>Peso: {pokemon.weight / 10} kg</p>
      </div>
    </div>
  );
}

export default PokemonCard;