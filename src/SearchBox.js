import React from "react";

// function hello(greeting) {
//   console.log(greeting);
// }

const hello = (greeting) => {
  console.log(greeting);
};

const props = { searchChange: "lksdflksdf", searchField: "lksjdlfksjdf" };
hello(props.searchField);

const { searchChange, searchField } = props;
hello(searchField);

const SearchBox = ({ searchChange, searchField }) => {
  hello("hey there you");
  hello("phili is a poop");
  return (
    <div className="pa2">
      <input
        className="pa3 b b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        value={searchField}
      />
    </div>
  );
};

export default SearchBox;
