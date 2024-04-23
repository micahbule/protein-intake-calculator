import { Dispatch, createContext } from "react";

export type ReducerInitialState = {
  dailyProteinNeed: number;
  currentProteinIntake: number;
  proteinBrand: number;
  proteinVariant: number;
};

export enum ActionTypes {
  UPDATE_DAILY_PROTEIN_NEED = "UPDATE_DAILY_PROTEIN_NEED",
  UPDATE_CURRENT_PROTEIN_INTAKE = "UPDATE_CURRENT_PROTEIN_INTAKE",
  UPDATE_PROTEIN_BRAND = "UPDATE_PROTEIN_BRAND",
  UPDATE_PROTEIN_VARIANT = "UPDATE_PROTEIN_VARIANT",
}

type FormContextType = {
  state: any;
  dispatch: Dispatch<any>;
};

export const FormContext = createContext<FormContextType>({
  state: {},
  dispatch: () => {},
});

export function getActionType(key: keyof ReducerInitialState) {
  switch (key) {
    case "currentProteinIntake":
      return ActionTypes.UPDATE_CURRENT_PROTEIN_INTAKE;
    case "dailyProteinNeed":
      return ActionTypes.UPDATE_DAILY_PROTEIN_NEED;
    case "proteinBrand":
      return ActionTypes.UPDATE_PROTEIN_BRAND;
    case "proteinVariant":
      return ActionTypes.UPDATE_PROTEIN_VARIANT;
  }
}
