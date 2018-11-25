export interface Attributes {
  children?: string | VNode,
  key?: string | number
}

export class VNode{
  nodeName: string
  children?: any
  attributes?: Attributes
  key?: string | number
}