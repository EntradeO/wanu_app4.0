import React from 'react'

class ImageLocal extends React.Component {
  render() {
    return (
        <img className="imageLocal" src={this.props.imageLocal} alt="Locale"></img>
    );
  }
}
export default ImageLocal