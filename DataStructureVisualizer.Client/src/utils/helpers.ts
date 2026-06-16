import type {RefObject} from "react";

function addHelper(dataRef: RefObject<HTMLInputElement | null>, add: (n: number) => void) {
  const value = dataRef.current?.value.trim() ?? "";
  const num = Number(value);

  if (value !== "" && Number.isFinite(num))
    add(num)
}

export {addHelper}
