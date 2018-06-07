// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSources } from '../../actions/products';

// ==========

class Supply extends React.Component {
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
        </td>

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
  kinds: state.products.kinds,
  sources: state.products.sources
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Supply);
