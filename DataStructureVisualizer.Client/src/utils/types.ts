type ListNodeType = {
  id: string,
  data: number
}

type Operation = "idle" | "adding" | "deleting";

type AnimationState =
  | { operation: "idle"; activeNodeId: null }
  | { operation: "adding"; activeNodeId: string }
  | { operation: "deleting"; activeNodeId: string };

type CanvasProps = {
  nodes: ListNodeType[],
  state: AnimationState
}

type ListNodeProps = {
  id: string;
  data: number;
  operation: Operation;
  activeNodeId: string | null;
};

export type {ListNodeType, Operation, CanvasProps, ListNodeProps, AnimationState}