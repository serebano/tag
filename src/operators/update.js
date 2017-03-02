function update(target, operator, ...args) {

    function action(context) {
        return target.update(context, operator, ...args)
    }

    action.operator = operator
    action.displayName = `${operator.name}(${target}, ${args.map(String).join(", ")})`

    return action
}

export default update
