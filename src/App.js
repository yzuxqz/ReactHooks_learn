import ClassClick from './ClickMe/ClassClick'
import HooksCLick from './ClickMe/HooksClick'
import State from './State'
import Effect from "./Effect";
import Context from './Context'
import {Color} from "./Redux/Color";
import ShowArea from "./Redux/ShowArea";
import ChangeColor from "./Redux/ChangeColor";
import {Provider} from 'react-redux'
import store from './Redux/redux/store'
import Ref from "./Ref";
import WinSize from "./Myhooks/UseWinSize";
function App() {
  return (
    <div className="App">
      <ClassClick/>
      <HooksCLick/>
      <State/>
      <Effect/>
      <Context/>
      <Provider store={store}>

      <Color>
        <ShowArea/>
        <ChangeColor/>
      </Color>
      </Provider>

      <Ref/>
      <WinSize/>
    </div>
  );
}

export default App;
