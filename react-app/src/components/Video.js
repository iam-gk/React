import "./Video.css";

// function Video(props) 
function Video({title})
{
  console.log("v", Video);
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
        {/* {props.title}  */}
        {title}
        {/* props.title is written for calling title props. */}
      </div>
    </>
  );
}

export default Video;
