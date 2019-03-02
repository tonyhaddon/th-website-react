import React from 'react';
import HeaderActionIcon from '../HeaderActionIcon';
import styles from './Header.css';

export class Header extends React.Component {
	render() {
		return (
			
			<div className={(this.props.fadeIt) ? styles.headerNormal : styles.headerHidden}>
				<p className={styles.headerTitle}>Tony Haddon</p>
				<p className={styles.headerSubtitle}>Design CV</p>
				<div className={styles.actionsPanel}>
					<HeaderActionIcon actionHref="mailto:tony.haddon@gmail.com" actionType="contact" actionText='Contact'/>
					<HeaderActionIcon actionHref="/docs/cv_tonyhaddon_2019.pdf" actionType="pdf" actionText='Download a PDF version of this CV'/>
				</div>
			</div>
			
		);
	};
}