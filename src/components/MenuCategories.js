import React from 'react'
import { ReactComponent as FrecciaMenuDX } from '../img/FrecciaMenuDX.svg';
import { ReactComponent as FrecciaMenuSX } from '../img/FrecciaMenuSX.svg';


class MenuCategories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categorie: [],
      url: "#"
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

   turnBack(){

     var kategorie = this.state.categorie;

     for (var i = 0; i < kategorie.length; i++){
       if(kategorie[i].nome == this.props.children){
         if(i != 0){
           this.setState({
             url: kategorie[i-1].nome
           })
         }else if(i == 0){
           this.setState({
             url: kategorie[kategorie.length - 1].nome
           })
         }
       }
     }

   }

   turnForward(){

     var kategorie = this.state.categorie;

     for (var i = 0; i < kategorie.length; i++){
       if(kategorie[i].nome == this.props.children){
         if(i != kategorie.length - 1){
           this.setState({
             url: kategorie[i+1].nome
           })
         }else if(i == kategorie.length - 1){
           this.setState({
             url: kategorie[0].nome
           })
         }
       }
     }

   }

    render(){
      return (
        <div className="BackGroundMenu">
            <a onClick = {this.turnBack.bind(this)} href = {this.state.url}>
                <FrecciaMenuSX/>
            </a>
            <h2>{this.props.children}</h2>
            <a onClick = {this.turnForward.bind(this)} href = {this.state.url}>
                <FrecciaMenuDX/>
            </a>
        </div>
      );
    }
  }


export default MenuCategories
