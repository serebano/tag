/** @jsx h */
import app from "../app"
import { stringify } from "../../operators"
import mapping from "../mapping"

window.mapping = mapping

function Mapped(props, h) {
    return (
        <div>
            <div style={{ background: "#f4f4f4", padding: 8 }}>
                <b>changes({props.changed}):</b>
                <div>
                    {props.changes.map((path, idx) => (
                        <div><code key={path}>[{idx}] {path.join(".")}</code></div>
                    ))}
                </div>
            </div>
            <pre style={{ color: props.color }}>{props.str}</pre>
        </div>
    )
}

Mapped.map = {
    changes: app.observer.changes,
    changed: app.observer.changed,
    str: [mapping, stringify],
    color: mapping.color
}

export default Mapped