import "./Video.css";
function Video() {
  console.log("v", Video);
  let topic = "React Js";
  let bg = "dark";
  return (
    <>
      <div>
        <img
          src="https://loremflickr.com/140/160
"
          alt="Background img"
        />
      </div>
      <div className={bg} style={{ backgroundColor: "" }}>
        {topic} Tutorials Components
      </div>
    </>
  );
}

export default Video;
