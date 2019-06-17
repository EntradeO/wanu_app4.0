import React from 'react';
class DayTime extends React.Component{
    render(){
        return(
            <div className={this.props.Days_container}>
                <p className={this.props.classDay}>{this.props.day}</p>
                <p className={this.props.classTime}>{this.props.time}</p>
            </div>
        );
    }
}
class OpenTimes extends React.Component{
    constructor(props) {
  		super(props);
  		this.state = {
  			error: null,
  			isLoaded: false,
  			orari: []
  		};

  	}
componentDidMount() {
    fetch("https://nodeuno.mohole.it/oraris")
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                oraris: result
            });
            var oraris = this.state.oraris;
            this.setState({orari : oraris});
            console.log(this.state.orari);
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}
   render(){
        return(
            <div className="Time_container">
                <h2 className="Time_titol">{this.props.TimeTitle}</h2>
                {this.state.orari.map(orario =>
                <div>
                  <DayTime Days_container="Days_container D_cBlue" day="Lun" time={orario.lun} classDay="classDay" classTime="classTime"></DayTime>
                  <DayTime Days_container="Days_container" day="Mar" time={orario.mar} classDay="classDay" classTime="classTime"></DayTime>
                  <DayTime Days_container="Days_container D_cBlue" day="Mer" time={orario.mer} classDay="classDay" classTime="classTime"></DayTime>
                  <DayTime Days_container="Days_container" day="Gio" time={orario.gio} classDay="classDay" classTime="classTime"></DayTime>
                  <DayTime Days_container="Days_container D_cBlue" day="Ven" time={orario.ven} classDay="classDay" classTime="classTime"></DayTime>
                  <DayTime Days_container="Days_container" day="Sab" time={orario.sab} classDay="classDay" classTime="classTime"></DayTime>
                  <DayTime Days_container="Days_container D_cBlue" day="Dom" time={orario.dom} classDay="classDay" classTime="classTime"></DayTime>
                </div>
              )}
            </div>
        );
    }
}
export default OpenTimes;