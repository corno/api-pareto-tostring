import * as pt from "pareto-core-types"

export type FGetKeysAsString = <T>(
    $: {
        dictionary: pt.Dictionary<T>,
        separator?: string
    }
) => string