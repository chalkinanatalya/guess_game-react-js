import React from 'react';
// import {LifeCycle} from './components/LifeCycle/LifeCycle';
import ComponentClass from './components/ClassComponent';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <ComponentClass min={1} max={10}/>
        {/* <LifeCycle prop="Hello"/> */}
      </div>
    );
  }
}
