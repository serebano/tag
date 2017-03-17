export default function(target, ...args) {
    function push(context) {
        context.select(target).apply(
            function push(array = [], ...values) {
                array.push(...values);

                return array;
            },
            args
        );
    }

    push.displayName = `push(${Array.prototype.join.call(arguments, ", ")})`;

    return push;
}
