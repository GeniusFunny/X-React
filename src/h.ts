import { VNode, Attributes} from './vnode'

const stack: Array<VNode> | Array<string> = []
const EMPTY_CHILDREN: Array<VNode> = []

// 创建一个虚拟DOM节点 h()/createElement()
export function h(nodeName: string, attributes?: Attributes) {
  let children:Array<VNode> = EMPTY_CHILDREN, lastSimple:any, child: any, simple: any, i: number
  for(i = arguments.length; i-- > 2;) {
    Array.prototype.push.bind(stack, arguments[i])
  }
  if (attributes && attributes.children) {
    if (!stack.length) {
      Array.prototype.push.bind(stack, attributes.children)
      delete attributes.children
    }
  }
  while(stack.length) {
    if((child = stack.pop()) && child.pop !== undefined) {
      for(i = child.length; i--;) {
        Array.prototype.push.bind(stack, child[i]);
      }
    } else {
      if(typeof child === 'boolean') {
        child = null;
      }
      if ((simple = typeof nodeName !== 'function')) {
        if (child == null) {
          child = ''
        } else if (typeof child === 'number') {
          child = String(child)
        } else if (typeof child !== 'string') {
          simple = false
        }
      }
      if (simple && lastSimple) {
        children[children.length-1] += child
      } else if(children === EMPTY_CHILDREN) {
        children = [child]
      } else {
        children.push(child)
      }
      lastSimple = simple
    }
  }

  let p:VNode = new VNode()
  p.nodeName = nodeName
  p.children = children
  p.attributes = attributes
  p.key = attributes == null ? undefined : attributes.key

  // if(options.vnod !== undefined) {
  //   options.vnode(p)
  // }
  return p
}

