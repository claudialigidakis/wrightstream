// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { qualityCheck } from '../../../../../../../../state/actions/workstream';

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
        this.props.assignStaff();
        this.props.changeStatus(4, true);
      }
    }
  };

  render () {
    return (
      <ul
        className={
          (() => {
            if (this.props.purchase && this.props.user.id === this.props.purchase.staff_id) {
              if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                return 'disable';
              } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                return 'disable';
              } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                return 'disable';
              } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                return null;
              } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
                return 'disable';
              }
            } else {
              return 'disable';
            }
          })()
        }
      >
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
                this.props.changeStatus(4, this.props.purchase.statuses.find(status => status.status_id === 4).completed, this.props.purchase.staff_id);
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

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  qualityCheck
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseQuality);
