interface RefObj {
  current?: string
}
interface RefFunc {
  (value: string): void;
}
interface DeferFunc {
  (func: object): any
}
export function extend(obj: object, props: object): Object {
  for (let i in props) {
    if (props.hasOwnProperty(i)) {
      obj[i] = props[i]
    }
  }
  return obj
}
export function applyRef(ref: RefObj | RefFunc, value: string): void {
  if (typeof ref === 'function') {
    ref(value)
  } else {
    ref.current = value;
  }
}
export const defer:DeferFunc = typeof Promise == 'function' ?
  Promise.resolve().then.bind(Promise.resolve()) : setTimeout

defer(() => {
  console.log(123)
})
