import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider} from 'native-base';

// project imports
import AppNavigator from './src/navigation';
import store, {persistor} from './src/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
          <AppNavigator />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
