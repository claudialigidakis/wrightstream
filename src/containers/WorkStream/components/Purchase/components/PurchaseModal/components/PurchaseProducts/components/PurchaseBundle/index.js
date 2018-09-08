// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { completeBundle } from '../../state/actions/workstream';

// COMPONENTS
import PurchaseItem from './PurchaseItem';

// ==========

class PurchaseBundle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: this.props.bundle.completed
    };
  };

  check = () => {
    this.props.completeBundle(this.props.purchase.id, this.props.bundle.id, !this.state.checked ? this.props.purchase.staff_id : null, !this.state.checked);
    this.setState({checked: !this.state.checked});
  };

  render () {
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                <input className="is-checkradio" type="checkbox" checked={this.state.checked} onChange={event => {event.preventDefault()}} />
                <label
                  onClick={this.check}
                  className={
                    (() => {
                      if (this.props.purchase && this.props.user.id === this.props.purchase.staff_id) {
                        if ((this.props.bundle.completed && this.props.user.id === this.props.bundle.staff_id) || this.props.bundle.completed === false) {
                          if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                            return 'disable';
                          } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                            return 'disable';
                          } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                            return null;
                          } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                            return 'disable';
                          } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
                            return 'disable';
                          }
                        } else {
                          return 'disable';
                        }
                      } else {
                        return 'disable';
                      }
                    })()
                  }
                >
                  {this.props.bundle.bundle_qty} {this.props.bundle.name}
                </label>
                <span className="lnr-label" onClick={event => {this.props.toggle(this.props.bundle, true)}}></span>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="purchase-profile">
                {
                  this.props.staff.find(staff => staff.id === this.props.bundle.staff_id) ?
                  <img
                    src={
                      this.props.staff.find(staff => staff.id === this.props.bundle.staff_id).photo
                    }
                    alt={
                      `${this.props.staff.find(staff => staff.id === this.props.bundle.staff_id).first_name[0]}${this.props.staff.find(staff => staff.id === this.props.bundle.staff_id).last_name[0]}`
                    }
                  /> : null
                }
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

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  completeBundle
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseBundle);
