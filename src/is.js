import { isObservable } from "./observer"

function _is(Ctor, val) {
    return (val != null && val.constructor === Ctor) || val instanceof Ctor
}

const is = {
    box: arg => is.func(arg) && Reflect.has(arg, Symbol.for("box")),
    observable: arg => isObservable(arg),
    curryable: arg => arg && arg[is.curryable.symbol] === true,
    placeholder: arg => arg && arg["@@functional/placeholder"] === true,
    func: arg => typeof arg === "function",
    object: arg => typeof arg === "object" && arg !== null && !Array.isArray(arg),
    complexObject: arg => typeof arg === "object" && arg !== null,
    array: arg => Array.isArray(arg),
    promise: arg => arg instanceof Promise,
    string: arg => typeof arg === "string",
    number: arg => typeof arg === "number",
    numeric: arg => !is.symbol(arg) && !isNaN(arg),
    integer: Number.isInteger || (n => n << 0 === n),
    symbol: arg => typeof arg === "symbol",
    undefined: arg => typeof arg === "undefined",
    null: arg => arg === null
}

is.curryable.symbol = Symbol("isCurryable")

export default Object.assign(_is, is)
