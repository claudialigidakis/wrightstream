// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// ==========

class Source extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle () {
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
      <tr onClick={this.toggle}>
        <td>{this.props.name}</td>
        <td>
          {
            this.props.types.find(type => type.id === this.props.type_id) ?
            (
              this.props.types.find(type => type.id === this.props.type_id).name
            ) : null
          }
        </td>
        <td>{this.props.link}</td>

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
              <div><a href=""><span className="lnr-pencil"></span></a></div>
              <div><a href=""><span className="lnr-trash2"></span></a></div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggle}></button>
        </div>
      </tr>
    );
  };
};

const mapStateToProps = state => ({
  types: state.products.types
});

export default connect(mapStateToProps, null)(Source);
