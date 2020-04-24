import { JSX } from "@wilfredlopez/wl-components"
import { Components } from "@wilfredlopez/wl-components/dist/types"
import * as WLComponents from "@wilfredlopez/wl-components"

import { /*@__PURE__*/ createReactComponent } from "./createComponent"

export const WlButton = /*@__PURE__*/ createReactComponent<
  WLComponents.JSX.WlButton,
  WLComponents.Components.WlButton
>("wl-button")

export const WlContainer = /*@__PURE__*/ createReactComponent<
  JSX.WlButton,
  Components.WlContainer
>("wl-container")
