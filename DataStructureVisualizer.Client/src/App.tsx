import ListCanvas from "./components/ListCanvas.tsx";
import CanvasControls from "./components/CanvasControls.tsx";
import "./assets/app.css"
import {useState} from "react";
import type {AnimationState, ListNodeType} from "./utils/types.ts";
import {initList} from "./data/initList.ts";

function App() {
  const [nodes, setNodes] = useState<ListNodeType[]>(initList);

  const [animationState, setAnimationState] = useState<AnimationState>({
    operation: "idle",
    activeNodeId: null,
  });

  function addToLast(data: number) {
    const newNode = {
      id: crypto.randomUUID(),
      data,
    };

    setNodes((current) => [...current, newNode]);
    setAnimationState({operation: "adding", activeNodeId: newNode.id});

    window.setTimeout(() => {
      setAnimationState({operation: "idle", activeNodeId: null});
    }, 360);
  }

  function deleteLast() {
    if (nodes.length === 0 || animationState.operation !== "idle") return;

    const lastNode = nodes[nodes.length - 1];

    setAnimationState({operation: "deleting", activeNodeId: lastNode.id});

    window.setTimeout(() => {
      setNodes((current) => current.slice(0, -1));
      setAnimationState({operation: "idle", activeNodeId: null});
    }, 320);
  }
  return (
      <main className="main">
        <h1 className="title">Linked List Visualizer</h1>
        <div className="canvas-group">
          <CanvasControls add={addToLast} deleteLast={deleteLast} disabled={animationState.operation !== "idle"}/>
          <ListCanvas
            nodes={nodes}
            state={animationState}
          />
        </div>
      </main>
  )
}

export default App
