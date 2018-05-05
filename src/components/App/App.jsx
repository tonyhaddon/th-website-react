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
      }
    ]
  }


  render() {
    return (
      <div className={styles.app}>
        <Body contents={this.contents} />
      </div>
    );
  }
}
