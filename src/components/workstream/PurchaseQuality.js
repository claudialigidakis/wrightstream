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
      checked: this.props.purchase.quality_check ? true : null
    };
  };

  checkReady = () => {
    this.setState({checked: true});
  };

  checkSendBack = () => {
    this.setState({checked: false});
  };

  qualityCheck = boolean => {
    this.props.qualityCheck(this.props.purchase.id, boolean);
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
              name="quality"
              checked={this.state.checked === true}
              onChange={event => {event.preventDefault()}}
            />
            <label
              htmlFor="ready"
              onClick={() => {
                this.checkReady();
                this.qualityCheck(true);
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
              name="quality"
              checked={this.state.checked === false}
              onChange={event => {event.preventDefault()}}
            />
            <label
              htmlFor="sendback"
              onClick={() => {
                this.checkSendBack();
                this.qualityCheck(false);
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
