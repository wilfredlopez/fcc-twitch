import { WLReactProps } from "./wlTypes"
import React from "react"

export type WLInternalProps<PropType, ElementType> = PropType &
  Omit<React.HTMLAttributes<ElementType>, "style"> &
  WLReactProps

export const createForwardRef = <PropType, ElementType>(
  ReactComponent: any,
  displayName: string,
) => {
  const forwardRef = (
    props: WLInternalProps<PropType, ElementType>,
    ref: React.Ref<ElementType>,
  ) => {
    return <ReactComponent {...props} forwardedRef={ref} />
  }
  forwardRef.displayName = displayName

  return React.forwardRef(forwardRef)
}

export {
  attachProps,
  getClassName,
  isCoveredByReact,
  syncEvent,
} from "./attachProps"
export { camelToDashCase, dashToPascalCase } from "./case"
