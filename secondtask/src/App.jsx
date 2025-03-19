
import './App.css'
import ToggleButton from './Component/ToggleButton/ToggleButton'
import Counter from './Component/Counter/Counter'
import ColorChanger from './Component/ColorChanger/ColorChanger'
import UseEffectDemo from './Component/UseEffectDemo/UseEffectDemo'
import InputDemo from './Component/InputDemo/InputDemo'
import DummyApi from './Component/DummyApi/DummyApi'

function App() {


  return (
    <>
      <ToggleButton />
      <hr />
      <Counter />
      <hr />
      <ColorChanger />
      <hr />
      <UseEffectDemo />
      <hr />
      <InputDemo />
      <hr />
      <DummyApi/>
    </>
  )
}

export default App
