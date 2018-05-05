import React from 'react';
import styles from './SiteHeading.css';			

export default class SiteHeading extends React.Component {

	render() {

		return (
			<div className={styles.containerNormal}>
				<h1 className={(this.props.fadeIt) ? styles.titleFadeout : styles.titleNormal}>Tony Haddon</h1>
				<p className={(this.props.fadeIt) ? styles.subtitleFadeout : styles.subtitleNormal}>Designer</p>
			</div>
		);
	}

}

