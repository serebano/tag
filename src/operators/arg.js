import curry from "../curry"
import nth from "./nth"

export default curry(function arg(n) {
    const arity = n < 0 ? 1 : n + 1
    return curry(function() {
        return nth(n, arguments)
    }, arity)
})
