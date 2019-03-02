import styles from './Body.css';
import { Header } from '../Header/Header';
import SiteHeading from '../SiteHeading/SiteHeading';
import Panel from '../Panel/Panel';

import React from 'react';


export default class Body extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      mainHeadingFadeState: false,
      topHeadingFadeState: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    
    this.skillsRatings = [];
    this.skillsContentsArray = [];
    this.rolesArray = [];


    this.props.contents.map((contentItem,i) => {
      
      if (contentItem.contentType === 'SKILLS') {
        this.skillsContentsArray.push(contentItem);
      }

      if (contentItem.contentType === 'ROLE') {
        this.rolesArray.push(contentItem);
      }

      return true;
    });

    // console.log('skillsContentsArray',this.skillsContentsArray);
  }

  handleScroll() {
      let sP = window.scrollY;
      let headingFadePoint = 50; // The scrollY point where the heading starts to fade
      let topHeadingFadePoint = 200;

      if (sP > headingFadePoint) {
          this.setState({mainHeadingFadeState: true});
      } 
      else {
          this.setState({mainHeadingFadeState: false});     
      } 

      if (sP > topHeadingFadePoint)  {
          this.setState({topHeadingFadeState: true});
      } 
      else {
          this.setState({topHeadingFadeState: false});     
      } 
  }

  componentWillMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.setState({
      screenHeight: window.innerHeight
    });
  }


  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    return (
      <div className={ styles.body }>
          <Header fadeIt={ this.state.topHeadingFadeState }/>
          <SiteHeading fadeIt={ this.state.mainHeadingFadeState }/>
      	   <div className={ styles.panelsContainer }>
	           <Panel>I’m a designer with 20 years experience designing in digital and printed media. I’ve a solid technical background too, so I work really well with developers. I’d like to work and learn with a team on applications where reliable customer data drives design improvements.</Panel>
	           <Panel panelTitle={'Skills'} contentArray={ this.skillsContentsArray } panelIndex={1}/>

	           <Panel panelTitle={'Career History'} contentArray={ this.rolesArray } panelIndex={2}/>
	         </div>
      </div>
    );
  }
}
