"use client";

import { useContext, useMemo, useCallback } from "react";
import { FormContext, getActionType } from "./common";

export default function BrandSelect({ brands }: { brands: any[] }) {
  const { state, dispatch } = useContext(FormContext);
  const inputKey = "proteinBrand";
  const actionType = useMemo(() => getActionType(inputKey), [inputKey]);
  const value = useMemo(() => state[inputKey], [state, inputKey]);

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
      {brands.map((brand: any) => (
        <option key={brand._id} value={brand.value}>
          {brand.label}
        </option>
      ))}
    </select>
  );
}
