// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeStatus } from '../../actions/workstream';

// COMPONENTS
import PurchaseModal from './PurchaseModal';
import PurchaseStatus from './PurchaseStatus';
import PurchaseAssign from './PurchaseAssign';
import PurchaseProgress from './PurchaseProgress';
import PurchaseIcon from './PurchaseIcon';
import PurchaseAction from './PurchaseAction';

// ==========

class Purchase extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  changeStatus = (status, completed) => {
    this.props.changeStatus(this.props.purchase.id, status, completed);
  };

  render () {
    return (
      <div>
        <div className="card">
          <PurchaseStatus purchase={this.props.purchase} text={false} />
          <div className="card-content">
            <div className="content">
              <div className="columns is-marginless">
                <div className="column is-2">
                  <div className="store-logo">
                    C
                  </div>
                </div>
                <div className="column is-6">
                  <div className="purchase-progress">
                    <a onClick={this.toggle}>Purchase #{this.props.purchase.id}</a>
                    <PurchaseProgress
                      purchase={this.props.purchase}
                      progress={
                        (() => {
                          if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                            return 'supplies';
                          } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                            return 'products';
                          }
                        })()
                      }
                    />
                  </div>
                </div>
                <div className="column is-2 purchase-profile">
                  <PurchaseAssign purchase={this.props.purchase} user={this.props.user} changeStatus={this.changeStatus} />
                </div>
                <div className="column is-2 purchase-drag">
                  <PurchaseIcon purchase={this.props.purchase} />
                </div>
              </div>
            </div>
          </div>
          <PurchaseAction purchase={this.props.purchase} />
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-purchase">
            <PurchaseModal purchase={this.props.purchase} user={this.props.user} changeStatus={this.changeStatus} />
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
