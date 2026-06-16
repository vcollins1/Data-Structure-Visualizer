import type {ListNodeType} from "../utils/types.ts"

export const initList: ListNodeType[] = [
  { id: crypto.randomUUID(), data: 12 },
  { id: crypto.randomUUID(), data: 24 },
  { id: crypto.randomUUID(), data: 31 },
]
