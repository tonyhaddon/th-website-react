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
        contents: `<p class="intro">
                      I made an internal move from a general design service role (see earlier role below) to a full-time concentration on the UI for the BriteBill product suite. I became the sole designer on a product where  design implementation needed significant improvement. I refined the UI kit and developed set of style rules that provided a rhythm to the UI and were easy to remember.
                  </p>`
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
