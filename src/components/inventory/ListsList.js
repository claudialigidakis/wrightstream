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
      checked: false
    };
  };

  check = () => {
    this.setState({checked: !this.state.checked});
  };

  render () {
    return (
      <li onClick={() => this.props.toggle(this.props.list.id)}>
        <input id={this.props.list.id} className="is-checkradio has-background-color is-white" type="checkbox" checked={this.state.checked} onChange={event => {event.preventDefault()}} />
        <label
          htmlFor={this.props.list.id}
          onClick={() => {
            this.props.select(this.props.list);
            this.check();
          }}
        >
          <span>{this.props.list.name}</span>
        </label>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListsList);
