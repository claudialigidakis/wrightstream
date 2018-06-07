// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTypes, editType } from '../../actions/products';

// ==========

class TypeEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      type: 'Select type',
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.name.value || event.target.type.value === 'Select type') {
      this.setState({
        invalid: true
      });
    } else {
      const type_id = this.props.types.find(type => type.name === this.state.type).id;
      this.props.editType(type_id, this.state.name);
      this.clear();
      this.props.toggle();
    }
  };

  clear = () => {
    this.setState({
      name: '',
      type: 'Select type',
      invalid: false
    });
  };

  componentDidMount () {
    this.props.getTypes();
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select
                    id="type"
                    value={this.state.type}
                    onChange={event => this.setState({type: event.target.value})}
                    >
                    <option value="Select type" disabled>Select type</option>
                    {
                      this.props.types.map(type => {
                        return (
                          <option key={type.id} value={type.name}>{type.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Rename"
                  id="name"
                  value={this.state.name}
                  onChange={event => this.setState({name: event.target.value})}
                />
              </div>
            </div>
          </div>
        </div>
        {this.state.invalid ? (
          <p id="error" className="help is-danger has-text-centered">
            Please fill out all information correctly.
          </p>
        ) : null}
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Edit Type</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  types: state.products.types
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTypes,
  editType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TypeEdit);