// REACT
import React from 'react';

// ==========

class SourceControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle () {
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

  render () {
    return (
      <div className="products-control buttons is-right">
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <a className="button is-primary">
              <span className="icon"><i className="fas fa-plus"></i></span>
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item" onClick={this.toggle}>
                Add Source
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <a className="button">
              <span className="icon"><i className="fas fa-cog"></i></span>
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item">
                Add Type
              </a>
              <a className="dropdown-item">
                Rename Type
              </a>
              <a className="dropdown-item">
                Delete Type
              </a>
            </div>
          </div>
        </div>

        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">

                <form>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Source Name"
                        id="email"
                        // value={this.state.email}
                        // onChange={e => this.setState({email: e.target.value})}
                        required
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Type"
                        id="email"
                        // value={this.state.email}
                        // onChange={e => this.setState({email: e.target.value})}
                        required
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Link"
                        id="password"
                        // value={this.state.password}
                        // onChange={e => this.setState({password: e.target.value})}
                        required
                      />
                    </p>
                  </div>
                  <div className="control has-text-centered">
                    <button className="button is-primary is-outlined">Add Source</button>
                  </div>
                  {this.props.showLoginError ? (
                    <p id="error" className="help is-danger">
                      Please fill out all information correctly.
                    </p>
                  ) : null}
                </form>

            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

export default SourceControl;
