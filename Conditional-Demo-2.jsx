function Rainy(){
    return(
      <h1>Bring your Umbrella!</h1>
    );
  }
  
  function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
      return(
        <Rainy />
      );
    }
    return(
      <h1>No rain Today!</h1>
    );
}    
    
  
  
  export default function App(){
    return(
      <div>
        <RainOrShine isRainy = {true}
        />
      </div>  
    );
  }
  