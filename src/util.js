"use strict";
exports.__esModule = true;
function extend(obj, props) {
    for (var i in props) {
        if (props.hasOwnProperty(i)) {
            obj[i] = props[i];
        }
    }
    return obj;
}
exports.extend = extend;
function applyRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else {
        ref.current = value;
    }
}
exports.applyRef = applyRef;
exports.defer = typeof Promise == 'function' ?
    {} : setTimeout;
