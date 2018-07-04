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
    this.props.completeItem(this.props.purchase.id, this.props.item.id, !this.state.checked);
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
                <label htmlFor={this.props.item.id} onClick={() => {if (!this.props.bundle) this.check();}}>
                  {this.props.item.item_qty} {this.props.item.name}
                </label>
                <span className="lnr-label" onClick={() => this.props.toggle(this.props.item, false)}></span>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="purchase-profile">
                {/* <img src={this.props.user.photo} alt='' /> */}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  completeItem
}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseItem);
