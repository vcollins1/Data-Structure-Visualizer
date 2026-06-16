import "../assets/list_node.css"
import type {ListNodeProps} from "../utils/types.ts";

function ListNode({id, data, operation, activeNodeId }: ListNodeProps) {
  return (
    <div className={[
        "list-node",
        operation === "adding" && id === activeNodeId
          ? "node-adding"
          : "",
        operation === "deleting" && id === activeNodeId
          ? "node-deleting"
          : "",
      ].join(" ")}>
      <div className="list-node__data">{data}</div>
      <div className="list-node__next">next→</div>
    </div>
  )
}

export default ListNode
