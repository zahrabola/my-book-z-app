import react from "react";
import { FaSearch} from "react-icons/fa";
import Card from "./Card";
const Main = ()=>{
    return (
      <>
        <div className="Header">
          <div className="row-1">
            <h1>
              “Good friends, good books, and a sleepy conscience: <br />
              this is the ideal life.”
            </h1>
          </div>
          <div className="row-2">
            <h2>Find a Book</h2>
            <div className="search">
              <input type="text" placeholder="Enter Book Name" />
              <button>
                <FaSearch />
              </button>
            </div>
          </div>
            <div className="container">
<h3><Card /></h3>

            </div>
        </div>
      </>
    );
}




export default Main;