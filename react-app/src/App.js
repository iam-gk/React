import Video from "./components/Video";
import "./App.css";
import videos from './data/data';
function App() {
  
  return (
    <>
      <div className="App">
        <div>Videos</div>
        {videos.map((video) => (
          <Video
            verified={true}
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
          ></Video>
        ))}
        {/* <Video {...videos}></Video> */}
        {/* here, for calling object(name obj) we used {...obj} spread operator. */}
        {/* <Video  verified={false}title="React JS tutorial" views="10k" time="1 year ago" channel="Coder Dost"></Video>
      <Video  verified={false}title="Node Js tutoriail" views="100k" time="2 years ago" ></Video> */}
        {/* <Video  verified={true}title="Mongo Js tutoriail" views="1000k" time="3 years ago" channel="Coder Masti"></Video>  */}
        {/*  Here, we have send title props to Video component. */}
      </div>
    </>
  );
}

export default App;
