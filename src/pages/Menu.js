import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
	class MenuView extends Component {
		render() {
			return (
                <div>
                    <Header/>
                    <Buttons/>
                </div>
			);
		}
	}
export default MenuView;