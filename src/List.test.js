import List from './List';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('<List/>', () => {
  it('Lists cards properly', () => {
    const div = document.createElement('div');

    ReactDOM.render(<List
      header='adyceum'
      cards={
        [{ id: 'a', title: 'First card', content: 'lorem ipsum' }]
      } />, div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
}) 