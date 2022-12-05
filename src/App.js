import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import FilterPopup from "./components/FilterPopup";
import NavBar from "./components/NavBar";
import FilterButton from "./components/FilterButton";


function App() {
  const hospitalsData = ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
  const [displayPopup, setDisplayPopup] = useState(false);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row mx-auto mt-4">
          <div className="col-md-8">
            <form className="form-inline">
                <input
                  class="form-control rounded-lg form-control-lg"
                  type="text"
                  placeholder="Search"
                />
                
               
                <button class="btn btn-primary" type="submit">
                  Search
                </button>
                </form>
                </div>
              <div className="col-md-2 col-6 text-center">
                <FilterButton setDisplayPopup={setDisplayPopup} />
              </div>
              <div className="col-md-2 col-6 text-center">
                <button type="button" className="btn shadow btn-outline-secondary btn-lg">
                  Saved Items
                </button>
              </div>
          <div className="container-fluid row mt-5">
            {hospitalsData.map(data => {return (<Cards />)})}
          </div>
      </div>
      {displayPopup && <FilterPopup setDisplayPopup={setDisplayPopup} />}
      </div>
      
    </>
  );
}

export default App;
