import React from 'react';
import ButtonCS from '../components/ButtonCS';
class PopUp extends React.Component {
    render(){
        return(
            <div className="containerPopUp">
                <h2 className={this.props.TitleAnswer}>{this.props.answerPopUp}</h2>
                <ButtonCS styleClass2="buttonc_popup" styleClass="buttons_popup" buttoncsClass="buttoncs_popup"/>
            </div>
        );
    }
}
export default PopUp