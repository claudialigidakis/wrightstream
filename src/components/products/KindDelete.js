// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteKind } from '../../state/actions/products';

// ==========

class KindDelete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      kind: 'default',
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (event.target.kind.value === 'default') {
      this.setState({
        invalid: true
      });
    } else {
      const kind_id = this.props.kinds.find(kind => kind.name === this.state.kind).id;
      this.props.deleteKind(kind_id);
      this.clear();
      this.props.toggle();
    }
  };

  clear = () => {
    this.setState({
      kind: 'default',
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
                id="kind"
                value={this.state.kind}
                onChange={event => this.setState({kind: event.target.value})}
                >
                <option value="default" disabled>Kind</option>
                {
                  this.props.kinds.map(kind => {
                    return (
                      <option key={kind.id} value={kind.name}>{kind.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
        {this.state.invalid ? (
          <p id="error" className="help is-danger has-text-centered">
            Please select a valid kind to delete.
          </p>
        ) : null}
        <br />
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Delete Kind</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  kinds: state.products.kinds
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteKind
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(KindDelete);
