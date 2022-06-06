import react, {useState} from "react";
import { FaSearch} from "react-icons/fa";
import Card from "./Card";
import axios from "axios";

const Main = ()=>{
const [search, setSearch] =useState("");
  const [bookData, setData] = useState([]);



const searchBook=(evt)=>{
  if(evt.key==="Enter")
  {
axios.get(
  'https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCs9qJLlvAU6ezHtSHQerUn3Z-kRjzlEVU'
).then(res=>console.log(res.data.items))
.catch(err=>console.log(err))
  }
}

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
              <input
                type="text"
                placeholder="Enter Book Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
              />
              <button>
                <FaSearch size={30} />
              </button>
            </div>
          </div>
          <div className="container">
            <h3>{<Card book={bookData} />}</h3>
          </div>
        </div>
      </>
    );
}




export default Main;