import List from './List';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('<List/>', () => {
  it('Lists cards properly', () => {
    const div = document.createElement('div');

    ReactDOM.render(<List
      header='adyceum'
      cards= {
        [{ id: 'a', title: 'First card', content: 'lorem ipsum' }]
              } />, div
    )
    ReactDOM.unmountComponentAtNode(div);
  })

}) 