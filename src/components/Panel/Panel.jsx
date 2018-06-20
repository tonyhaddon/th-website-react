import styles from './Panel.css';
import React from 'react';
import PanelColumn from '../PanelColumn/PanelColumn';
import RatingBadge from '../RatingBadge/RatingBadge';


export default class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.subPanelContentArray = [];
    this.ratingBadgeArray = [];
    // pass panelIndex for keys
    let panelIndex = this.props.panelIndex;
   
    // If a contentArray is passed... 
    if (typeof this.props.contentArray !== "undefined") {
        // console.log('this.props.contentArray',this.props.contentArray);

     // if (this.props.contentArray.length > 1) {
        this.props.contentArray.map(( contentItem, i ) => {
           
          // Add the subheader
          this.subPanelContentArray.push(
            this.buildSubHeader(contentItem, panelIndex, i)
          );

          console.log('contentItem.contents',contentItem.contents, typeof contentItem.contents);

          if (contentItem.contentType === 'SKILLS') {

            // This means skill ratings badges
            // Initialize the array variable for each loop...
            this.ratingBadgeArray = [];

            // Build the array of RatingsBadges from contentItem's contents subarray...
            contentItem.contents.map((badgeContentItem,k) => {

              // console.log('badgeContentItem',badgeContentItem);
              this.ratingBadgeArray.push(<RatingBadge key={'k_' + k} name={ badgeContentItem.skillName } rating={ badgeContentItem.skillRating } />)
              return true;
            });

            // Append to the column div
            this.subPanelContentArray.push(
             <PanelColumn key={ 'rba_' + i }>{ this.ratingBadgeArray }</PanelColumn>
            );

          }
          else
          {
            this.subPanelContentArray.push(
             <PanelColumn key={ 'rba_' + i } panelColumnIndex={ i } contents={ contentItem.contents } />
            );
          }
          return true;

        });

        console.log('subPanelContentArray',this.subPanelContentArray);

     // }

    } 

  }

  buildSubHeader(contentItem, p, i) {
  
    let subHeaderContents = [], theStyle;

    subHeaderContents.push(<p key={ 'tt_' + p + '_' + i  } className={ styles.subHeaderTitle }>{ contentItem.title }</p>);
    theStyle = styles.subHeader;
    
    //  Add <p>s for the relevant data...
    if (contentItem.companyName) {
      subHeaderContents.push(<p key={ 'rt_' + p + '_' + i  } className={ styles.subHeaderCompanyName }>{ contentItem.companyName }</p>);
      theStyle = styles.subHeaderWithSubtitle;
    }

    if (contentItem.jobDates) {
      subHeaderContents.push(<p key={ 'st_' + p + '_' + i  } className={ styles.subHeaderSubtitle }>{ contentItem.jobDates }</p>);
      theStyle = styles.subHeaderWithSubtitle;
    }

    return (
      <div className={ theStyle } key={ 'cik_' + p + '_' + i } >{ subHeaderContents }</div>      
    );

  }

  render() { 
    return (
      <div className={ styles.panel }>
          <div className={ styles.panelHeader }>{ this.props.panelTitle }</div>
          <div className={ styles.panelPanel }>
              
              <div className={ styles.panelColumn }>{ (this.subPanelContentArray.length === 0) ? <PanelColumn key={ 'pck_' + this.panelIndex } panelIndex={ this.panelIndex }>{ this.props.children }</PanelColumn> : this.subPanelContentArray }</div>
          </div>
      </div>
    );
  }
}
