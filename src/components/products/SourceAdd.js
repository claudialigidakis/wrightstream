// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTypes } from '../../actions/products';
//import { addSource } from '../../actions/products';

// ==========

class SourceAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      type: 'Select type',
      link: '',
      invalid: false
    };
  };

  handleAdd = event => {
    event.preventDefault();
    if (!event.target.name.value || !event.target.type.value || !event.target.link.value) {
      this.setState({
        invalid: true
      });
    } else {
      //this.props.createReview(this.state.title, this.state.text, this.state.stars, this.props.user.id, this.props.snackId);
      console.log(this.state.name, this.state.type, this.state.link)
      this.clear();
    }
  };

  clear = () => {
    this.setState({
      name: '',
      type: 'Select type',
      link: '',
      invalid: false
    });
  };

  componentDidMount () {
    this.props.getTypes();
  };

  render () {
    return (
      <form onSubmit={this.handleAdd}>
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
                  <select value={this.state.type} onChange={event => this.setState({type: event.target.value})}>
                    <option disabled>Select type</option>
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

        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Add Source</button>
        </div>
        {this.props.invalid ? (
          <p id="error" className="help is-danger">
            Please fill out all information correctly.
          </p>
        ) : null}
      </form>
    );
  };
};

const mapStateToProps = state => ({
  types: state.products.types
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTypes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SourceAdd);
