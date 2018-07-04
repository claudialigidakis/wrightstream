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
    // this.props.completeItem(this.props.purchase.id, this.props.item.id, !this.state.checked);
    this.setState({checked: !this.state.checked});
  };

  render () {
    return (
      <li>
        <input id={this.props.list.id} className="is-checkradio" type="checkbox" checked={this.state.checked} onChange={event => {event.preventDefault()}} />
        <label
          htmlFor={this.props.list.id}
          onClick={() => {
            this.props.addSelected(this.props.list);
            this.check();
          }}
        >
          {this.props.list.name}
        </label>
        <span className="lnr-label" onClick={() => this.props.toggle(this.props.list.id)}></span>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListsList);
