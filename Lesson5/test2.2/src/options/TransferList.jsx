import React from "react";
import { connect } from "react-redux";
import Options from "./Options";
import { toggle_option } from "./options.actions";

const TransferList = ({ options, moveOption, selected, state }) => {
  const availableOptions = options.filter(
    (elem) => !selected.includes(elem.id)
  );
  const selectedOption = options.filter((elem) => selected.includes(elem.id));

  return (
    <div className="transfer-list">
      <Options
        title={"AvailableOption"}
        options={availableOptions}
        moveOption={moveOption}
      />
      <Options
        title={"SelectedOption"}
        options={selectedOption}
        moveOption={moveOption}
      />
    </div>
  );
};

const mapState = (state) => {
  return {
    options: state.optionsList,
    selected: state.selected,
    state: state,
  };
};

const mapDispatch = {
  moveOption: toggle_option,
};

const connector = connect(mapState, mapDispatch);

const ConnectedTransferList = connector(TransferList);

export default ConnectedTransferList;
