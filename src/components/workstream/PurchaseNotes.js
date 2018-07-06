// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNotes } from '../../actions/workstream';

// ==========

class PurchaseQuality extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      notes: this.props.purchase.notes ? this.props.purchase.notes : ''
    };
  };

  addNotes = notes => {
    this.props.addNotes(this.props.purchase.id, notes);
  };

  render () {
    return (
      <div>
        <div className="field">
          <textarea
            className="textarea"
            placeholder="Write your comments here..."
            id="notes"
            value={this.state.notes}
            onChange={event => {
              this.setState({notes: event.target.value});
            }}
          />
        </div>
        <div className="has-text-centered" style={{paddingBottom:'1rem'}}>
          <button
            className="button is-small is-primary"
            disabled={this.state.notes === ''}
            onClick={() => this.addNotes(this.state.notes)}
          >Save</button>
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addNotes
}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseQuality);
