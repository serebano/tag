import * as observer from "./observer"
import resolve from "./resolve"
import create, { symbol } from "./create"
import Mapping from "./mapping"
import is from "../utils/is"
import { get, observable } from "./operators"
/**
 * bitbox
 * Create new box
 * @param  {Array}
 * @return {Function}
 */

export default function bitbox() {
    return create(arguments)
}

bitbox.resolve = resolve // (target, box, method, ...args)

/**
 * Handler methods
 * bitbox[ get, set, map, has, keys, delete, define ]
 *
 * @param  {Object} target
 * @param  {Function|Array} path
 * @return {Any}
 */

bitbox.get = function get(target, box) {
    return bitbox.resolve(target, box, Reflect.get)
}

bitbox.set = function set(target, box, value) {
    return bitbox.resolve(target, box, Reflect.set, value)
}

bitbox.map = function map(target, map, root) {
    return new Proxy(new Mapping(map, root), {
        get(mapping, key) {
            if (Reflect.has(mapping, key)) return bitbox.get(target, Reflect.get(mapping, key))
            if (Reflect.has(mapping, "*")) return bitbox.get(target, Reflect.get(mapping, "*")(key))
        },
        set(mapping, key, value) {
            if (Reflect.has(mapping, key))
                return bitbox.set(target, Reflect.get(mapping, key), value)
            if (Reflect.has(mapping, "*"))
                return bitbox.set(target, Reflect.get(mapping, "*")(key), value)
        }
    })
}

bitbox.has = function has(target, box) {
    return bitbox.resolve(target, box, Reflect.has)
}

bitbox.keys = function keys(target, box) {
    return Reflect.ownKeys(bitbox.resolve(target, box))
}

bitbox.delete = function deleteProperty(target, box) {
    return bitbox.resolve(target, box, Reflect.deleteProperty)
}

bitbox.define = function defineProperty(target, box, descriptor) {
    return bitbox.resolve(target, box, Reflect.defineProperty, descriptor)
}

bitbox.apply = function apply(target, box, args) {
    return Reflect.apply(bitbox.resolve(target, box), target, args)
}

bitbox.observe = function observe(target, box, args) {
    return observer.observe(is.box(box) ? get(box) : box, observable(target))
}

bitbox.observable = function observable(target) {
    return observer.observable(target)
}

/**
 * bitbox.path
 * Get array path
 * @param  {Function} box
 * @return {Array}
 */

bitbox.path = function path(box) {
    return is.array(box) ? box : Reflect.get(box, symbol.path) || []
}

/* ... */
