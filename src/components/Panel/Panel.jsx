import styles from './Panel.css';
import PanelColumn from '../PanelColumn';
import React from 'react';
import RatingBadge from '../RatingBadge/RatingBadge';


export default class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.subpanelContentArray = [];
    this.ratingBadgeArray;
   
    // If a contentArray is passed... 
    if (typeof this.props.contentArray !== "undefined") {
        // console.log('this.props.contentArray',this.props.contentArray);

     // if (this.props.contentArray.length > 1) {
        this.props.contentArray.map(( contentItem, i ) => {
           
          // Add the subheader
          this.subpanelContentArray.push(
            <div className={ styles.subHeader } key={ 'cik_' + i } >{ contentItem.title }</div>
          );

          console.log('contentItem.contents',contentItem.contents, typeof contentItem.contents);

          if (typeof contentItem.contents === 'object') {

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
            this.subpanelContentArray.push(
             <PanelColumn key={ 'rba_' + i }>{ this.ratingBadgeArray }</PanelColumn>
            );

          }
          else
          {
            this.subpanelContentArray.push(
             <PanelColumn key={ 'rba_' + i } markup={ contentItem.contents } />
            );
          }
          return true;

        });

        console.log('subpanelContentArray',this.subpanelContentArray);

     // }

    } 

  }

  render() { 
    return (
      <div className={styles.panel}>
          <div className={styles.panelHeader}>{this.props.panelTitle}</div>
          <div className={styles.panelPanel}>
              
              <div className={styles.panelColumn}>{ (this.subpanelContentArray.length === 0) ? <PanelColumn>{this.props.children}</PanelColumn> : this.subpanelContentArray }</div>
          </div>
      </div>
    );
  }
}
