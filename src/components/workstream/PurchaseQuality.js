// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { qualityCheck } from '../../actions/workstream';

// ==========

class PurchaseQuality extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: this.props.purchase.quality_check ? true : ''
    };
  };

  check = boolean => {
    this.setState({checked: boolean});
    this.props.qualityCheck(this.props.purchase.id, boolean);
  };

  componentDidUpdate (prevProps) {
    if (this.props.purchase.quality_check !== prevProps.purchase.quality_check || this.props.purchase.pick_up !== prevProps.purchase.pick_up) {
      if (this.props.purchase.quality_check && (this.props.purchase.pick_up || this.props.purchase.pick_up === false)) {
        this.props.changeStatus(4, true);
      }
    }
  };

  render () {
    return (
      <ul>
        <li>
          <div className="field">
            <input
              className="is-checkradio"
              id="ready"
              type="radio"
              checked={this.state.checked}
              onChange={event => {event.preventDefault()}}
            />
            <label
              htmlFor="ready"
              onClick={() => {
                this.check(true);
              }}
            >
              Ready for delivery
            </label>
          </div>
        </li>
        <li>
          <div className="field">
            <input
              className="is-checkradio"
              id="sendback"
              type="radio"
              checked={this.state.checked === false}
              onChange={event => {event.preventDefault()}}
            />
            <label
              htmlFor="sendback"
              onClick={() => {
                this.check(false);
              }}
            >
              Send back to crafting
            </label>
          </div>
        </li>
      </ul>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  qualityCheck
}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseQuality);
