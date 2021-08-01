import { useEffect } from "react";

function Home() {

    useEffect( () => {
        window.scroll(0,0)
    }, [])
    
    return (
      <div className="home">
        <h1>Home Page</h1>
      </div>
    );
  }
  
  export default Home;