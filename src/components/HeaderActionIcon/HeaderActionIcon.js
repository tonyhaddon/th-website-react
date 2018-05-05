import React, { Component } from 'react';
import styles from './HeaderActionIcon.css';
import pdfIcon from './src/pdf.svg';
import envelopeIcon from './src/envelope.svg';

class HeaderActionIcon extends Component {

	render() {

		console.log(this.actionIcon);

		return (

				<a className={ styles.normal } href={ this.props.actionHref }>
					<img src={ (this.props.actionType === 'contact') ? envelopeIcon : pdfIcon } alt={ this.props.actionText } />
				</a>			
		);
	}
}

export default HeaderActionIcon;
