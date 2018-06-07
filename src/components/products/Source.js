// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import SourceEdit from './SourceEdit';
import SourceDelete from './SourceDelete';

// ==========

class Source extends React.Component {
  constructor (props)  {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      modalControl: false,
      modalControlClasses: 'modal',
      action: ''
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

  toggleControl = event => {
    if (!this.state.modalControl) {
      this.setState({
        modalControl: true,
        modalControlClasses: this.state.modalControlClasses + ' is-active',
        action: event.target.id
      });
    } else {
      this.setState({
        modalControl: false,
        modalControlClasses: 'modal',
        action: ''
      });
    }
  };

  render = () => {
    return (
      <tr onClick={this.toggle}>
        <td>
          {this.props.name}
        </td>
        <td>
          {
            this.props.types.find(type => type.id === this.props.type_id) ?
            (
              this.props.types.find(type => type.id === this.props.type_id).name
            ) : null
          }
        </td>
        <td>
          {this.props.link}
          <div className={this.state.modalClasses}>
            <div className="modal-background" onClick={this.toggle}></div>
            <div className="modal-content">
              <div className="modal-container">
                <div>
                  <h1 className="title is-3">{this.props.name}</h1>
                  <small>
                    {
                      this.props.types.find(type => type.id === this.props.type_id) ?
                      (
                        this.props.types.find(type => type.id === this.props.type_id).name
                      ) : null
                    }
                  </small>
                </div>
                <div>
                  {this.props.link}
                </div>
              </div>
              <div className="source-control">
                <div>
                  <a onClick={event => this.toggleControl(event)}>
                    <span id="edit-source" className="lnr-pencil"></span>
                  </a>
                </div>
                <div>
                  <a onClick={event => this.toggleControl(event)}>
                    <span id="delete-source" className="lnr-trash2"></span>
                  </a>
                </div>
              </div>
            </div>
            <button className="modal-close is-large" onClick={this.toggle}></button>
          </div>

          <div className={this.state.modalControlClasses}>
            <div className="modal-background" onClick={this.toggleControl}></div>
            <div className="modal-content">
              <div className="modal-container">
                {
                  this.state.action === 'edit-source' ? <SourceEdit source={this.props} toggle={this.toggleControl} /> : (
                    this.state.action === 'delete-source' ? <SourceDelete source={this.props} toggle={this.toggleControl} toggleParent={this.toggle} /> : null
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
  types: state.products.types
});

export default connect(mapStateToProps, null)(Source);
