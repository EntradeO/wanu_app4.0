import React from 'react';
import ButtonMenu from './ButtonMenu';

class Buttons extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categorie: []
    };

  }

  componentDidMount() {
   fetch("https://nodeuno.mohole.it/categories")
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           categories: result
         });
         var categories = this.state.categories;

         this.setState({categorie : categories});

       },
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )

   }


  render(){
    return (
      <div className="App">
      <div> {this.state.categorie.map(categoria => <ButtonMenu key = {categoria.id} styleClass="buttonMenu" href={"/Categories/" + categoria.nome} images={"https://nodeuno.mohole.it/" + categoria.icona.url}>{categoria.nome}</ButtonMenu>)} </div>
      </div>
    );
  }
}

export default Buttons;
