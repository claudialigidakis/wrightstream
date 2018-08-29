// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editCategory } from '../../state/actions/products';

// ==========

class CategoryEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      category: 'default',
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.name.value || event.target.category.value === 'default') {
      this.setState({
        invalid: true
      });
    } else {
      const category_id = this.props.categories.find(category => category.name === this.state.category).id;
      this.props.editCategory(category_id, this.state.name);
      this.clear();
      this.props.toggle();
    }
  };

  clear = () => {
    this.setState({
      name: '',
      category: 'default',
      invalid: false
    });
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
        <br />
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Edit Category</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editCategory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEdit);
