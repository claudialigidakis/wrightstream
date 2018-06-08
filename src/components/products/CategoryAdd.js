// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/products';

// ==========

class CategoryAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.name.value) {
      this.setState({
        invalid: true
      });
    } else {
      this.props.addCategory(this.state.name);
      this.clear();
      this.props.toggle();
    }
  };

  clear = () => {
    this.setState({
      name: '',
      invalid: false
    });
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Category Name"
              id="name"
              value={this.state.name}
              onChange={event => this.setState({name: event.target.value})}
            />
          </div>
        </div>
        {this.state.invalid ? (
          <p id="error" className="help is-danger has-text-centered">
            Please fill out all information correctly.
          </p>
        ) : null}
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Add Category</button>
        </div>
      </form>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addCategory
}, dispatch);

export default connect(null, mapDispatchToProps)(CategoryAdd);
