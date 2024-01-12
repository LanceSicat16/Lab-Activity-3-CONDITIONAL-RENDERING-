function Rainy4(){
    return<h1>Bring your umbrella!</h1>
}

function Sunny4() {
    return <h1>Bring your sunglasses!</h1>
}

const isRainy =true

function RainOrShine(props){
    const isRainy = props.isRainy
    return isRainy ? <Rainy4 /> : <Sunny4 />
}

