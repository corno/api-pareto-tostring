import * as pt from "pareto-core-types"

export type FGetArrayAsString = <T>(
    $: {
        array: pt.Array<T>,
        separator?: string
    }
) => string