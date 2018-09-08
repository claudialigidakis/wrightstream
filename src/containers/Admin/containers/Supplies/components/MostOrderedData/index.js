// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMostOrderedSupplies } from '../../../../../../state/actions/admin';

// CHART
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
ReactChartkick.addAdapter(Chart);

// ==========

class MostOrderedData extends React.Component {
  transformMostOrderedData = () => {
    const a = Object.keys(this.props.MostOrderedSupplies);
    return a.reduce((acc,ele) => {
      acc[this.props.MostOrderedSupplies[ele].name] = `${this.props.MostOrderedSupplies[ele].neededSupplies}`;
      return acc;
    },{});
  };

  componentDidMount () {
    this.props.getMostOrderedSupplies();
  };

  render () {
    return (
      <div className="card">
        <header className="card-header">
          Most Ordered Supplies
        </header>
        <div className="card-content">
            <LineChart xtitle="Products" ytitle="Frequency" data={this.transformMostOrderedData()} />
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  MostOrderedSupplies: state.admin.MostOrderedSupplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMostOrderedSupplies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MostOrderedData);
