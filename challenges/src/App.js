import React, { useState, useCallback } from 'react';

import Controls from './controls/controls';
import Chart from './chart/chart';
import CurrencyDataProvider from './chart/currency-data-provider';

function App() {
  const [state, setState] = useState();

  const onControlsUpdate = useCallback(
    newState => {
      setState({
        ...state,
        ...newState
      });
    },
    [state, setState]
  );

  return (
    <div>
      <h1>Foreign currency rates chart</h1>

      <Controls onUpdate={onControlsUpdate} />

      {state && (
        <CurrencyDataProvider {...state}>
          {({ loading, rates }) =>
            loading ? (
              <p>Loading...</p>
            ) : (
              <Chart
                rates={rates}
                foreignCurrencies={state.foreignCurrencies}
              />
            )
          }
        </CurrencyDataProvider>
      )}
    </div>
  );
}

export default App;
