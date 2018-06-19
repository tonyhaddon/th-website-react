import React, { Component } from 'react';
import styles from './PanelColumn.css';

class PanelColumn extends Component {
  render() {

  	let output = [];

  	if (this.props.contents) {
  		// This is only true if the ROLE type of content is passed

  		let c = this.props.contents;

  		// Build 'intro'
  		let intro = c.intro;

  		// Build 'listintro'

  		let listIntro = c.listIntro;

  		// Build 'listItems'

      let listItems;

  		console.log('c.listItems:', c.listItems, 'this.props.contents',this.props.contents);

  		if (c.listItems) {

        listItems = c.listItems.map((listItem,i) => {
            return (
              <li key={ 'roleitem_' + i }>{ listItem }</li>
            )
          }
  		  );
      }

  		if (intro) output.push(<p key={ 'rlint' + this.props.panelColumnIndex } className={ styles.roleIntro }>{ intro }</p>);
  		if (listIntro) output.push(<p key={ 'rlliint' + this.props.panelColumnIndex } className={ styles.listIntro }>{ listIntro }</p>);
  		if (listItems) output.push(<ul key={ 'rllii' + this.props.panelColumnIndex } className={ styles.list }>{ listItems }</ul>);

  	} else {
  		// This is only true if the SKILLS type of content is passed
  		output = this.props.contents;
  	}

	console.log('output', output, 'this.props.contents', this.props.contents);


    return (
    	<div className={ styles.panelColumn }>{ (output) ? output : this.props.children }</div>
    );
  }
}

export default PanelColumn;
