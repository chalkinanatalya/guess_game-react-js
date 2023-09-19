import React from 'react';
// import {LifeCycle} from './components/LifeCycle/LifeCycle';
// import ComponentClass from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
// import {FuncComplex} from './components/FuncComplex/FuncComplex';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* <ComponentClass min={1} max={10}/> */}
        {/* <LifeCycle prop="Hello"/> */}
        {/* <FuncComplex min={1} max={10}/> */}
        <FunctionalComponent min={1} max={10}/>
      </div>
    );
  }
}
