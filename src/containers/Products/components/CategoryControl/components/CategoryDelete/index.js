// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteCategory } from '../../../../../../state/actions/products';

// ==========

class CategoryDelete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      category: 'default',
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (event.target.category.value === 'default') {
      this.setState({
        invalid: true
      });
    } else {
      const category_id = this.props.categories.find(category => category.name === this.state.category).id;
      this.props.deleteCategory(category_id);
      this.clear();
      this.props.toggle();
    }
  };

  clear = () => {
    this.setState({
      category: 'default',
      invalid: false
    });
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                id="category"
                value={this.state.category}
                onChange={event => this.setState({category: event.target.value})}
                >
                <option value="default" disabled>Category</option>
                {
                  this.props.categories.map(category => {
                    return (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
        {this.state.invalid ? (
          <p id="error" className="help is-danger has-text-centered">
            Please select a valid category to delete.
          </p>
        ) : null}
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Delete Category</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteCategory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDelete);
