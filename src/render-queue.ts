import options from './options'
import { defer } from './util'
import { renderComponent } from './vdom/component'

let items: Array<any> = []
export function rerender() {
  let p:any;
  while( (p = items.pop())) {
    if (p._dirty) {
      renderComponent(p)
    }
  }
}
export function enqueueRender(component: any) {
  if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
    (options.debounceRendering || defer)(rerender)
  }
}
