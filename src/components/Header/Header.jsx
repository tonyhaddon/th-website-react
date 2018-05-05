import React from 'react';
import styles from './Header.css';

export class Header extends React.Component {
	render() {
		return (
			<div className={(this.props.fadeIt) ? styles.headerNormal : styles.headerHidden}>
				<p className={styles.headerTitle}>Tony Haddon</p>
				<p className={styles.headerSubtitle}>Designer</p>
			</div>
		);
	};
}