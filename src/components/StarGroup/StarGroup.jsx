import React, { Component } from 'react';
import Star from '../Star/Star';



export default class StarGroup extends Component {

	render() {
		let rating = this.props.rating - 1;
		let starsArray = [];
		for (let st = 0; st <= 4; st++ ) {
				starsArray.push(<Star isActive={(st <= rating)} key={'st_' + st}/>)
		}


		return (<div>{starsArray}</div>);
	}
}