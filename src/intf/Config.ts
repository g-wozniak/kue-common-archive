import {common_CardTypes} from '@properties/card_types'
import {CardWidgetCommonProps} from '@intf/Blocks'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

/**
 * CardConfig
 * @description defines the structure of a block card configuration; this is shared across builder and viewer to reach consistency
 */
export type CardConfig = {
   caption: string //
   description: string //
   onInsert: {
      caption: string
      description: string
   }
   slug: string
   stats: 'individual' | 'accumulated'
   icon: string
   parentFor: common_CardTypes[]
}

/**
 * CardWidgetConfig
 */
export type CardWidgetConfig<SomeCardWidgetProps> = {
   name: string
   role: string
   icon: IconDefinition
   defaultProps: CardWidgetCommonProps & SomeCardWidgetProps
}