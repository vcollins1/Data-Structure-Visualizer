import type {RefObject} from "react";

function addHelper(dataRef: RefObject<HTMLInputElement | null>, add: (n: number) => void) {
  const input = dataRef.current;
  if (!input) return;

  const value = input.value.trim();
  const num = Number(value);

  if (value !== "" && Number.isFinite(num)) {
    add(num);
    input.value = "";
  }
}

export {addHelper}
