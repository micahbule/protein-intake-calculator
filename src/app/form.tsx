"use client";

import { useReducer } from "react";
import { ActionTypes, FormContext, ReducerInitialState } from "./common";
import GramInput from "./gram-input";

type ReducerAction = {
  type: ActionTypes;
  value: any;
};

const initialState: ReducerInitialState = {
  dailyProteinNeed: 0,
  currentProteinIntake: 0,
  proteinBrand: 0,
  proteinVariant: 0,
  scoopsNeeded: 0,
};

function reducer(state: ReducerInitialState, action: ReducerAction) {
  switch (action.type) {
    case ActionTypes.UPDATE_DAILY_PROTEIN_NEED: {
      return {
        ...state,
        dailyProteinNeed: action.value,
      };
    }
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container md:px-12 lg:px-12 xl:px-12 2xl:px-96">
      <FormContext.Provider value={{ state, dispatch }}>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="pt-4">
            <span>Daily Protein Need</span>
          </div>
          <div>
            <GramInput inputKey="dailyProteinNeed" />
          </div>
          <div className="pt-4">
            <span>Current Protein Intake</span>
          </div>
          <div>
            <GramInput inputKey="currentProteinIntake" />
          </div>
          <div className="pt-4">
            <span>Protein Brand</span>
          </div>
          <div>
            <select className="select select-bordered w-full">
              <option>Optimum Nutrition</option>
            </select>
          </div>
          <div className="pt-4">
            <span>Protein Variant</span>
          </div>
          <div>
            <select className="select select-bordered w-full">
              <option>Gold Standard Isolate</option>
            </select>
          </div>
          <div className="col-span-2 pt-4 place-self-center">
            <span>Scoops Needed</span>
          </div>
        </div>
      </FormContext.Provider>
    </div>
  );
}
