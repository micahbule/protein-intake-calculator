"use client";

import { useMemo, useReducer } from "react";
import { ActionTypes, FormContext, ReducerInitialState } from "./common";
import GramInput from "./gram-input";
import BrandSelect from "./brand-select";
import VariantSelect from "./variant-select";

type ReducerAction = {
  type: ActionTypes;
  value: any;
};

const initialState: ReducerInitialState = {
  dailyProteinNeed: 0,
  currentProteinIntake: 0,
  proteinBrand: 0,
  proteinVariant: 0,
};

function reducer(
  state: ReducerInitialState,
  action: ReducerAction
): ReducerInitialState {
  switch (action.type) {
    case ActionTypes.UPDATE_DAILY_PROTEIN_NEED: {
      return {
        ...state,
        dailyProteinNeed: action.value,
      };
    }
    case ActionTypes.UPDATE_CURRENT_PROTEIN_INTAKE: {
      return {
        ...state,
        currentProteinIntake: action.value,
      };
    }
    case ActionTypes.UPDATE_PROTEIN_BRAND: {
      return {
        ...state,
        proteinBrand: action.value,
      };
    }
    case ActionTypes.UPDATE_PROTEIN_VARIANT: {
      return {
        ...state,
        proteinVariant: action.value,
      };
    }
    default:
      return state;
  }
}

type FormProps = {
  brands: any[];
  variants: any[];
};

export default function Form({ brands, variants }: FormProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const filteredVariants = useMemo(
    () => variants.filter((variant) => variant.brand_id === state.proteinBrand),
    [variants, state.proteinBrand]
  );
  const scoopsNeeded = useMemo(() => {
    const deficit = state.dailyProteinNeed - state.currentProteinIntake;
    const variant = filteredVariants.find(
      (variant) => variant.value === state.proteinVariant
    );

    return deficit / variant.grams_per_serving;
  }, [
    state.currentProteinIntake,
    state.dailyProteinNeed,
    state.proteinVariant,
    filteredVariants,
  ]);

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
            <BrandSelect brands={brands} />
          </div>
          <div className="pt-4">
            <span>Protein Variant</span>
          </div>
          <div>
            <VariantSelect variants={filteredVariants} />
          </div>
          <div className="col-span-2 pt-4 place-self-center">
            <span>Scoops Needed:</span>&nbsp;{Number(scoopsNeeded).toFixed(2)}
          </div>
        </div>
      </FormContext.Provider>
    </div>
  );
}
