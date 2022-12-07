import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import FilterPopup from "./components/FilterPopup";
import NavBar from "./components/NavBar";
import FilterButton from "./components/FilterButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSave } from '@fortawesome/free-solid-svg-icons';

import Footer from "./components/Footer";

import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDb } from "./db/firebase";

function App() {
  const [hospitalsData, setHospitalData] = useState([]);
  async function getData() {
    const hispitalCollection = collection(FirebaseDb, "hospitals");
    try {
      const querySnapshot = await getDocs(hispitalCollection);
      setHospitalData(
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      console.log(
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);
  const [displayPopup, setDisplayPopup] = useState(false);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row mx-auto mt-4">
          <div className="col-md-8">
            <form>
          
                <input
                  class="form-control rounded-lg form-control-lg"
                  type="text"
                  placeholder="search...."
                />
               
                {/* <button class="btn btn-success mt-1 mb-3" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button> */}
                </form>
                </div>
              <div className="col-md-2 col-6">
                <FilterButton setDisplayPopup={setDisplayPopup} />
              </div>
              <div className="col-md-2 col-6">
                <button type="button" className="btn shadow form-control btn-block btn-outline-secondary btn-lg">
                  <FontAwesomeIcon icon={faSave} />&nbsp;Saved Items
                </button>
              </div>
          <div className="container-fluid row mt-5">
            {hospitalsData.map((data) => {
              return <Cards hospitalData={data} />;
            })}
          </div>
      </div>
      {displayPopup && <FilterPopup setDisplayPopup={setDisplayPopup} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
