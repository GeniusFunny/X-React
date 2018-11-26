import { VNode} from './vnode'
interface Rerender{
  (): void;
}
interface DebounceRendering {
  (rerender: Rerender): void;
}
interface AfterUpdate {
  (component: any): void;
}
interface BeforeUnmount {
  (component: any): void;
}
interface Vnode {
  (vnode: VNode): void;
}
interface Options {
  debounceRendering?: DebounceRendering,
  syncComponentUpdates?: boolean,
  vnode?: Vnode,
  afterUpdate?: AfterUpdate,
  beforeUpdate?: BeforeUnmount
  
}
let options:Options = {}
export default options