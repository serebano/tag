import bitbox, { map, print } from "../bitbox"

const obj = {}

const box = bitbox(map, {
    foo: ["foo"],
    bar: ["bar"]
})

box(Object.assign, {
    bar: 20,
    foo: 100
})(print)(obj)

a = bitbox(
    map(
        ({ state, foo }) => {
            return {
                count: state.count,
                foo: foo.bar,
                items: foo.items,
                x: state.name
            }
        },
        ({ state }, { observable }) => {
            return {
                state: state(observable),
                foo: state(target => {
                    return {
                        bar: target.name,
                        items: target.items || (target.items = [])
                    }
                })(observable)
            }
        }
    )
)

a.count(store, a.count(inc))

export default { box, obj }
