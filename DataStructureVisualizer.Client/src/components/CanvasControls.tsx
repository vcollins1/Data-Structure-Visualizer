import "../assets/canvas-controls.css"
import {useRef} from "react";
import {addHelper} from "../utils/helpers.ts";

function CanvasControls({add, deleteLast, disabled}: {add: (x: number) => void, deleteLast: () => void, disabled: boolean}) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <div className="controls">
      <h2>Controls</h2>

      <section className="controls__form">
        <label className="controls__data-label">
          <span>Data</span>
          <input className="controls__data" type="text" name="data" ref={inputRef}/>
        </label>
        <button className="controls__addBtn" onClick={() => addHelper(inputRef, add)} disabled={disabled}>Add To List</button>
        <button className="controls__deleteBtn" onClick={deleteLast} disabled={disabled}>Delete Last</button>
      </section>
    </div>
  )
}

export default CanvasControls