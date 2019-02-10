import React from 'react';

import Controls from './controls/controls';
import Chart from './chart/chart';

function App() {
  return (
    <div>
      <h1>Foreign currency rates chart</h1>
      <Controls />
      <Chart
        baseCurrency="USD"
        foreignCurrencies={['EUR', 'PLN']}
        fromDate={new Date(2018, 1, 10)}
        toDate={new Date()}
      />
    </div>
  );
}

export default App;
