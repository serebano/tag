import create from "./create"
import resolve from "./resolve"
import observable from "./observer/observable"
import observe from "./observer/observe"
import mapping from "./mapping"
import map from "./map"
import box from "./box"
import * as operators from "./operators"
import is from "./utils/is"
export * from "./operators"

/**
 * bitbox(...)
 * Constructor
 * @param  {Array}
 * @return {Function}
 */

function bitbox(...keys) {
    return create(keys)
}

/**
 * operators
 */
bitbox.map = map
bitbox.box = box

bitbox.create = create
bitbox.resolve = resolve
bitbox.observe = observe
bitbox.observable = observable
bitbox.operators = operators
bitbox.mapping = mapping
bitbox.version = ["bitbox", 1, 2, 32, "@may4"]

function dev(box) {
    typeof window !== "undefined" &&
        Object.assign(window, operators, { box, operators, bitbox }) &&
        console.dir(bitbox)

    const { keys, join } = operators

    return {
        operators: box.operators(target => {
            return keys(target).map(key =>
                String(target[key]).split("{\n").shift().split("function ").pop().trim()
            )
        }),
        version: box.version(join, ".")(print)
    }
}

bitbox(dev).version(Object.assign({}, bitbox))

export default bitbox
/* ... */
