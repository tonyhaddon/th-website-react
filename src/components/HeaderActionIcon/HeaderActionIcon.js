import React, { Component } from 'react';
import styles from './HeaderActionIcon.css';

class HeaderActionIcon extends Component {

	render() {

		return (

				<a className={(this.props.actionType === 'contact') ? styles.envelope : styles.pdf } href={ this.props.actionHref }>
					{this.props.actionText}
				</a>
		);
	}
}

export default HeaderActionIcon;
