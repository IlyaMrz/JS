import React from 'react';
import { connect } from 'react-redux';

import Card from '../card/card.component';

const SagasExample = ({ increment1, decrement1, value }) => (
  <Card>
    {value}
    <button onClick={increment1}>Add 1</button>
    <button onClick={decrement1}>Minus 1</button>
  </Card>
);

const mapStateToProps = state => ({
  value: state.app.value
});

const mapDispatchToProps = dispatch => ({
  increment1: () => dispatch({ type: 'INCREMENT' }),
  decrement1: () => dispatch({ type: 'DECREMENT' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SagasExample);
