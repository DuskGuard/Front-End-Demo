import React from 'react';
import ReactDOM from 'react-dom';
import AccountApp from './AccountApp';
import AccountPOJO from './AccountPOJO'

let detailTargetAccount = new AccountPOJO(500,"Trent")

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountApp targetAccount={detailTargetAccount} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
