
import {CardWidgetTextProps} from '@intf/widgets/Text'
import {common_Difficulties} from '@properties/difficulties'
import {common_CardWidgets} from '@properties/card_widgets'
import {common_CardLayouts} from '@properties/card_layouts'

/**
 * BlockDataProps
 * @description common props for every block located in each {node.data}
 * @remarks in a way should match to BaseCardItem
 */
export interface BlockDataProps {
   label: string // block label visible on the card
   description: string // block description visible on the card
   customCardType?: string // cards may have a bespoke or custom category or significance defined by mentor
   time: number // time in minutes necessary to complete the card
   cost: number // cost in US dollars required to be spent in order to complete the block
   difficulty: common_Difficulties // difficulty of the content of a card
   layout: common_CardLayouts // layout of a card (in what way the widgets will be rendered?)
   widgets: CardWidgets // list of the widgets within the card
}

/**
 * CardWidgets
 * @description Type defining all possible card widgets
 */
export type CardWidgets = CardWidget<(CardWidgetTextProps)>[]

/**
 * CardWidget
 * @description properties defining every widget in the builder and viewer
 */
export interface CardWidget<SomeCardWidgetProps> {
   id: string // auto-generated ID of a widget, must be unique
   slot: number // layout slot that is bound to the widget
   widget: common_CardWidgets // widget type
   props: CardWidgetCommonProps & SomeCardWidgetProps // widget props, this depends on widget type
}

/**
 * CardWidgetCommonProps
 * @description properties common for every widget that are editable and manageable by a mentor
 */
export type CardWidgetCommonProps = {
   caption: string
}


/**
 * CardWidgetProps
 * @description Type defining all possible card widget properties
 */
export type CardWidgetProps = CardWidgetCommonProps & (CardWidgetTextProps)
