import List from './List';
import Card from './Card';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
/*
describe('<Card/>', () => {
  it('Cards display properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card
      content='blabla'
      title='blibli'/>, div
      )
      ReactDOM.unmountComponentAtNode(div);  
  })
})*/

describe('<Card/>', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
         <Card
              content= 'Ady is a!' title = 'Developer'
              content= 'Awesome Moms:' title = 'Diana T.'
          // component structure: content: "lorem ipsum",
                                  //title: "First card"
          />, div
      );
      ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});