import React,{useState,useEffect} from "react"

/*
useEffect(() => {})	Mỗi lần re-render	Theo dõi mọi thay đổi
useEffect(() => {}, [])	Chạy 1 lần khi component mount	Gọi API, setInterval, v.v.
useEffect(() => {}, [x])	Khi x thay đổi (và lần đầu)	Phản ứng khi state/props đổi
*/ 
function MyComponentUseEffect(){
//    const [count,setCount] = useState(0);
//   const [color,setColor] = useState("green");
// //   document.title = `Count: ${count} ${color}`
//    useEffect(()=> {
//     document.title = `Count: ${count} ${color}`

//        return ()=>{
//           // some cleanup code

//        }
//    },[count,color]);

//    function addCount(){
//      setCount( c => c+ 1);
//    } 
//    function subtractCount(){
//     setCount( c => c- 1);
//   }
//   function ChangeColor(){
//     setColor(c => c === "green" ? "red" : "green")
//   }

//    return(
//     <>
//      <p style={{color: color}} >Count :{count}</p>
//      <button onClick= {addCount}>Add</button>
//      <button onClick= {subtractCount}>Subtract</button>
//      <button onClick={ChangeColor}>Change color</button>
//     </>
//    )

//-------------------------------------------------------------------

const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default MyComponentUseEffect