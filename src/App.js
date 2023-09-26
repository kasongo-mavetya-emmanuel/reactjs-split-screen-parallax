import './App.css';

function App() {
  return (
    //parent div
    <div 
    style={{
      display:"flex",
    }}>
       {/* left side div */}
       <div 
       style={{
        flex:"1",
        height:"100vh",
        color:"white",
        display:"flex",
        position:"sticky",
        top:"0px",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"gray",
       }}>
          left Side
       </div>

     {/* right side div */}
       <div 
       style={{
        flex:"1"
       }}>
         
        <div
        style={{
          height:"100vh",
          backgroundColor:"blue",
          color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        }}
        > child 1</div>


        <div
        style={{
          height:"100vh",
          backgroundColor:"red",
          color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        }}
        > child 2</div>

       <div
        style={{
          height:"100vh",
          backgroundColor:"green",
          color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        }}
        > child 3</div>





       </div>

    </div>
    
  );
}

export default App;
