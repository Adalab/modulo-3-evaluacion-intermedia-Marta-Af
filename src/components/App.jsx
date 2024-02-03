import "../scss/App.scss";
import { useState } from "react";
import dataPerson from "../data/person.json";

import Filters from "./Filters";
import QuotesList from "./QuotesList";
import Header from "./Header";

function App() {
  const [person] = useState(dataPerson);
  const [filterName, setFilteredName] = useState("");

  const handleFilterName = (filterValue) => {
    setFilteredName(filterValue);
  };

  const filteredPerson = person.filter((person) =>
    person.quote.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <div className="app">
      <Header />

      <main>
        <div className="filter">
          <Filters handleFilterName={handleFilterName} />
        </div>
        <div className="container">
          <QuotesList person={person} filteredPerson={filteredPerson} />
        </div>
      </main>
    </div>
  );
}

export default App;
