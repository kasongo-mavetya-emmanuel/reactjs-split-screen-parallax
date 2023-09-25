// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{
      display:"flex",

    }}>
      <div style={{
        height: "100vh",
        position:"sticky",
        top:"0px",
        backgroundColor: "gray",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
        color:"white",
        flex:"1",
        alignItems:"center"

      }}>
        leftSide
      </div>

      <div style={{
        flex:"1"
      }}>
        <div
       style={{
          height: "100vh",
          backgroundColor:"red",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignContent:"center",
          color:"white",
          alignItems:"center"


        }}
        >image1</div>
        <div
       style={{
          height: "100vh",
          backgroundColor:"blue",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignContent:"center",
          color:"white",
          alignItems:"center"


        }}
        >image2</div>
        <div
       style={{
          height: "100vh",
          backgroundColor:"green",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignContent:"center",
          color:"white",
          alignItems:"center"


        }}
        >image3</div>


      </div>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
