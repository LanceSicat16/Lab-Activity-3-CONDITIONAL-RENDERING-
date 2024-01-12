function Rainy2(){
    return(
        <h1>Bring your umbrella!</h1>
    );
}

function Sunny(){
    return(
        <h1>Bring your sunglasses!</h1>
    )
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
            <Rainy2 />
        );
    }
    return(
        <Sunny/>
    );
}

export default function App(){
    return(
        <div>
            <RainOrShine isRainy={false} />
        </div>    
    );
}