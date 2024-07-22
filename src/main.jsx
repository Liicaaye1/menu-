import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

// const root = document.getElementById("root")

ReactDOM.createRoot(document.getElementById("root")
).render(
  <div>
    {/* <div className="bg-yellow-400 p-10 text-center text-3xl font-semibold">This is react js course

    </div>
    <div className="bg-lime-400 p-5 absolute bottom-0 w-full text-center text-3xl font-semibold">
      All right
    </div> */}
    <Header />
    <Body />
    <Footer />
  
    
 
  </div>

  
)




