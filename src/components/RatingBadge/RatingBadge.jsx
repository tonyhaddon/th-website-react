import React, { Component } from 'react';
import styles from './RatingBadge.css';
import StarGroup from '../StarGroup/StarGroup';

import logoIndesign from './Indesign-logo@2x.png';
import logoAftereffects from './AfterEffects-logo@2x.png';
import logoIllustrator from './ai-logo@2x.png';
import logoCss3 from './css3-logo@2x.png';
import logoHtml5 from './HTML5-logo@2x.png';
import logoPhotoshop from './photoshop-cc-logo@2x.png';
import logoReact from './React-Logo@2x.png';
import logoSketch from './sketch-logo@2x.png';
import logoInvision from './invision-logo@2x.png';
import logoNpm from './npm-logo@2x.png';



export default class RatingBadge extends Component {

	render() {

		var logo;

		// console.log('this.props.name',this.props.name);

		switch(this.props.name)
		{
			case 'InDesign':
				logo = logoIndesign;
				break;

			case 'After Effects':
				logo = logoAftereffects;
				break;

			case 'Illustrator':
				logo = logoIllustrator;
				break;

			case 'CSS3':
				logo = logoCss3;
				break;

			case 'HTML5':
				logo = logoHtml5;
				break;

			case 'Photoshop':
				logo = logoPhotoshop;
				break;

			case 'React':
				logo = logoReact;
				break;

			case 'Sketch':
				logo = logoSketch;
				break;

			case 'InVision':
				logo = logoInvision;
				break;

			default:
				logo = logoNpm;
				break;

		}

		return (
			<div className={styles.badge}>
				<img src={logo} alt={this.props.skillName} className={styles.logo} />
				<StarGroup rating={this.props.rating} />
			</div>
		);
	}

}