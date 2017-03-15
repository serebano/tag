function Signals(target, path, api) {
    return {
        add(path, value) {
            return this.apply(
                path,
                function add(state, chain, signalPath) {
                    return props => api.run(signalPath, chain, props || {});
                },
                value,
                path.join(".")
            );
        }
    };
}

export default Signals;
