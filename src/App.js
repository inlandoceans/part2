import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import peopleService from "./services/people";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setSearch] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    peopleService.getAll().then((initial) => {
      setPersons(initial);
    });
  }, []);

  const handleNewPerson = (event) => setNewName(event.target.value);
  const handleNewNumber = (event) => setNewNumber(event.target.value);
  const handleSearch = (event) => setSearch(event.target.value);

  const addNewPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((e) => e.name === newName)) {
      alert(`${newPerson.name} already exists in the phonebook!`);
      setNewName("");
      setNewNumber("");
    } else {
      peopleService
        .create(newPerson)
        .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));
      setNewName("");
      setNewNumber("");
    }
  };

  const confirmRemove = () => {
    const r
    r = confirm("Do you really want to delete this person?");
    if (r === true) {
      console.log("ok!");
    } else {
      console.log("aw");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearch={handleSearch} />
      <PersonForm
        newName={newName}
        handleNewPerson={handleNewPerson}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        addNewPerson={addNewPerson}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newSearch={newSearch}
        confirmRemove={confirmRemove}
      />
    </div>
  );
};

export default App;
