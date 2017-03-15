function DebuggerProviderFactory(store) {
    function DebuggerProvider(context, functionDetails, payload, prevPayload) {
        const devtools = store.devtools;

        if (devtools.preventInputPropReplacement) {
            Object.keys(payload).forEach(key => {
                if (prevPayload && key in prevPayload && prevPayload[key] !== payload[key]) {
                    throw new Error(
                        `Cerebral Devtools - You have activated the "preventInputPropReplacement" option and in signal "${context.execution.name}", before the action "${functionDetails.name}", the key "${key}" was replaced`
                    );
                }
            });
        }

        context.debug = data => context.debugger.send(
            Object.assign(
                {
                    datetime: Date.now()
                },
                data
            )
        );

        context.debugger = {
            send(debuggerData) {
                devtools.sendExecutionData(debuggerData, context, functionDetails, payload);
            },
            getColor() {
                return "#c00";
            },
            wrapProvider(providerKey) {
                const provider = context[providerKey];

                context[providerKey] = Object.keys(provider).reduce(
                    (wrappedProvider, key) => {
                        const originalFunc = provider[key];

                        wrappedProvider[key] = (...args) => {
                            context.debugger.send({
                                method: `${providerKey}.${key}`,
                                args: args
                            });

                            return originalFunc.apply(provider, args);
                        };

                        return wrappedProvider;
                    },
                    {}
                );
            }
        };

        return context;
    }

    return DebuggerProvider;
}

export default DebuggerProviderFactory;
