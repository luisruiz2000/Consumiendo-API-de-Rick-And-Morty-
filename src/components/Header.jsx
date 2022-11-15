import React from "react";

const Header = ({ title }) => {
   return (
      <header className="header">
         <div className="container">
            <div className="content">
               <h1 className="titleHeader">{title}</h1>
               <p className="text">Proyecto de la serie Rick and Morty</p>
            </div>
         </div>
      </header>
   )
}


export default Header;