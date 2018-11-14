import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

class PokemonCard extends React.Component {
  state = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    nome: 'Bulbasaur',
  };

  componentDidMount(){
    this.carregarPokemon();
  }

  carregarPokemon = async () => {
    console.log(this.props.pokemonId)
    const response = await fetch(`/api/v2/pokemon/${this.props.pokemonId}/`);
    const data = await response.json();
    const nome = data.name;
    const foto = data.sprites.front_default;
    this.setState({ nome, foto})

    // pokemon.then( res => res.json().then( dado => console.log(dado)));
  }

  render() {
    const { foto, nome } = this.state;
    return (
      <Card style={{ margin: 16 }}>
        <CardHeader
          avatar={
            <Avatar src={foto} style={{width: 64, height: 64}} aria-label="Recipe"/>
          }
          title={nome}
        />
      </Card>
    );
  }
};

export default PokemonCard;