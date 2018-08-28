// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getMostUsedSupplies } from '../../state/actions/admin';

//Charts
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)


class MostUsedData extends React.Component {
  componentDidMount () {
    this.props.getMostUsedSupplies();
  };

  transformMostUsedData = () => {
    const a = Object.keys(this.props.MostUsedSupplies)
    return a.reduce((acc,ele) => {
      acc[this.props.MostUsedSupplies[ele].name] = this.props.MostUsedSupplies[ele].neededSupplies
      return acc
    },{})
  };

  render () {
    return (
        <div className="card">
          <header className="card-header">
            Most Used Supplies
          </header>
          <div className="card-content">
            <LineChart xtitle="Products" ytitle="Frequency" data={this.transformMostUsedData()} />
          </div>
        </div>
    );
  };
};

const mapStateToProps = state => ({
  MostUsedSupplies: state.admin.MostUsedSupplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMostUsedSupplies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MostUsedData);
