import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            Hospital Aid
          </a>
        </div>
      </nav>
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

      <Cards />
    </>
  );
}

export default App;
