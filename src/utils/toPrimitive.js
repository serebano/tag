import { is } from "."

export default function toPrimitive(keys, sep = ".", isKey) {
    const result = keys
        .map((key, idx) => {
            if (is.object(key)) {
                return (
                    "map({ " +
                    Object.keys(key).map(k => `${k}: ` + toPrimitive([...key[k]], sep)).join(", ") +
                    " })"
                )
            }
            if (is.function(key)) {
                if (isKey) {
                    return "function " + (key.displayName || key.name)
                }
                return (
                    (!is.function(keys[idx - 1]) ? "(" : "") +
                    (key.displayName || key.name || String(key)) +
                    (!is.function(keys[idx + 1]) ? ")" : ", ")
                )
            }
            return is.array(key)
                ? "[" + toPrimitive(key, sep, true) + "]"
                : (idx > 0 ? sep : "") + key
        })
        .join("")

    return result
}
