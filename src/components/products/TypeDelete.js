// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTypes } from '../../actions/products';
//import { addSource } from '../../actions/products';

// ==========

class TypeDelete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      type: 'Select type',
      invalid: false
    };
  };

  handleDelete = event => {
    event.preventDefault();
    if (!event.target.type.value) {
      this.setState({
        invalid: true
      });
    } else {
      //this.props.createReview(this.state.title, this.state.text, this.state.stars, this.props.user.id, this.props.snackId);
      console.log(this.state.type)
      this.clear();
    }
  };

  clear = () => {
    this.setState({
      type: 'Select type',
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

        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Delete Type</button>
        </div>
        {this.props.invalid ? (
          <p id="error" className="help is-danger">
            Please select a valid type to delete.
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

export default connect(mapStateToProps, mapDispatchToProps)(TypeDelete);
