export { default as wellKnownSymbols } from "./wellKnownSymbols";
export { default as toPrimitive } from "./toPrimitive";
export { default as toArray } from "./toArray";
export { default as toJSON } from "./toJSON";
export { default as nextTick } from "./nextTick";
export { default as is } from "./is";

export function delay(func, wait) {
    return function(...args) {
        setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

export function getChangedProps(propsA, propsB) {
    const propsAKeys = Object.keys(propsA);
    const propsBKeys = Object.keys(propsB);
    const changedProps = [];

    for (let i = 0; i < propsAKeys.length; i++) {
        if (propsA[propsAKeys[i]] !== propsB[propsAKeys[i]]) {
            changedProps.push({
                path: [propsAKeys[i]]
            });
        }
    }

    for (let i = 0; i < propsBKeys.length; i++) {
        if (propsA[propsBKeys[i]] !== propsB[propsBKeys[i]]) {
            changedProps.push({
                path: [propsBKeys[i]]
            });
        }
    }

    return changedProps;
}