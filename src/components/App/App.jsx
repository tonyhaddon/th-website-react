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
        title: 'Product UI Designer',
        companyName: 'BriteBill',
        jobDates: 'September ’16 - Present',
        contents: {
          intro: 'I made an internal move from a general design service role (see earlier role below) to a full-time concentration on the UI for the BriteBill product suite. I refined the UI kit and developed set of style rules that provides a rhythm to the UI and is easy to remember.',
          listIntro: 'Working under the head of product management, I:',
          listItems: [
            'meet daily with my colleagues on the product team to refine stories based on requirements from the business and delivery teams, and to review designs I\'ve done to meet those requirements.',
            'design screens for new features and applications.',
            'maintain and extend the UI kit, which contains all the components that make up the BriteBill application suite.',
            'partner with UI devs on implementing and polishing UI, formalising and standardising components as we go. I want to be as inclusive as possible on design decisions. I believe it helps to inspire a sense of ownership of the product’s look and feel, and it brings fresh eyes to bear on my work too.',
            'work on PowerPoint slide decks to assist sales and marketing efforts, and try and simplify the communication around BriteBill products when the offering isn’t really as clear as it could be.',
            'often serve as a go-between between technical and design staff, as I have a good common understanding of both fields. Example: educating the delivery design team on using Subversion VCS for updating website code and publishing it to the website.',
            'write and perform user testing on the product, to try and discover what\'s not working in the UI.'
          ]
        }
      },
      {
        contentType: 'ROLE',
        title: 'Senior Creative Designer',
        companyName: 'BriteBill',
        jobDates: 'February ’11 - September ’16',
        contents: {
          intro: 'This was a contract relief position at first, covering the duties of the creative director while he took an extended period of annual leave. I was unexpectedly offered the opportunity to stay on before my contract term had expired.',
          listIntro: 'Working on the delivery team under the creative director, I:',
          listItems: [
            'worked with international client teams in various functions (business, IT, UXD and so on) to navigate business requirements, provide effort estimates, then delivered design work in a waterfall approach to those estimates.',
            'planned design work into 2-week-long “design sprints”.',
            'designed web UI and bills, for paper (PDF) output as well as online, building and enforcing pattern libraries and sometimes animating interactions in detail (using e.g. Photoshop or After Effects).',
            'managed junior designers on the team, allocating client project work to meet resourcing limitations and reviewing to ensure quality on time.',
            'ensured that our project designs were deliverable by liaising with the development team and asking lots of questions understanding how large corporations operate and how scope can creep if you don’t keep it buttoned down.',
            'designed pitch graphics and bill concepts for prospective clients.'
          ]
        }
      },
      {
        contentType: 'ROLE',
        title: 'Front-end Web Developer',
        companyName: 'Telefónica O2 Ireland',
        jobDates: 'October ’07 - November ’10',
        contents: {
          intro: 'I went in initially to work on one specific contract, then took a full-time position that became available while I was there.',
          listIntro: 'Working on the digital team:',
          listItems: [
            'I was required to develop solutions to specific business briefs, ranging in complexity from a javascript upgrade calculator to a php/MySQL-based store locator and a broadband coverage-checker integrated with Google maps.',
            'I maintained affiliate schemes provided by TradeDoubler and PigsBack, which tracked leads and O2 online store sales that completed after banner-clicks on third-party sites. (JavaScript/PHP)',
            'On an ongoing basis, I had to find creative solutions to circumvent numerous technical obstacles which presented situations where server-side scripting solutions were not available, for example using jQuery for screen-scraping, and DOM manipulation.'
          ]
        }
      },
      {
        contentType: 'ROLE',
        title: 'Self-employed',
        companyName: false,
        jobDates: 'Nov ’03 - September ’07',
        contents: {
          intro: 'For a little over 3 years, I operated as a sole trader, working on numerous projects of various sizes. My involvement was total — from planning and communications with the clients through to delivery. The job type varied; sometimes it was graphic design only, sometimes website design and build, sometimes running brand values workshops, and sometimes training a client’s staff in web standards-compliance (which was big at the time). Of course, being self-employed meant having to manage my own finances and keep accounts too.'
        }
      },
      {
        contentType: 'ROLE',
        title: 'Developer',
        companyName: 'Resonance',
        jobDates: 'June ‘00 - November ‘03',
        contents: {
          intro: 'Resonance was a small design company who took me on to assist in their expanding website development business.'
        }
      },
      {
        contentType: 'ROLE',
        title: 'Senior Designer',
        companyName: 'Interactive Services',
        jobDates: 'September ’98 - June ’00',
        contents: {
          intro: 'An e-learning company delivering online training services mainly to the US market. I ran a team of designers generating 8-bit graphics, supervising quality and ensuring on-time delivery.'
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
