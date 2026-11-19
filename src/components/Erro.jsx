function Erro({ mensagem }) {
  return (
    <div
      role="alert"
      className="p-4 border rounded-lg bg-red-100 text-red-800 border-red-300"
    >
      <p className="font-bold">Algo deu errado</p>
      <p>{mensagem}</p>
    </div>
  );
}

export default Erro;