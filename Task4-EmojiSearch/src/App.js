import logo from './logo.svg';
import './App.css';
import Search from "./Search"
import React,{useState} from "react"
// import Show from "./Show"
function App() {
  const [prakash, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [i,setTask] = useState("")
  const image =
 {
    100: "💯",
    
    smile:"😄   😅",

     1234 : "🔢" ,

     grimacing:"😬",
     grin:"😁",
     goy:"😂",
     smiley:"😃",
     laughing:"😆",
     goblin :"👺",
     skull:"💀",
     ghost:"👻",
     alien:"👽",
     robot: "🤖",
     smileycat:"😺 😸",
     raisedhands :"🙌",
     clap:"👏",
     wave:"👋",
     jeans:"👖",


    
  }

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    let s1 = prakash.replace(" ","")
    s1 = s1.toLowerCase()
    console.log(s1)
    if(s1 in image){
    setTask(image[s1])
    
    }
    else{
      setTask("Not Found")
    }
    
  };

  return (
   
    <div className="App">
    <Search
      search={prakash}
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}
    />
    <h1>{i}</h1>
    
    </div>
  );
}

export default App;
