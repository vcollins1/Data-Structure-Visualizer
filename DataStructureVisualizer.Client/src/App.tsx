import ListCanvas from "./components/ListCanvas.tsx";
import CanvasControls from "./components/CanvasControls.tsx";
import "./assets/app.css"
import {useState} from "react";
import type {ListNodeType, Operation} from "./utils/types.ts";
import {initList} from "./data/initList.ts";

function App() {
  const [nodes, setNodes] = useState<ListNodeType[]>(initList);

  const [operation, setOperation] = useState<Operation>("idle");
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  function addToLast(data: number) {
    const newNode = {
      id: crypto.randomUUID(),
      data,
    };

    setNodes((current) => [...current, newNode]);
    setActiveNodeId(newNode.id);
    setOperation("adding");

    window.setTimeout(() => {
      setOperation("idle");
      setActiveNodeId(null);
    }, 360);
  }

  function deleteLast() {
    if (nodes.length === 0 || operation !== "idle") return;

    const lastNode = nodes[nodes.length - 1];

    setActiveNodeId(lastNode.id);
    setOperation("deleting");

    window.setTimeout(() => {
      setNodes((current) => current.slice(0, -1));
      setOperation("idle");
      setActiveNodeId(null);
    }, 320);
  }
  return (
      <main className="main">
        <h1 className="title">Linked List Visualizer</h1>
        <div className="canvas-group">
          <CanvasControls add={addToLast} deleteLast={deleteLast} disabled={operation != "idle"}/>
          <ListCanvas
            nodes={nodes}
            state={{
              operation: operation,
              activeNodeId: activeNodeId
            }}
          />
        </div>
      </main>
  )
}

export default App