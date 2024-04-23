"use client";

import { useContext, useMemo, useCallback, useEffect } from "react";
import { FormContext, getActionType } from "./common";

export default function VariantSelect({ variants }: { variants: any[] }) {
  const { state, dispatch } = useContext(FormContext);
  const inputKey = "proteinVariant";
  const actionType = useMemo(() => getActionType(inputKey), [inputKey]);
  const value = useMemo(() => state[inputKey], [state, inputKey]);

  useEffect(() => {
    dispatch({
      type: actionType,
      value: variants[0].value,
    });
  }, [state.proteinBrand, variants, dispatch, actionType]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({
        type: actionType,
        value: Number(e.target.value),
      });
    },
    [dispatch, actionType]
  );

  return (
    <select
      className="select select-bordered w-full"
      value={value}
      onChange={handleChange}
    >
      {variants.map((variant: any) => (
        <option key={variant._id} value={variant.value}>
          {variant.label}
        </option>
      ))}
    </select>
  );
}
