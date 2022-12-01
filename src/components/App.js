import React, { useState } from "react";
import "../styles/App.css";

const App = () => {

  const [getFlag,setFlag] = useState(false);

  const onclickHandler=()=>{
    setFlag(!getFlag);
  }

  return (
    <div id="main">
     {getFlag && <div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div> } 
      {!getFlag &&
           <div id="about-div">
           <h1>
             Newton School is a neo-university providing highly immersive tech
             learning to millions of students, to tap into new-age tech
             opportunities.
           </h1>
         </div> 
      }
 
      <button onClick={onclickHandler} id="toggle">Toggle</button>
    </div>
  );
};

export default App;
