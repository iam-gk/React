import { useState} from "react";
function Counter() {
    console.log('render Counter')
    const [number,setNumber] = useState(0);
    function handleClick(e){
        e.stopPropagation();
        // setTimeout(()=>{
        //     setNumber(number+1);
        // },2000);

        // setTimeout(()=>{
        //     setNumber(number=>number+1);
        // },2000);
        
        // setNumber(number+1);
        // setNumber(number+1);
        // setNumber(number+1);
        // setNumber(number+1);
        // setNumber(number+1);

        setNumber(number=>number+1);

        console.log(number)
    }
    return (
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>

    )
}

export default Counter;