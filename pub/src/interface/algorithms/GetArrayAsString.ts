import * as pt from "pareto-core-types"

export type FGetArrayAsString = <T>(
    $: {
        readonly "array": pt.Array<T>,
        readonly "separator"?: string
    }
) => string