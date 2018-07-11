// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { completeItem } from '../../actions/workstream';

// ==========

class PurchaseItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: this.props.item.completed
    };
  };

  check = () => {
    this.props.completeItem(this.props.purchase.id, this.props.item.id, !this.state.checked ? this.props.purchase.staff_id : null, !this.state.checked);
    this.setState({checked: !this.state.checked});
  };

  render () {
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                {
                  !this.props.bundle ? <input id={this.props.item.id} className="is-checkradio" type="checkbox" checked={this.state.checked} onChange={event => {event.preventDefault()}} /> : <span className="bullet">•</span>
                }
                <label
                  htmlFor={this.props.item.id}
                  onClick={() => {
                    if (!this.props.bundle) this.check();
                  }}
                  className={
                    (() => {
                      if (this.props.purchase && this.props.user.id === this.props.purchase.staff_id) {
                        if ((this.props.item.completed && this.props.user.id === this.props.item.staff_id) || this.props.item.completed === false) {
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
                  {this.props.item.item_qty} {this.props.item.name}
                </label>
                <span className="lnr-label" onClick={() => {this.props.toggle(this.props.item, false)}}></span>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="purchase-profile">
                {
                  !this.props.bundle && this.props.staff.find(staff => staff.id === this.props.item.staff_id) ?
                  <img
                    src={
                      this.props.staff.find(staff => staff.id === this.props.item.staff_id).photo
                    }
                    alt={
                      `${this.props.staff.find(staff => staff.id === this.props.item.staff_id).first_name[0]}${this.props.staff.find(staff => staff.id === this.props.item.staff_id).last_name[0]}`
                    }
                  /> : null
                }
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  completeItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseItem);
