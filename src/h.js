/**
* 创建一个Virtual DOM 对象
* @param nodeName 标签名称
* @param attributes 属性
* @param ...args 组件的孩子
*/
export function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null
  return {
    nodeName,
    attributes,
    children
  }
}

export function render(vnode) {
  console.log(vnode)
  if (vnode.split) {
    return document.createText(vnode);
  }
  let node = document.createElement(vnode.nodeName)
  let attributes = vnode.attributes || {}
  Object.keys(attributes).forEach(k => {
    node.setAttribute(k, attributes[k])
  })
  (vnode.children || []).forEach(c => node.appendChild(render(c)))
  return n
}
