import { getArgNames, toCamelCase, toDisplayName } from "../utils"
import is from "../is"

export const store = new Map()

export const getReceivedNames = (_argNames, received) =>
    _argNames.filter((arg, idx) => is.placeholder(received[idx]) || idx >= received.length)

const _toString = (_displayName, _receivedNames) => `function ${_displayName}(${_receivedNames.join(", ")}) {...}`
export const toString = (_name, _argNames, received) => () =>
    _toString(toDisplayName(_name, _argNames, received), getReceivedNames(_argNames, received))
export const pairArgs = (_argNames, received) =>
    received.reduce((obj, value, idx) => {
        const key = !is.undefined(_argNames[idx]) ? _argNames[idx] : idx
        obj[key] = value
        return obj
    }, {})

function desc(fn, fx, received = []) {
    if (!store.has(fn)) store.set(fn, new Set())

    const argNames = getArgNames(fn)

    fx.argNames = getReceivedNames(argNames, received)
    fx.displayName = fn.name // + received.join("_") // "(" + getReceivedNames(argNames, received) + ")"
    fx.toString = toString(fn.name, argNames, received)

    store.get(fn).add(fx)

    return fx

    // if (!f._isCurried) {
    //     f._isCurried = true
    //     f._name = fn.name
    //
    //     f._receivedArgs = received
    //     f._argNames = fn._argNames || getArgNames(fn)
    //     f._receivedNames = f._argNames.filter((arg, idx) => is.placeholder(received[idx]) || idx >= received.length)
    //     f.displayName = toDisplayName(f._name, f._argNames, received)
    //
    //     Object.defineProperty(f, "args", {
    //         get: () =>
    //             received.reduce((obj, value, idx) => {
    //                 const key = !is.undefined(f._argNames[idx]) ? f._argNames[idx] : idx
    //                 obj[key] = value
    //                 return obj
    //             }, {})
    //     })
    //
    //     f.toString = () => `function ${f.displayName}( ${f._receivedNames.join(", ")} ) {}`
    //
    //     const map = received.map(
    //         (val, idx) =>
    //             `${f._argNames[idx]}: ` +
    //             (is.placeholder(val) ? "__" : is.func(val) && val.displayName ? val.displayName : `${val}`)
    //     )
    //
    //     console.log(
    //         `%c${f._name}%c(`,
    //         "font-weight:bold;color:#61afef",
    //         "",
    //         map.join(", "),
    //         `) -> ( ${f._receivedNames.join(", ")} )`
    //     )
    // }
    //
    // if (!store.has(fn)) store.set(fn, new Set())
    // store.get(fn).add(f)
    //
    // return f
}

export default desc