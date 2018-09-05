// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSupply } from '../../state/actions/products';

// ==========

class SupplyAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      stock: 0,
      measure_type: 'default',
      source: 'default',
      kind: 'default',
      invalid: false
    };
  };

  clear = () => {
    this.setState({
      name: '',
      stock: 0,
      measure_type: 'default',
      source: 'default',
      kind: 'default',
      invalid: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.name.value || event.target.measure_type.value === 'default' || event.target.kind.value === 'default' || event.target.source.value === 'default') {
      this.setState({
        invalid: true
      });
    } else {
      const source_id = this.props.sources.find(source => source.name === this.state.source).id;
      const kind_id = this.props.kinds.find(kind => kind.name === this.state.kind).id;
      this.props.addSupply(this.state.name, this.state.stock, this.state.measure_type, source_id, kind_id);
      this.clear();
      this.props.toggle();
    }
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Supply Name"
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
                <div className="select">
                  <select
                    id="measure_type"
                    value={this.state.measure_type}
                    onChange={event => this.setState({measure_type: event.target.value})}
                    >
                    <option value="default" disabled>Measurement</option>
                    <option value="length">Length</option>
                    <option value="mass">Mass</option>
                    <option value="volume">Volume</option>
                    <option value="unit">Unit</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                id="source"
                value={this.state.source}
                onChange={event => this.setState({source: event.target.value})}
                >
                <option value="default" disabled>Source</option>
                {
                  this.props.sources.map(source => {
                    return (
                      <option key={source.id} value={source.name}>{source.name}</option>
                    )
                  })
                }
              </select>
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
          <button className="button is-primary is-outlined">Add Supply</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  sources: state.products.sources,
  kinds: state.products.kinds
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addSupply
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SupplyAdd);
