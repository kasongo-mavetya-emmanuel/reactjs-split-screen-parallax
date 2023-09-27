import './App.css';
import img1 from "./assets/car.jpg";
import img2 from "./assets/town1.jpg";
import img3 from "./assets/town2.jpg";
import { useInView } from 'react-intersection-observer';

function App() {
  const { ref: div1, inView: div1InView} = useInView(
    {
      threshold: 0.2,
  
    }
  );
  const { ref: div2, inView: div2InView } = useInView({
    threshold: 0.8,

  });
  const { ref:div3, inView: div3InView } = useInView(
    {
      threshold: 0.2,
  
    }
  );

  console.log(div1InView,div2InView,div3InView);


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

        {div1InView && <img src={img1} alt='car' height={'auto'} width={'100%'}/>}

         {div2InView && <img src={img2} alt='town 1'  height={'auto'} width={'100%'}/>}

         {div3InView && <img src={img3} alt='town 2'  height={'auto'} width={'100%'}/>}


       </div>

     {/* right side div */}
       <div 
       style={{
        flex:"1"
       }}>
         
        <div
        ref={div1}

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
        ref={div2}
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
       ref={div3}
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
