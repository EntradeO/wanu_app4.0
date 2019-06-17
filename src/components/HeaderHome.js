import React from 'react'
import { ReactComponent as ImageLogo } from '../img/image-logo.svg';
import { ReactComponent as Logo } from '../img/logo_wanu.svg';
import ImageLocal from '../components/ImageLocal';
import Locale from '../img/download.jpg';



class HeaderHome extends React.Component{
    render(){
    return (
        <div className="container-headerHome">
            <div className="Gradient"></div>
            <div className="linea-Bianca"></div>
            <a href="/">
                <Logo className="logo"/>
            </a>
            <ImageLogo className="imageLogo"/>
            <ImageLocal imageLocal={Locale}/>
        </div>
        );
    }
}

export default HeaderHome;