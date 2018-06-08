// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTypes, editSource } from '../../actions/products';

// ==========

class SourceEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.source.name,
      type: this.props.source.types.find(type => type.id === this.props.source.type_id).name,
      link: this.props.source.link,
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.name.value || !event.target.link.value) {
      this.setState({
        invalid: true
      });
    } else {
      const type_id = this.props.types.find(type => type.name === this.state.type).id;
      this.props.editSource(this.props.source.id, this.state.name, this.state.link, type_id);
      this.props.toggle();
    }
  };

  componentDidMount = () => {
    this.props.getTypes();
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Source Name"
              id="name"
              value={this.state.name}
              onChange={event => this.setState({name: event.target.value})}
            />
          </div>
        </div>
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
                    <option value="default" disabled>Type</option>
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
                  placeholder="Link"
                  id="link"
                  value={this.state.link}
                  onChange={event => this.setState({link: event.target.value})}
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
          <button className="button is-primary is-outlined">Edit Source</button>
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
  editSource
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SourceEdit);
