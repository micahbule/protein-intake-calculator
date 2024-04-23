"use client";

import { useContext, useMemo, useCallback } from "react";
import { FormContext, getActionType } from "./common";

export default function VariantSelect({ variants }: { variants: any[] }) {
  const { state, dispatch } = useContext(FormContext);
  const inputKey = "proteinVariant";
  const actionType = useMemo(() => getActionType(inputKey), [inputKey]);
  const value = useMemo(() => state[inputKey], [state, inputKey]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({
        type: actionType,
        value: e.target.value,
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
      {variants.map((brand: any) => (
        <option key={brand._id} value={brand.value}>
          {brand.label}
        </option>
      ))}
    </select>
  );
}
