import * as React from "react";
import "./styles.css";
import { createStore, combineReducers } from 'redux';





const initialState = { count: 0 }

function reducer1(state: any = initialState, action: any) {
  // console.log(state, action);
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      }
      default:
        return state;
  }
}
function reducer2(state: any = initialState, action: any) {
  switch(action.type) {
    case 'SUB':
      return {
        ...state,
        count: state.count - 1
      }
      default:
        return state;
  }
}

let store = createStore(combineReducers({ 
  count: reducer1, 
  count2: reducer2,
}));

const handleCreateRoute: React.MouseEventHandler<HTMLButtonElement> | undefined = (event: any) => {
  store.dispatch({ type: 'ADD' });
  console.log(store.getState())
  }

  export default function App() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {/* {store.getState().count.count} */}
        <button onClick={handleCreateRoute}>
          hello
          </button>
      </div>
    );
  }

store.subscribe(console.log);

store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'SUB' })
store.dispatch({ type: 'ADD' })

console.log(store.getState())