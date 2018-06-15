import styles from './App.css';

import React from 'react';
// import AppActions from '../../actions/AppActions';
import Body from '../Body/Body';
// import Footer from '../Footer/Footer';

export default class App extends React.Component {

  constructor(props) {
    
    super(props);

    this.contents = [
      {
        contentType: 'SKILLS',
        title: 'Design tools',
        subtitle: false,
        contents: [
          {
            skillName: 'Sketch',
            skillRating: 5,
          },
          {
            skillName: 'InDesign',
            skillRating: 4,
          },
          {
            skillName: 'InVision',
            skillRating: 5,
          },
          {
            skillName: 'After Effects',
            skillRating: 2,
          },
          {
            skillName: 'Illustrator',
            skillRating: 4,
          },
          {
            skillName: 'Photoshop',
            skillRating: 4,
          }
        ]
      },
      {
        contentType: 'SKILLS',
        title: 'Coding',
        subtitle: false,
        contents: [
          {
            skillName: 'CSS3',
            skillRating: 4,
          },
          {
            skillName: 'HTML5',
            skillRating: 5,
          },
          {
            skillName: 'React',
            skillRating: 2,
          },
          {
            skillName: 'NPM',
            skillRating: 2,
          }
        ]
      },
      {
        contentType: 'ROLE',
        title: 'BriteBill – Product UI Designer',
        subtitle: 'September ’16 - Present',
        contents: {
          intro: 'I made an internal move from a general design service role (see earlier role below) to a full-time concentration on the UI for the BriteBill product suite. I became the sole designer on a product where  design implementation needed significant improvement. I refined the UI kit and developed set of style rules that provided a rhythm to the UI and were easy to remember.',
          listIntro: 'Working under the head of product management, I:',
          listItems: [
            'meet daily with the product team and the head of development to refine stories based on requirements from the business and delivery teams, and to review my designs to satisfy those stories.',
            'design screens for new features and applications.',
            'maintain and extend the UI kit, which contains all the components that make up the BriteBill application suite.',
            'partner with a team of amazing UI devs on implementing and polishing UI, formalising and standardising components as we go. I want to be as inclusive as possible on design decisions. I hope it helps to inspire a sense of ownership of the product’s look and feel, and it brings fresh eyes to bear on my work too.',
            'work on PowerPoint slide decks to assist sales and marketing efforts, and try and simplify the communication around BriteBill products when the offering isn’t really as clear as it could be.',
            'often serve as a go-between between technical and design staff, as I have a good common understanding of both fields. Example: educating the delivery design team on using Subversion VCS for updating website code and publishing it to the website.'
          ]
        }
      },
      {
        contentType: 'ROLE',
        title: 'BriteBill – Product UI Designer',
        subtitle: 'September ’16 - Present',
        contents: {
          intro: 'I made an internal move from a general design service role (see earlier role below) to a full-time concentration on the UI for the BriteBill product suite. I became the sole designer on a product where  design implementation needed significant improvement. I refined the UI kit and developed set of style rules that provided a rhythm to the UI and were easy to remember.',
          listIntro: 'Working under the head of product management, I:',
          listItems: [
            'meet daily with the product team and the head of development to refine stories based on requirements from the business and delivery teams, and to review my designs to satisfy those stories.',
            'design screens for new features and applications.',
            'maintain and extend the UI kit, which contains all the components that make up the BriteBill application suite.',
            'partner with a team of amazing UI devs on implementing and polishing UI, formalising and standardising components as we go. I want to be as inclusive as possible on design decisions. I hope it helps to inspire a sense of ownership of the product’s look and feel, and it brings fresh eyes to bear on my work too.',
            'work on PowerPoint slide decks to assist sales and marketing efforts, and try and simplify the communication around BriteBill products when the offering isn’t really as clear as it could be.',
            'often serve as a go-between between technical and design staff, as I have a good common understanding of both fields. Example: educating the delivery design team on using Subversion VCS for updating website code and publishing it to the website.'
          ]
        }
      }
    ]
  }


  render() {
    return (
      <div className={ styles.app }>
        <Body contents={ this.contents } />
      </div>
    );
  }
}
