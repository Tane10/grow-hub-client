import "./App.css";
import Canvas from "./components/Canvas";

// dimensions can be window.innerWidth

const dimensions = {
  width: 500,
  height: 500,
};

function App() {
  return (
    <div className="App" id="app-root">
      <Canvas width={dimensions.width} height={dimensions.height} />
    </div>
  );
}

export default App;
