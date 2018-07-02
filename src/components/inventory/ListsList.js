// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class ListsList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };
  
  render () {
    return (
      <li>
        <button className="button is-primary">{this.props.list.name}</button>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListsList);
