import React, { Component } from 'react';
import HeaderHome from '../components/HeaderHome';
import OpenTimes from '../components/OpenTimes';
import Description from '../components/Description';

class HomeView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			descrizioni: []
		};

	}
componentDidMount() {
	fetch("https://nodeuno.mohole.it/preferenzes")
	.then(res => res.json())
	.then(
		(result) => {
			this.setState({
				isLoaded: true,
				descrizionis: result
			});
			var descrizionis = this.state.descrizionis;
			this.setState({descrizioni : descrizionis});
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
				<HeaderHome/>
				{this.state.descrizioni.map(descrizione =>
					<Description TitleDesc="DESCRIPTION" Desc={descrizione.descrizione}/>
				)}
				<OpenTimes TimeTitle="ORARI"/>
			</div>
		);
	}
}
export default HomeView;