import React from 'react'

class ButtonMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = { press: 'null'} 
    this.ontouchstart = this.ontouchstart.bind(this);
    this.ontouchend = this.ontouchend.bind(this);
  }
  ontouchstart(){
    this.setState({press: 'true'})
  }
  ontouchend(){
    this.setState({press: 'false'})
    setTimeout(()=>{this.setState({press: 'null'})}, 460)
  }
  render() {
    let classes = this.props.styleClass;
    if (this.state.press ==='true'){
      classes += ' is-pressed';
    }else if (this.state.press === 'false'){
      classes += ' is-relased';
    }else {
      classes += '';
    }
    return (
        <a 
          href={this.props.href}
          className={classes}
          onTouchStart={this.ontouchstart}
          onTouchEnd={this.ontouchend}
        >
          <h2>{this.props.children}</h2>
          <img src={this.props.images} alt="bottone"></img>
        </a>

    );
  }
}
export default ButtonMenu
