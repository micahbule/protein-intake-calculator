"use client";

import { useCallback, useContext, useMemo } from "react";
import { FormContext, ReducerInitialState, getActionType } from "./common";

type GramInputProps = {
  inputKey: keyof ReducerInitialState;
};

export default function GramInput({ inputKey }: GramInputProps) {
  const { state, dispatch } = useContext(FormContext);
  const actionType = useMemo(() => getActionType(inputKey), [inputKey]);
  const value = useMemo(() => state[inputKey], [state, inputKey]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: actionType,
        value: e.target.value,
      });
    },
    [dispatch, actionType]
  );

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="number"
        className="grow"
        value={value}
        onChange={handleChange}
      />
      grams
    </label>
  );
}
