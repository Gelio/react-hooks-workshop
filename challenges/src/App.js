import React from 'react';

import Controls from './controls/controls';
import Chart from './chart/chart';

function App() {
  return (
    <div>
      <h1>Foreign currency rates chart</h1>
      <Controls />
      <Chart />
    </div>
  );
}

export default App;
