import React from "react";
import "./style.css";


export default function Header() {
  const logo = (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1r9mui1r84nrWe1ai0PEWHPsJQAjxhVKwSkCKIo4R38DPkOQuqFLTOhXszAXX5ssBvr0psgnO3QKQw&usqp=CAU" height="60px" alt ="logo"/>)
  return (
    <div className="header">
     {logo}
     <h1>  Finders Keepers</h1>
    </div>
  );
}
