// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import PurchaseModal from './PurchaseModal';

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

  render () {
    return (
      <div>
        <div className="card">
          <header className="card-header status-green"></header>
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
                    <a onClick={this.toggle}>Purchase #{this.props.id}</a>
                    <progress className="progress is-small" value="100" max="100" />
                  </div>
                </div>
                <div className="column is-2 purchase-profile">
                  {/* <div className="empty-photo"></div> */}
                  <img src={this.props.user.photo} alt='' />
                </div>
                <div className="column is-2 purchase-drag">
                  <span className="lnr-line-spacing"></span>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            Move to Pending
          </footer>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-purchase">
            <PurchaseModal item={this.props} />
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

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
