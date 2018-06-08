// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editKind } from '../../actions/products';

// ==========

class KindEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      kind: 'default',
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.name.value || event.target.kind.value === 'default') {
      this.setState({
        invalid: true
      });
    } else {
      const kind_id = this.props.kinds.find(kind => kind.name === this.state.kind).id;
      this.props.editKind(kind_id, this.state.name);
      this.clear();
      this.props.toggle();
    }
  };

  clear = () => {
    this.setState({
      name: '',
      kind: 'default',
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
          <button className="button is-primary is-outlined">Edit Kind</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  kinds: state.products.kinds
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editKind
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(KindEdit);
