import React, { Component } from 'react';
import ElementList from '../components/ElementList';
import Header from '../components/Header';
import MenuCategories from '../components/MenuCategories';
class CategoriesView extends Component {
   constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        prodotti: []
      };
    }
    componentDidMount() {
     fetch("https://nodeuno.mohole.it/prodottis")
       .then(res => res.json())
       .then(
         (result) => {
           console.log(result);
           this.setState({
             isLoaded: true,
             prodottis: result
           });
           var prodottis = this.state.prodottis;
            this.setState({prodotti : prodottis});
          },
         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
      }
    render() {
			return (
        <div>
            <Header/>
            <MenuCategories>{this.props.match.params.id}</MenuCategories>
            {this.state.prodotti.map(prodotto =>
              prodotto.categoria === this.props.match.params.id ?
                <ElementList
                key={prodotto.id}
                name={prodotto.nome}
                id_prodotto={prodotto.id}
                id_ordine={prodotto.ordini ? prodotto.ordini.id : null}
                quantita={prodotto.ordini ? prodotto.ordini.quantita : 0}
                description={prodotto.descrizione}
                price={prodotto.prezzo} ></ElementList>
              : <div></div>
            )}
        </div>
			);
		}
	}
export default CategoriesView;
