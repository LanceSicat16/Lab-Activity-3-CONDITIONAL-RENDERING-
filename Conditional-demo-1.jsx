function Greeting(){
    return(
        <h1>Hello! Iam a standard function.</h1>
    );
}

const ArrowGreeting = () => (
    <h1>Hello! Iam an arrow function.</h1>
        

);

function ShinyButton(){
    const handleClick = () =>{
        alert("You clicked me!");

    }
    return(
        <button onClick={handleClick}>
            Click This Button!
        </button>
    );
}

export default ShinyButton;