import "./App.css";
import FilterPopup from "./components/FilterPopup";
import NavBar from "./components/NavBar";

function App() {
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
                <button type="button" class="btn btn-outline-secondary btn-lg">
                  Filter
                </button>
              </div>
              <div className="col-6">
                <button type="button" class="btn btn-outline-secondary btn-lg">
                  Saved Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterPopup />
    </>
  );
}

export default App;
