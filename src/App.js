import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
 state = {
     store: STORE
 }
 //callback prop
  handleRandomCard = (click) =>{

    const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  
    const newCard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
    this.setState({
      store: {
        lists:[{...this.state.store.lists.cardIds, newCard
        }],
        allCards:{
         ...this.state.store.allCards, 
          id: newCard
        }
      }
    })
  }


//callback prop
//  handleDeleteButton = (click) => {
//   function omit(obj, keyToOmit) {
//     let {[keyToOmit]: _, ...rest} = obj;
//     return rest;
//   }
  
//   // Example
//   const objectWithKVPs = {
//     key: 'value',
//     foo: 'foo value',
//     bar: 'bar value',
//     abc: { nested: 'object' }
//   }
  
//   // To remove the foo key value pair
//   const newObjectWithKVPs = omit(objectWithKVPs, 'foo');
// //  }


  render() {
    const { store } = this.state
    console.log(store)
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
