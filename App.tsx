import 'react-native-gesture-handler';
import React, {useReducer} from 'react';
import { ApolloProvider } from '@apollo/react-hooks'

import RootNavigation from './app/navigation/root-navigation';
import {AppContext, mainReducer, intialState} from './app/context/context';
import apolloClient from './app/graphql/Client';





const AppProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, intialState);

  return (
    <ApolloProvider client={apolloClient}>
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
    </ApolloProvider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <RootNavigation />
    </AppProvider>
  );
};

export default App;
