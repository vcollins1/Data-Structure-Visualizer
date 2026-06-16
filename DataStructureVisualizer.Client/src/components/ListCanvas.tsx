import ListNode from "./ListNode.tsx";
import "../assets/list-canvas.css"
import type {CanvasProps} from "../utils/types.ts";

function StructureCanvas({nodes, state}: CanvasProps ) {
  const nodeElements = nodes.map(node => {
    return <ListNode 
      key={node.id} 
      id={node.id}
      data={node.data}
      operation={state.operation}
      activeNodeId={state.activeNodeId}
    />
  })
  return (
    <div className="list-canvas">
      <div className="list-canvas__row">
        <div className="list-head">Head→</div>
        {nodeElements}
        <div className="null-pointer">NULL</div>
      </div>
    </div>
  )
}

export default StructureCanvas