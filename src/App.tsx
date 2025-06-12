import * as React from "react";
import { Chat } from "./components/Chat";

const App: React.FunctionComponent = ()=>{
  return(
    <div className="max-w-lg mt-20 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <Chat></Chat>
      </div>
    </div>
  )
}

export default App;