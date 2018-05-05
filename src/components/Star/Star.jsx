import React, { Component } from 'react';
import styles from './Star.css';
import star from './star.svg';
import starActive from './star-active.svg';


export default class Star extends Component {

	render() {
		return (
			<img src={(this.props.isActive) ? starActive : star} className={styles.normal} alt=""/>
		)
	}

}