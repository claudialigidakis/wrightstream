// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSources } from '../../state/actions/products';

// COMPONENTS
import SupplyEdit from './SupplyEdit';
import SupplyDelete from './SupplyDelete';

// ==========

class Supply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      modalControl: false,
      modalControlClasses: 'modal',
      modalDisable: false,
      action: ''
    };
  };

  toggle = () => {
    if (!this.state.modalDisable) {
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
    }
  };

  toggleControl = event => {
    if (!this.state.modalControl) {
      this.setState({
        modalControl: true,
        modalControlClasses: this.state.modalControlClasses + ' is-active',
        modalDisable: true,
        action: event.target.id
      });
    } else {
      this.setState({
        modalControl: false,
        modalControlClasses: 'modal',
        modalDisable: false,
        action: ''
      });
    }
  };

  componentDidMount () {
    this.props.getSources();
  };

  render () {
    return (
      <tr onClick={this.toggle}>
        <td>{this.props.name}</td>
        <td>
          {
            this.props.kinds.find(kind => kind.id === this.props.kind_id) ?
            (
              this.props.kinds.find(kind => kind.id === this.props.kind_id).name
            ) : null
          }
        </td>
        <td>
          {
            this.props.sources.find(source => source.id === this.props.source_id) ?
            (
              this.props.sources.find(source => source.id === this.props.source_id).name
            ) : null
          }
          <div className={this.state.modalClasses}>
            <div className="modal-background" onClick={this.toggle}></div>
            <div className="modal-content">
              <div className="modal-container">
                <div>
                  <h1 className="title is-3">{this.props.name}</h1>
                  <small>
                    {
                      this.props.kinds.find(kind => kind.id === this.props.kind_id) ?
                      (
                        this.props.kinds.find(kind => kind.id === this.props.kind_id).name
                      ) : null
                    }
                  </small>
                </div>
                <div>
                  {
                    this.props.sources.find(source => source.id === this.props.source_id) ?
                    (
                      <span>
                        <em>from</em>
                        {this.props.sources.find(source => source.id === this.props.source_id).name}
                      </span>
                    ) : null
                  }
                </div>
              </div>
              <div className="supply-control">
                <div>
                  <a onClick={event => this.toggleControl(event)}>
                    <span id="edit" className="lnr-pencil"></span>
                  </a>
                </div>
                <div>
                  <a onClick={event => this.toggleControl(event)}>
                    <span id="delete" className="lnr-trash2"></span>
                  </a>
                </div>
              </div>
            </div>
            <button className="modal-close is-large"  onClick={this.toggle}></button>
          </div>
          <div className={this.state.modalControlClasses}>
            <div className="modal-background" onClick={this.toggleControl}></div>
            <div className="modal-content modal-form">
              <div className="modal-container">
                {
                  this.state.action === 'edit' ? <SupplyEdit supply={this.props} toggle={this.toggleControl} /> : (
                    this.state.action === 'delete' ? <SupplyDelete supply={this.props} toggle={this.toggleControl} toggleParent={this.toggle} /> : null
                  )
                }
              </div>
            </div>
            <button className="modal-close is-large"  onClick={this.toggleControl}></button>
          </div>
        </td>
      </tr>
    );
  };
};

const mapStateToProps = state => ({
  kinds: state.products.kinds,
  sources: state.products.sources
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Supply);
