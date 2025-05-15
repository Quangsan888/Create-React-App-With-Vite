function Button() {
    let count = 0;
    const handlingClick = (name)=>{
        if(count < 3){
            count++;
            console.log(` you: ${name} click me ${count} time`);
        }else{
            console.log("stop click me");
        }
    };

   
    // const handlingClick2= (name)=>{console.log(`${name} stop clicl me` );}
  return <button onClick={()=>handlingClick("bro")}>Click me  </button>;
}

export default Button;
