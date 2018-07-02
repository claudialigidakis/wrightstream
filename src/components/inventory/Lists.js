// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists } from '../../actions/inventory';

// COMPONENTS
import ListsList from './ListsList';

// ==========

class Lists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lists: [],
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
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

  handleSubmit = () => {

  };

  componentDidMount () {
    this.props.getLists();
  };

  render () {
    console.log(this.props.lists)
    return (
      <div className="columns estimator-content">
        <div className="column is-6">
          <h1 className="title is-5">Lists</h1>
          <ul>
            {
              this.props.lists.map(list => {
                return (
                  <ListsList
                    key={list.id}
                    list={list}
                  />
                );
              })
            }
          </ul>
        </div>
        <div className="column is-6">
          <div className="estimator-supplies">
            <h1 className="title is-5">Source here</h1>
            <div className="has-text-right">
              <button className="button is-outlined is-primary" onClick={this.handleSubmit}>Order</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  lists: state.inventory.lists
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLists
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
