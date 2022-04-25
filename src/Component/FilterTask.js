import React from "react";
import { useDispatch } from "react-redux";
import { filtertask } from "../JS/Actions/actions";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className="add">
      <button
        onClick={() => dispatch(filtertask("All"))}
        inverted
        color="violet"
      >
        All
      </button>
      <button onClick={() => dispatch(filtertask("Done"))} inverted>
        Done
      </button>
      <button onClick={() => dispatch(filtertask("unDone"))} inverted>
        Not Done
      </button>
    </div>
  );
};

export default Filter;
