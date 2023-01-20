import {common_CardTypes} from '@properties/card_types'
import {CardConfig} from '@intf/Config'

type CardsConfigs = {
   [key in common_CardTypes]: CardConfig
}

const cardsConfig: CardsConfigs = {
   [common_CardTypes.Goal]: {
      caption: 'Path Goal',
      description: 'Initial block that defines the purpose of the pathway',
      onInsert: {
         caption: 'Path Goal',
         description: 'Become the superman!'
      },
      slug: 'goal',
      stats: 'accumulated',
      icon: 'icon_card_goal',
      parentFor: [
         common_CardTypes.Skill,
         common_CardTypes.Category,
         common_CardTypes.Task
      ]

   },
   [common_CardTypes.Category]: {
      caption: 'Category',
      description: 'Grouping block that allows to structure the pathway',
      onInsert: {
         caption: 'New category',
         description: 'Use me to group the skills and tasks'
      },
      slug: 'category',
      stats: 'accumulated',
      icon: 'icon_card_category',
      parentFor: [
         common_CardTypes.Skill,
         common_CardTypes.Category,
         common_CardTypes.Task
      ]
   },
   [common_CardTypes.Skill]: {
      caption: 'Skill',
      description: 'Specific and measurable element to learn',
      onInsert: {
         caption: 'New skill',
         description: 'I can be achieved by completing tasks'
      },
      slug: 'skill',
      stats: 'accumulated',
      icon: 'icon_card_skill',
      parentFor: [
         common_CardTypes.Task
      ]
   },
   [common_CardTypes.Task]: {
      caption: 'Task',
      description: 'Task block, ultimate thing to do',
      onInsert: {
         caption: 'Task',
         description: 'I should represent a specific exercise'
      },
      slug: 'task',
      stats: 'individual',
      icon: 'icon_card_task',
      parentFor: [
         common_CardTypes.Task
      ]
   }
}

export default cardsConfig
