import is from "./is"
import * as bitbox from "./bitbox"
import r from "ramda"

const {
    __,
    id,
    box,
    use,
    times,
    map,
    set,
    has,
    get,
    tag,
    apply,
    toUpper,
    observable,
    curry,
    join,
    tap,
    log,
    inc,
    dec,
    pipe,
    as,
    add,
    proxy,
    view,
    resolve,
    last,
    concat,
    ife,
    observe,
    slice,
    dropLast,
    take,
    push
} = bitbox

function App(path, __s) {
    const key = last(path)

    if (has(key, bitbox)) {
        path = dropLast(1, path)

        const method = get(key, bitbox)
        if (is.func(method)) {
            // const tMethod = curry.adapt(method)(__(resolve(path)))
            // tMethod(...__s)

            if (method.map) {
                if (has("key", method.map)) {
                    const mkey = method(path.pop())
                    const t__et = __(resolve(path))

                    const mkeyLen = mkey.length
                    const __sLen = __s.length
                    const mArgs = __s.splice(0, mkeyLen - 1)
                    const r = resolve(path.concat(mkey(...mArgs)), ...__s)
                    //console.log(`mkey`, { r, mkey, mkeyLen, __sLen, mArgs, __s })
                    return r
                } else if (has("path", method.map)) {
                    //method.map.path = path
                    //console.log(`method/path`, path, method.map)
                    return method(path, ...__s)
                }
            }
            const m = apply(method, __s)
            const r = resolve(path.concat(m))
            //console.log(`method`, { m, path, r }, method.map)
            return r
        }
    }

    return resolve(path.concat(__s))
}

const app = box(App)
const obj = observable()

obj.foo = { x: 1, y: 2 }
obj.name = "my app"
obj.count = 0
obj.todos = []
obj.items = times(as("value"), 10)
obj.numbers = times(id, 10)
obj.counter = { value: 0 }
obj.logs = []

const counter = {}
const b1 = box(concat)
export const replace = curry(function replace(regex, replacement, str) {
    return str.replace(regex, replacement)
})
const hi = curry(function hi(name) {
    return `Hello ${name}`
})

const hi2 = hi(__(toUpper, concat("!"), log))

hi2("Scooby Doo")

const hi3 = hi2(__(concat(__, "Welcome!")))
hi3("serebano")

__(toUpper)(__(hi, set("foo", __, obj)))("xxxx ouou")

box(resolve(__, new Date())).getTime()

box(use(pipe, [resolve, resolve])).counter(set("value", inc), log, add(20))(obj)

box(r.assocPath, [0]).a.b.c.d.e.f.g.h(10, log)(obj)

box(pipe(r.union, resolve)).counter(
    set("value", inc),
    tap(log),
    "value",
    add(3),
    as("demo"),
    set("demo", add(-100)),
    log
)(obj)

const h = curry(function h(a, b, c, d, e) {
    return { a, b, c, d, e }
})
h(1, 2, 3, 4, 5)

// x('Hello', __.toUpper(), __(add, 1))('jjj',6)

const cnt = set(
    "count",
    __(value => {
        if (!is.number(value)) {
            console.error(`nnumber required`, { value })
            return id
        }
        return value >= 10 ? add(-10) : add(value)
    }),
    obj
)

//console.log(join(" - ", __(times(__, 10)))(concat(__(String), "item ")))

observe(
    "items",
    pipe(map(tag`<li>Count = ${"value"}</li>`), join(""), set("innerHTML", __(tag`<ul>${0}</ul>`), document.body)),
    obj
)
app.count.observe(log, obj)
app.count.set(inc, obj)

__(id, "items", map(app.value.tag`itm -> ${0}`), join("\n * "), concat(__, "\n*** Items: \n * "))(obj)

app.items.map(set("value", inc))(obj)

Object.assign(window, bitbox, { h, hi, hi2, hi3, cnt, r, b1, App, app, counter, bitbox, obj })
