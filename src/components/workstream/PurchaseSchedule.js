// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { schedule } from '../../actions/workstream';

// HELPERS
const moment = require('moment');

// ==========

class PurchaseSchedule extends React.Component {
  constructor (props) {
    super(props);
    const today = new Date();
    this.state = {
      checked: this.props.purchase.pick_up || this.props.purchase.pick_up === false ? this.props.purchase.pick_up : undefined,
      pickupClasses: this.props.purchase.pick_up ? '' : 'is-hidden',
      shipClasses: this.props.purchase.pick_up === false ? '' : 'is-hidden',
      date: this.props.purchase.delivery_date ? this.props.purchase.delivery_date : moment(today).format('YYYY-MM-DD'),
      service: this.props.purchase.service ? this.props.purchase.service : '',
      tracking: this.props.purchase.tracking ? this.props.purchase.tracking : ''
    };
  };

  check = boolean => {
    this.setState({checked: boolean}, this.toggle);
  };

  toggle = () => {
    if (this.state.checked) {
      this.setState({
        pickupClasses: '',
        shipClasses: 'is-hidden'
      });
    } else if (this.state.checked === false) {
      this.setState({
        pickupClasses: 'is-hidden',
        shipClasses: ''
      });
    } else {
      this.setState({
        pickupClasses: 'is-hidden',
        shipClasses: 'is-hidden'
      });
    }
  };

  schedule = (pickup, date, service = null, tracking = null) => {
    this.props.schedule(this.props.purchase.id, pickup, date, service !== '' ? service : null, tracking !== '' ? tracking : null);
    if (this.props.purchase.quality_check && (this.props.purchase.pick_up || this.props.purchase.pick_up === false)) {
      this.props.changeStatus(4, true);
    }
  };

  render () {
    return (
      <ul>
        <li>
          <div className="field">
            <input
              className="is-checkradio"
              id="pickup"
              type="radio"
              checked={this.state.checked === true}
              onChange={event => {event.preventDefault()}}
            />
            <label
              htmlFor="pickup"
              onClick={() => {this.check(true)}}
            >
              Pick Up
            </label>
          </div>
        </li>
        <li className={this.state.pickupClasses}>
          <div className="field">
            <input
              className="input"
              type="date"
              id="date"
              value={moment(this.state.date).format('YYYY-MM-DD')}
              onChange={event => {this.setState({date: moment(event.target.value).format()})}}
            />
          </div>
          <div className="has-text-centered" style={{paddingBottom: '1rem'}}>
            <button
              className="button is-small is-primary"
              disabled={!this.state.date}
              onClick={() => this.schedule(true, this.state.date)}
            >Save</button>
          </div>
        </li>
        <li>
          <div className="field">
            <input
              className="is-checkradio"
              id="ship"
              type="radio"
              checked={this.state.checked === false}
              onChange={event => {event.preventDefault()}}
            />
            <label
              htmlFor="ship"
              onClick={() => {this.check(false)}}
            >
              Ship
            </label>
          </div>
        </li>
        <li className={this.state.shipClasses}>
          <div className="field">
            <input
              className="input"
              type="date"
              id="date"
              value={moment(this.state.date).format('YYYY-MM-DD')}
              onChange={event => {this.setState({date: moment(event.target.value).format()})}}
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="text"
              placeholder="Delivery Service"
              id="service"
              value={this.state.service}
              onChange={event => {this.setState({service: event.target.value})}}
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="text"
              placeholder="Tracking Number"
              id="tracking"
              value={this.state.tracking}
              onChange={event => {this.setState({tracking: event.target.value})}}
            />
          </div>
          <div className="has-text-centered" style={{paddingBottom: '1rem'}}>
            <button
              className="button is-small is-primary"
              disabled={!this.state.date}
              onClick={() => this.schedule(false, this.state.date, this.state.service, this.state.tracking)}
            >Save</button>
          </div>
        </li>
      </ul>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  schedule
}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseSchedule);
