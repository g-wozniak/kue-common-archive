import {PathwayDummyModel} from './model'
import {PathwayItem} from './schema'
import {TemplateDummyModel} from '@models/template/model'
import {common_CardTypes} from '@properties/card_types'
import {common_Difficulties} from '@properties/difficulties'
import {common_CardLayouts} from '@properties/card_layouts'
import {common_CardWidgets} from '@properties/card_widgets'
import {CardNodeDummyModel} from '@models/card/model_node'
import {getDummyCardWidgetId} from '@helpers/dummy'


describe('→ PathwayModel → synchronisation with Template', () => {

   const _pathway: Partial<PathwayItem> = {
      progress: ['goal'],
      notes: [
         {
            cardId: 'goal',
            note: 'This is a goal note'
         }
      ],
      nodes: [
         new CardNodeDummyModel({
            _id: 'goal',
            cardType: common_CardTypes.Goal,
            label: 'Old pathway goal',
            description: 'Something else on the card',
            position: {
               x: 100,
               y: 300
            },
            time: 1,
            cost: 0,
            difficulty: common_Difficulties.Easy,
            layout: common_CardLayouts.Single,
            widgets: [
               {
                  id: getDummyCardWidgetId('0000'),
                  widget: common_CardWidgets.Text,
                  slot: 1,
                  props: {
                     caption: 'Old pathway goal',
                     text: 'Some irrelevant text which was old'
                  }
               },
               {
                  id: getDummyCardWidgetId('0001'),
                  widget: common_CardWidgets.Text,
                  slot: 2,
                  props: {
                     caption: 'Old pathway goal block',
                     text: 'Some irrelevant text which was old and different than previous'
                  }
               }
            ]
         }, 0).toJSON()
      ],
      edges: []
   }

   const template = new TemplateDummyModel({published: true, revisions: 3})

   const pathway = new PathwayDummyModel(_pathway)

   // TODO: Improve depth and quality of those tests to cover all probable scenarios
   test('→ synchronising pathway with a new version of the template', () => {
      const published = template.getTree().find(rev => rev.revision === template.getVersion().revision)!
      jest.spyOn(global.Date.prototype, 'toISOString').mockReturnValue('01-01-2001 00:00:00')
      pathway.synchronise(template)
      expect(pathway.toSyncedUpdate()).toEqual({
         version: template.getVersion().major,
         progress: _pathway.progress,
         notes: _pathway.notes,
         nodes: published.nodes,
         edges: published.edges,
         modified: '01-01-2001 00:00:00'
      })
      jest.resetAllMocks()
   })

})