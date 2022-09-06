import * as pt from "pareto-core-types"

export type FGetArrayAsString = <T>(
    $: pt.Array<T>
) => string