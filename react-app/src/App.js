import Video from "./components/Video";
import "./App.css";
function App() {
  let videos = [
    {
      id: 1,
      title: "Django JS tutorial",
      views: "10k",
      time: "1 year ago",
      channel: "Coder Dost",
      verified: true,
    },
    {
      id: 2,
      title: "Python JS tutorial",
      views: "20k",
      time: "2 year ago",
      channel: "Coder Dost",
      verified: false,
    },
    {
      id: 3,
      title: "Typescript JS tutorial",
      views: "30k",
      time: "3 year ago",
      channel: "Coder Dost",
      verified: true,
    },
    {
      id: 4,
      title: "React JS tutorial",
      views: "40k",
      time: "4 year ago",
      channel: "Coder Dost",
      verified: false,
    },
  ];
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
