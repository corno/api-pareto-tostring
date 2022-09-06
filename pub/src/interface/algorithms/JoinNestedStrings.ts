import * as pt from "pareto-core-types"

export type FJoinNestedString = (
    $: {
        strings: pt.Nested<string>
        separator?: string
    }
) => string