import { useState, useEffect, useCallback } from 'react';
import FormularioBusca from './components/FormularioBusca';
import PokemonCard from './components/PokemonCard';
import Carregando from './components/Carregando';
import Erro from './components/Erro';
import NaoEncontrado from './components/NaoEncontrado';

function App() {
  const [texto, setTexto] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | notfound
  const [mensagemErro, setMensagemErro] = useState('');
  const [termoBuscado, setTermoBuscado] = useState('');

  // função assíncrona com async/await e try/catch
  const carregarPokemon = useCallback(async (nome) => {
    const termo = nome.trim().toLowerCase();
    setTermoBuscado(termo);
    setStatus('loading');

    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${termo}`);

      // o fetch não lança erro em 404/500, então checamos manualmente
      if (resposta.status === 404) {
        setStatus('notfound');
        return;
      }
      if (!resposta.ok) {
        throw new Error(`Erro do servidor (código ${resposta.status}).`);
      }

      const dados = await resposta.json();
      setPokemon(dados);
      setStatus('success');
    } catch (erro) {
      // cai aqui em falha de rede ou no erro lançado acima
      setMensagemErro(
        erro.message === 'Failed to fetch'
          ? 'Falha na conexão. Verifique sua internet.'
          : erro.message
      );
      setStatus('error');
    }
  }, []);

  // Parte 1: chama a função assíncrona dentro de um useEffect (carga inicial)
  useEffect(() => {
    carregarPokemon('pikachu');
  }, [carregarPokemon]);

  function limpar() {
    setTexto('');
    setPokemon(null);
    setMensagemErro('');
    setStatus('idle');
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Buscador de Pokémon</h1>

        {/* Parte 2: a busca do formulário é chamada no submit, não no useEffect */}
        <FormularioBusca
          valor={texto}
          onChange={setTexto}
          onBuscar={carregarPokemon}
          desabilitado={status === 'loading'}
        />

        {status === 'idle' && (
          <p className="text-center text-gray-500">
            Digite o nome de um Pokémon para buscar.
          </p>
        )}
        {status === 'loading' && <Carregando />}
        {status === 'error' && <Erro mensagem={mensagemErro} />}
        {status === 'notfound' && (
          <NaoEncontrado termo={termoBuscado} onLimpar={limpar} />
        )}
        {status === 'success' && pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </main>
  );
}

export default App;