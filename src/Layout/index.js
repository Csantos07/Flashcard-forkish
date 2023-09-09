import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom"
import Header from "./Header";
import Decks from "../components/Decks";
import { Button, Card } from "react-bootstrap";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);
  const plusIcon = <FontAwesomeIcon icon={faPlus} />

  useEffect(() => {
    async function loadDecks() {
      const response = await fetch("http://localhost:8080/decks?_embed=cards");
      const decksFromAPI = await response.json();

      setDecks(decksFromAPI);
    }
    loadDecks();
  }, []);



  return (
    <>
      <Header />
      <div className="container">
        <Button className="margin" variant="secondary">{plusIcon}Create Deck</Button>
        <Decks decks={decks} />
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
