import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import FilterPopup from "./components/FilterPopup";
import NavBar from "./components/NavBar";
import FilterButton from "./components/FilterButton";
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
      <div className="container-fluid">
        <div className="container-lg row mx-auto mt-4">
          <div className="col-7">
            <form className="container-fluid row">
              <div className="col-8">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="col-2">
                <button class="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="col-5">
            <div className="container-fluid row">
              <div className="col-6">
                <FilterButton setDisplayPopup={setDisplayPopup} />
              </div>
              <div className="col-6">
                <button type="button" class="btn btn-outline-secondary btn-lg">
                  Saved Items
                </button>
              </div>
            </div>
          </div>
          <div className="container-fluid row mt-5">
            {hospitalsData.map((data) => {
              return <Cards hospitalData={data} />;
            })}
          </div>
        </div>
      </div>

      {displayPopup && <FilterPopup setDisplayPopup={setDisplayPopup} />}

      <Footer />
    </>
  );
}

export default App;
