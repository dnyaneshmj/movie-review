import MovieList from "./components/MovieList";
// import downarrow from "./../public/img/down-arrow.svg"
function App() {
  return (
    <>
      <div className="h-screen w-full relative bg-black overflow-y-auto">
        <div className="w-9/12 mx-auto text-center my-20">
          <h1 className="text-white">Movie Reviews</h1>

          <div class="grid grid-cols-2 gap-4">
            <div> 
              {/* Release date and Rating */}
              {/* <label> Filter Movie By </label> */}
              <div class="grid">
              <select className="appearance-none row-start-1 col-start-1 w-full px-3 py-1.5 border-2 border-white rounded-full">
                <option selected> Filter Movies By </option>
                <option value={"data"}> Release Date </option>
                <option value={"rate"}> Rating </option>
              </select>
              <img src="/images/down-arrow.png" alt="" className="pointer-events-none row-start-1 col-start-1" width={15} height={15} />
              </div>
           
              
            </div>

            {/* Alphabetical order and Reverse alphabetical order */}
            <div>
              {/* <label>Sort Result By</label> */}
              <select className="w-full">
                <option selected> Sort Result By </option>
                <option value="atoz"> {"A -> Z (Alphabetical Order)"}</option>
                <option value="ztoa">
                  {" "}
                  {"Z -> A (Reverse Alphabetical Order)"}{" "}
                </option>
              </select>
            </div>
          </div>
          <div className="pt-8">
            <MovieList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
