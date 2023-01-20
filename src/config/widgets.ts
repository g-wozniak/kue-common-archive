import {faMessagePen} from '@fortawesome/pro-light-svg-icons/faMessagePen'
import {common_CardWidgets} from '@properties/card_widgets'
import {CardWidgetTextProps} from '@intf/widgets/Text'
import {CardWidgetConfig} from '@intf/Config'

type CardWidgetsConfig = {
   [widget: string]: CardWidgetConfig<any>
}

/**
 * TextWidget
 */
const TextWidgetConfig: CardWidgetConfig<CardWidgetTextProps> = {
   name: 'Text widget',
   role: 'Allows a mentor to add a custom text to the card',
   icon: faMessagePen,
   defaultProps: {
      caption: 'New text widget',
      text: 'Add some text to this widget'
   }
}


// ---

const cardWidgetsConfig: CardWidgetsConfig = {
   [common_CardWidgets.Text]: TextWidgetConfig
}

export default cardWidgetsConfig
