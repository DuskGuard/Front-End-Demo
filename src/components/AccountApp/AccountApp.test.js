import React from 'react';
import ReactDOM from 'react-dom';
import AccountApp from './AccountApp';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
