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
            'meet daily with my colleagues on the product team to refine stories based on requirements from the business and delivery teams, and to shape solutions with design work I\'ve done to meet those requirements.',
            'maintain and extend the BriteBill design system.',
            'regularly workshop with the development team and architects to design and refine features.',
            'work on PowerPoint slide decks to assist sales and marketing efforts, simplifying the communication around BriteBill products.',
            'write and perform user testing on the product, to discover what\'s not working.',
            'introduce new ways to work and make decisions as a team — using techniques learned from, among others, Design Sprint and Lightning Decision Jam.'

          ]
        }
      },
      {
        contentType: 'ROLE',
        title: 'Senior Creative Designer',
        companyName: 'BriteBill',
        jobDates: 'February ’11 - September ’16',
        contents: {
          intro: 'This was a contract relief position at first, covering the duties of the creative director while he took an extended period of annual leave. I was asked to stay on full-time before my contract term had expired.',
          listIntro: 'Working on the delivery team under the creative director, I:',
          listItems: [
            'worked with international client teams in various functions (business, IT, UXD and so on) to navigate business requirements, provide effort estimates, then delivered design work in a waterfall approach to those estimates.',
            'planned design work into 2-week-long “design sprints” (Not Jake Knapp style ones).',
            'designed web UI and bills, for paper (PDF) output as well as online, building and enforcing pattern libraries and sometimes animating interactions in detail (using e.g. Photoshop or After Effects).',
            'managed junior designers on the team, allocating client project work to meet resourcing limitations and reviewing to ensure quality on time.',
            'ensured that our designs were deliverable by liaising with our development team, communicating requirements and clarifying on effort levels in order to reduce likelihood of scope creep.',
            'designed pitch graphics and bill designs to impress prospective clients.'
          ]
        }
      },
      {
        contentType: 'ROLE',
        title: 'Front-end Web Developer',
        companyName: 'Telefónica O2 Ireland',
        jobDates: 'October ’07 - November ’10',
        contents: {
          intro: 'I went in initially to work on a specific contract, then applied for a full-time position that became available while I was there.',
          listIntro: 'Working as one of 3 developers on the digital team:',
          listItems: [
            'I was required to develop solutions to specific business briefs, ranging in complexity from a JavaScript upgrade calculator to a PHP/MySQL-based store locator and a broadband coverage-checker integrated with Google maps.',
            'I maintained affiliate schemes provided by TradeDoubler and PigsBack, which tracked leads and O2 online store sales that completed after banner-clicks on third-party sites. (JavaScript/PHP)',
            'On an ongoing basis, I had to find creative solutions to circumvent numerous technical obstacles which presented situations where server-side scripting solutions were not available, for example using jQuery for screen-scraping, and DOM manipulation.'
          ]
        }
      },
      {
        contentType: 'ROLE',
        title: 'Self-Employed',
        companyName: false,
        jobDates: 'Nov ’03 - September ’07',
        contents: {
          intro: 'For a little over 3 years, I operated as a sole trader, working on numerous projects of various sizes. Naturally this meant I was involved in every aspect of running a business, from planning and communications with clients through to delivery. The job type varied; sometimes it was graphic design only, sometimes website design and build, sometimes training a client’s staff in web standards-compliance. Of course, being self-employed meant having to manage my own finances and keep accounts too.'
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
          intro: 'An e-learning company delivering online training services mainly to the US market. I ran a team of designers generating 8-bit graphics, supervising quality and ensuring on-time delivery. I was promoted to the senior role after 6 months as a junior.'
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
