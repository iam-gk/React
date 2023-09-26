import Video from "./components/Video";
import "./App.css";
function App() {
  return (
    <>
    <div className="App">
      <div>Videos</div>
      <Video  title="React JS tutorial" views="10k" time="1 year ago" channel="Coder Dost"></Video>
      <Video  title="Node Js tutoriail" views="100k" time="2 years ago" channel="Coder Masti"></Video>
      {/* Here, we have send title props to Video component. */}
      </div>
    </>
  );
}

export default App;
