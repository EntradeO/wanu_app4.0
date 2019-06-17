import React from 'react';
class Description extends React.Component{
    render(){
        return(
            <div className="DescriptionContainer">
                <h2 className="Desc">{this.props.TitleDesc}</h2>
                <p className="Desc DescBottom">{this.props.Desc}</p>
            </div>
        );
    }
}
export default Description