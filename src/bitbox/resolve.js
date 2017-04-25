import { is } from "../utils"
import bitbox from "."

/**
 * bitbox.resolve
 *
 * @param  {Object} target
 * @param  {Function|Array} box
 * @param  {Function} method
 * @return {Any}
 */

function resolve(target, path, method) {
    return bitbox.path(path).reduce((value, key, index, path) => {
        if (is.array(key)) key = resolve(target, key)

        const type = typeof key

        if (type === "object") return bitbox.proxy(value, key)
        if (type === "function") return key(value)

        if (is.undefined(value)) return value

        if (method && (!path.length || index === path.length - 1)) {
            if (type !== "string") {
                throw new Error(
                    `[bitbox.resolve] Invalid key type "${type}" for method "${method.name}"`
                )
            }

            return Reflect.apply(
                method,
                undefined,
                [value, key].concat(
                    Array.prototype.slice
                        .call(arguments, 3)
                        .map(arg => (is.box(arg) ? arg(target) : arg))
                )
            )
        }

        return Reflect.get(value, key)
    }, target)
}

export default resolve
