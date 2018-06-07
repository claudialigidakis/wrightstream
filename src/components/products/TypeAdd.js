// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { addSource } from '../../actions/products';

// ==========

class TypeAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      invalid: false
    };
  };

  handleAdd = event => {
    event.preventDefault();
    if (!event.target.name.value) {
      this.setState({
        invalid: true
      });
    } else {
      //this.props.createReview(this.state.title, this.state.text, this.state.stars, this.props.user.id, this.props.snackId);
      console.log(this.state.name)
      this.clear();
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
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Add Type</button>
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

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TypeAdd);
