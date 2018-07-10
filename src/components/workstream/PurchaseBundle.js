// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { completeBundle } from '../../actions/workstream';

// COMPONENTS
import PurchaseItem from './PurchaseItem';

// ==========

class PurchaseBundle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: this.props.bundle.completed,
      staff: this.props.purchase.staff_id ? true : false
    };
  };

  check = () => {
    this.props.completeBundle(this.props.purchase.id, this.props.bundle.id, !this.state.staff ? this.props.purchase.staff_id : null, !this.state.checked);
    this.setState({
      checked: !this.state.checked,
      staff: !this.state.staff
    });
    console.log(this.props.purchase.staff_id)
  };

  render () {
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                <input className="is-checkradio" type="checkbox" checked={this.state.checked} onChange={event => {event.preventDefault()}} />
                <label onClick={this.check}>{this.props.bundle.bundle_qty} {this.props.bundle.name}</label> <span className="lnr-label" onClick={event => this.props.toggle(this.props.bundle, true)}></span>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="purchase-profile">
                {
                  this.props.staff.find(staff => staff.id === this.props.bundle.staff_id) ? <img src={this.props.staff.find(staff => staff.id === this.props.bundle.staff_id).photo} alt='' /> : null
                }
                {/* {
                  this.props.staff.find(staff => staff.id === this.props.purchase.staff_id) ? <img src={this.props.staff.find(staff => staff.id === this.props.purchase.staff_id).photo} alt='' /> : null
                } */}
              </div>
            </div>
          </div>
        </div>
        <ul>
          {
            this.props.bundle.bundle_items.map(item => {
              return <PurchaseItem key={item.id} item={item} bundle={true} toggle={this.props.toggle} />;
            })
          }
        </ul>
      </li>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  completeBundle
}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseBundle);
