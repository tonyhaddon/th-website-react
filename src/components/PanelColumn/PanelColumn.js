import React, { Component } from 'react';
import styles from './PanelColumn.css';

class PanelColumn extends Component {
  render() {
  	
    return (
    	<div className={ styles.panelColumn }>{ this.props.children }</div>
    );
  }
}

export default PanelColumn;
