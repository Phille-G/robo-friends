import { React, useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import * as importedRobots from "./robots";

const App = () => {
  const [robots, setRobots] = useState(importedRobots.robots);
  const [searchField, setSearchField] = useState("");
  const onSearchChange = (event) => {
    console.log(event);
    setSearchField(event.target.value);
  };

  const filterdRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} searchField={searchField} />
      <CardList robots={filterdRobots} />
    </div>
  );
};

export default App;
