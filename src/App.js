import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleLog } from "./actions";

function App() {

  const count = useSelector(state => state.counter)
  const log = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={()=>dispatch(increment(2))}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement(2))}>-</button>
      </div>
      <div>
        <button onClick={()=>dispatch(toggleLog())}>{log?"Signin":"Signout"}</button>
        {!log && <h1>Info</h1>}
      </div>
    </div>
  );
}

export default App;
