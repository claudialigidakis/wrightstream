// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeStatus } from '../../actions/workstream';

// COMPONENTS
import PurchaseStatus from './PurchaseStatus';
import PurchasePhoto from './PurchasePhoto';
import PurchaseProgress from './PurchaseProgress';
import PurchaseIcon from './PurchaseIcon';
import PurchaseAction from './PurchaseAction';
import PurchaseModal from './PurchaseModal';
import PurchaseAssign from './PurchaseAssign';

// ==========

class Purchase extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      assign: false,
      assignClasses: 'modal'
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

  assign = () => {
    if (!this.state.assign) {
      this.setState({
        assign: true,
        assignClasses: this.state.assignClasses + ' is-active'
      });
    } else {
      this.setState({
        assign: false,
        assignClasses: 'modal'
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
                  <PurchasePhoto purchase={this.props.purchase} user={this.props.user} changeStatus={this.changeStatus} assign={this.assign} />
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
          <PurchaseModal purchase={this.props.purchase} user={this.props.user} changeStatus={this.changeStatus} assign={this.assign} />
          <button className="modal-close is-large" onClick={this.toggle}></button>
        </div>
        <div className={this.state.assignClasses}>
          <div className="modal-background" onClick={this.assign}></div>
          <PurchaseAssign purchase={this.props.purchase} />
          <button className="modal-close is-large" onClick={this.assign}></button>
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
