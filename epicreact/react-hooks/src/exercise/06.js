// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {
  PokemonForm,
  fetchPokemon,
  PokemonDataView,
  PokemonInfoFallback,
} from '../pokemon'

class ErrorBoundary extends React.Component {
  state = {error: null}
  static getDerivedStateFromError(error) {
    return {error}
  }
  render() {
    const {error} = this.state
    if (error) {
      return <this.props.FallbackComponent error={error} />
    }

    return this.props.children
  }
}

function PokemonInfo({pokemonName}) {
  const [pokemon, setPokemon] = React.useState({
    status: 'idle',
    pokemon: null,
    error: null,
  })

  React.useEffect(() => {
    if (!pokemonName) return
    setPokemon({status: 'pending', pokemon: null, error: null})

    fetchPokemon(pokemonName)
      .then(pokemonData => {
        setPokemon({status: 'resolved', pokemon: pokemonData, error: null})
      })
      .catch(error => {
        setPokemon({status: 'rejected', pokemon: null, error: error})
      })
  }, [pokemonName])

  if (pokemon.status === 'idle') return 'Submit a pokemon'
  if (pokemon.status === 'rejected') {
    throw pokemon.error
  }
  if (pokemon.status === 'pending')
    return <PokemonInfoFallback name={pokemonName} />
  if (pokemon.status === 'resolved')
    return <PokemonDataView pokemon={pokemon.pokemon} />

  return 'something goes wrong'
  // return (
  //   <>
  //     {error ? (
  //       <div role="alert">
  //         There was an error:{' '}
  //         <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
  //       </div>
  //     ) : !pokemonName && !pokemon ? (
  //       'Submit a pokemon'
  //     ) : !pokemon ? (
  //       <PokemonInfoFallback name={pokemonName} />
  //     ) : (
  //       <PokemonDataView pokemon={pokemon} />
  //     )}
  //   </>
  // )
}

function ErrorFallback({error}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    </div>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary key={pokemonName} FallbackComponent={ErrorFallback}>
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
