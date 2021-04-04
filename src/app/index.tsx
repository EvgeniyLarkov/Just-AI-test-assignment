import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import DndApp from './containers/App';

const App = hot(module)(() => (
  <DndApp />
));

export default App;
