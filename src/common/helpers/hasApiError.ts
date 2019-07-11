import { Maybe } from "tsmonad";

const hasApiError = (apiData) => Maybe
  .just(apiData)
  .caseOf({
    just: (data: any) => data && (data.error === true || data.success === false),
    nothing: () => false
  });

export { hasApiError }