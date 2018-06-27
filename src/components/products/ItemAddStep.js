// REACT
import React from 'react';

// ==========

class ItemAddStep extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      step: this.props.step ? this.props.step.instructions : ''
    };
  };

  clear = () => {
    this.setState({
      step: this.props.step ? this.props.step.instructions : ''
    });
  };

  render () {
    return (
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field" style={{ width: '92%' }}>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your instructions..."
                id="step"
                value={this.state.step}
                onChange={event => {
                  this.setState({step: event.target.value});
                  this.props.addStep(this.props.input, event.target.value);
                }}
              />
            </div>
          </div>
          <div className="control" style={{ width: '8%' }}>
            {
              this.props.i === this.props.length ? (
                <button
                  style={{ width: '100%' }}
                  type="button"
                  className="button is-success is-outlined"
                  onClick={() => this.props.appendInput()}
                >+</button>
              ) : (
                <button
                  style={{ width: '100%' }}
                  type="button"
                  className="button is-danger is-outlined"
                  onClick={() => {
                    this.props.deleteStep(this.props.input);
                    this.props.deleteInput(this.props.i);
                  }}
                >-</button>
              )
            }
          </div>
        </div>
      </div>
    );
  };
};

export default ItemAddStep;
