import React from "react";

const Options = ({ title, options, moveOption }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((elem) => (
          <li key={elem.id}>
            <button
              className="options__list-item"
              onClick={() => moveOption(elem.id)}
            >
              {elem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
