// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class ListsSupply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <li style={{display: 'flex', justifyContent: 'space-between', margin: '0 1rem'}}>
        <span>
          {
            this.props.supplies.find(supply => supply.id === this.props.supply.supply_id).name
          }
        </span>
        <span>
          {this.props.supply.supply_qty}
          <span className="supply-unit has-text-left" style={{display: 'inline-block', marginLeft: '.5rem', width: '25px'}}>{this.props.supply.supply_measure_type}</span>
        </span>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListsSupply);
