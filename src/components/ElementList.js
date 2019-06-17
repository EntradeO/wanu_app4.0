import React from 'react';
import IconCarrel from './IconCarrel'
import Cocktail from '../img/CocktailOneColor.svg';
import ButtonAddLList from './ButtonAddList';
import Button from '../img/ButtonAddList.svg';
import axios from 'axios';

class ElementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.quantita,
      clicked: false,
      id_ordine: props.id_ordine
    };


  }

  click1(){

    if(this.state.count == 0){

      var bodyParameters = {
        prodotto: this.props.name,
        numero_tavolo: "1",
        Prezzo: this.props.price,
        prodotti: this.props.id_prodotto,
        quantita: "1",
        pagamento:"1"
      }

      axios.post(
        'https://nodeuno.mohole.it/ordinis',
        bodyParameters
      ).then((response) => {
        console.log(response);
            this.setState({
                error:false,
                message:"Ordine inviato"
            });
            this.setState({
              count: this.state.count + 1,
              clicked: true,
              id_ordine: response.data.id
            })
            setTimeout(()=>{
              this.setState({clicked: 'false'});
              document.body.classList.add('cart_full')
            }, 900)
            var cart = {
              cartState: true
            }
            localStorage.setItem('cart', JSON.stringify(cart));
          })
          .catch((error) => {
            this.setState({
                error:true,
                message:"Ops c'è stato un piccolo problema. Riprovare."
            });
          });
        }else{

          var bodyParameters = {
            quantita: this.state.count + 1
          }

          axios.put(
            'https://nodeuno.mohole.it/ordinis/'+this.state.id_ordine,
            bodyParameters
          ).then((response) => {
                this.setState({
                    error:false,
                    message:"Ordine inviato"
                });
                this.setState({
                  count: this.state.count + 1,
                  clicked: true
                })
                setTimeout(()=>{
                  this.setState({clicked: 'false'});
                  document.body.classList.add('cart_full')
                }, 900)
                var cart = {
                  cartState: true
                }
                localStorage.setItem('cart', JSON.stringify(cart));
              })
              .catch((error) => {
                this.setState({
                    error:true,
                    message:"Ops c'è stato un piccolo problema. Riprovare."
                });
              });
    }

  }
  render() {
    let classes = "iconCarrel";
    if (this.state.clicked === true){
      classes += ' food';
    }else {
      classes += '';
    }
    return (
      <div>
        <div className='ListContainer'>
          <div className='ItemDetails'>
            <h2 className='Name'>{this.props.name}</h2>
            <p className='Descriptions'>{this.props.description}</p>
          </div>
          <h2 className="Counter"> {this.state.count} </h2>
          <h2 className='Price'> {this.props.price}</h2>
          <div className="AddOrder" onClick={this.click1.bind(this)}>
            <ButtonAddLList ButtonAddLList={Button}/>
          </div>
        </div>
        <div className={classes}>
          <IconCarrel imageFood={Cocktail}></IconCarrel>
        </div>
      </div>
    );
  }
}

export default ElementList;
