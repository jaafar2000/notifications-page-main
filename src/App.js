import "./App.css";
import data from "./data/data";
import {
  Angela,
  Jacob,
  Anna,
  Kimberly,
  Mark,
  Nathan,
  Rizky,
  chess,
} from "./assets/index";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const imges = [Angela, Jacob, Anna, Kimberly, Mark, Nathan, Rizky, chess];
  useEffect(() => {
    const getNotification = (data) => {
      setNumber(0)
      data.map((data) => {
        if (data.isActive === true) {
          setNumber(number => number + 1);
        }
      });
    };
    getNotification(data);
  }, []);
  const handleClick = (e, id) => {
   if(e.currentTarget.classList.contains("active")){
    e.currentTarget.classList.remove("active")
    setNumber((number) => number - 1);
    data.map((data)=>{
      if(data.id==id ){
        data.isActive = false;
      }
      console.log(data)
    })
   } 
  };

  const MarkAllAsRead=()=>{
    data.map((data)=>{
      data.isActive = false
    })
  const cards = document.querySelectorAll(".card")
  cards.forEach((card)=>{
    console.log(card)
    card.classList.remove("active")
    setNumber(0)
  })

  }
  return (
    <div className="App">
      <div className="header" >
        <h2>
          Notificataion<span>{number}</span>
        </h2>
        <p onClick={MarkAllAsRead} >Mark all as read</p>
      </div>
      {data.map((data, index) => (
        <div
          key={data.userName}
          className={`${data.isActive ? "active" : "notActive"} card`}
          onClick={(e) => handleClick(e, data.id)}
        >
          <img src={imges[index]} />
          <div className="info">
            <div className="up">
            <p>
            <span>{data.userName}</span>
              <span>{data.action}</span>
              <span>{data.F_action}</span>
              {
                data.isActive && <div className="dot" ></div>
              }
            </p>
            </div>
            <p>{data.craditAt}</p>
            {
              data.msg && <p className="msg" >{data.msg}</p>
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
