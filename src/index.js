function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null
  return {
    nodeName,
    attributes,
    children
  }
}

function render(vnode) {
  console.log(vnode)
  let node, children, attributes
  if (vnode.split) {
    return document.createTextNode(vnode);
  }
  node = document.createElement(vnode.nodeName)
  attributes = vnode.attributes || {}
  children = vnode.children || []

  Object.keys(attributes).forEach(k => {
    node.setAttribute(k, attributes[k])
  })
  children.forEach(child => {
    node.appendChild(render(child))
  })
  return node
}
let Test = (
  <ul id={"123"}>
    <li>{123}</li>
    <li>2</li>
    <li>3</li>
  </ul>
)
document.getElementById('root').appendChild(render(Test))
