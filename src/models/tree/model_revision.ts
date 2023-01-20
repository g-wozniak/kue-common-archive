import assign from 'lodash/assign'
import AnyModel from '@models/model'
import {TreeEdge, TreeRevisionItem} from '@models/tree/schema'
import {CardNodeDummyModel} from '@models/card/model_node'
import {common_CardTypes} from '@properties/card_types'
import {common_CardWidgets} from '@properties/card_widgets'
import {common_Difficulties} from '@properties/difficulties'
import {common_CardLayouts} from '@properties/card_layouts'
import {getDummyCardWidgetId} from '@helpers/dummy'


export class TreeRevisionModel extends AnyModel {

   constructor(data: TreeRevisionItem) {
      super(data)
   }

   public getRevision() {
      return (this.item as TreeRevisionItem).revision
   }

   public getLabel() {
      return (this.item as TreeRevisionItem).label
   }

   public getComment() {
      return (this.item as TreeRevisionItem).comment
   }

   public getTimestamp() {
      return (this.item as TreeRevisionItem).timestamp
   }

   public getNodes() {
      return (this.item as TreeRevisionItem).nodes
   }

   public getEdges() {
      return (this.item as TreeRevisionItem).edges
   }

   public toJSON() {
      return super.toJSON() as TreeRevisionItem
   }
}

type TreeRevisionDummyModelArgs = {
   emptyNodesEdges?: boolean
}

function edge(source: string, target: string): TreeEdge {
   return {
      _id: `${source}-${target}`,
      source,
      target
   }
}

export class TreeRevisionDummyModel extends TreeRevisionModel {
   constructor(overwrite: Partial<TreeRevisionItem> = {}, {emptyNodesEdges}: TreeRevisionDummyModelArgs = {}) {
      const nodes = [
         new CardNodeDummyModel({
            _id: 'goal',
            cardType: common_CardTypes.Goal,
            label: 'Pathway goal',
            position: {
               x: 200,
               y: 300
            },
            description: 'Become full stack software engineer ready to work on the commercial projects',
            time: 1,
            cost: 0,
            difficulty: common_Difficulties.None,
            layout: common_CardLayouts.TwoEqualColumns,
            widgets: [
               {
                  id: getDummyCardWidgetId('0000'),
                  widget: common_CardWidgets.Text,
                  slot: 1,
                  props: {
                     caption: 'Pathway goal',
                     text: 'Become full stack software engineer ready to work on the commercial projects'
                  }
               },
               {
                  id: getDummyCardWidgetId('0001'),
                  widget: common_CardWidgets.Text,
                  slot: 2,
                  props: {
                     caption: 'A few words from me',
                     text: 'A few words from the author'
                  }
               }
            ]
         }, 0).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Category,
            label: 'Programming techniques',
            description: 'Learn programming languages',
            position: {
               x: 300,
               y: 280
            },
            time: 1,
            cost: 0,
            difficulty: common_Difficulties.None,
            layout: common_CardLayouts.TwoRows
         }, 1).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Video',
            label: 'Introduction to programming',
            description: 'Watch the video about introduction to computer science and programming',
            time: 10,
            cost: 0,
            position: {
               x: 820,
               y: -80
            },
            difficulty: common_Difficulties.Easy
         }, 2).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Skill,
            label: 'JavaScript',
            time: 0,
            cost: 0,
            position: {
               x: 820,
               y: 420
            },
            difficulty: common_Difficulties.None,
            description: 'Learn JavaScript language',
            layout: common_CardLayouts.TwoColumns
         }, 3).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Udemy course',
            label: 'The online course',
            description: 'Watch Max Schwarzmuller course of JavaScript fundamentals',
            time: 600,
            cost: 49,
            position: {
               x: 1260,
               y: 660
            },
            difficulty: common_Difficulties.Moderate
         }, 4).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Article',
            label: 'What is JavaScript?',
            description: 'Read the article about JavaScript',
            cost: 0,
            position: {
               x: 1260,
               y: 480
            },
            difficulty: common_Difficulties.VeryEasy
         }, 5).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Skill,
            label: 'NodeJS',
            time: 0,
            cost: 0,
            position: {
               x: 820,
               y: 240
            },
            difficulty: common_Difficulties.None,
            description: 'Get to know NodeJS library'
         }, 6).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Article',
            label: 'What is NodeJS?',
            description: 'Read the article about NodeJS',
            time: 20,
            cost: 5,
            position: {
               x: 1260,
               y: 80
            },
            difficulty: common_Difficulties.VeryEasy
         }, 7).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Udemy course',
            label: 'The online course',
            description: 'Watch Max Schwarzmuller complete guide about NodeJS',
            time: 320,
            cost: 29,
            position: {
               x: 1260,
               y: 260
            },
            difficulty: common_Difficulties.Moderate,
         }, 8).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Category,
            label: 'Project methodologies',
            description: 'Learn how to work on software projects and with teams',
            time: 0,
            cost: 0,
            position: {
               x: 300,
               y: 460
            },
            difficulty: common_Difficulties.None
         }, 9).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Skill,
            label: 'Agile',
            description: 'Introduction to Agile',
            time: 0,
            cost: 0,
            position: {
               x: 820,
               y: 1020
            },
            difficulty: common_Difficulties.None
         }, 10).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Article',
            label: 'What is Agile?',
            description: 'Read about introduction to Agile',
            time: 20,
            cost: 0,
            position: {
               x: 1200,
               y: 900
            },
            difficulty: common_Difficulties.Easy
         }, 11).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Article',
            label: 'Agile Manifesto',
            description: 'Get to know Agile Manifesto',
            time: 40,
            cost: 0,
            position: {
               x: 1200,
               y: 1080
            },
            difficulty: common_Difficulties.Easy
         }, 12).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Category,
            label: 'SCRUM',
            description: 'Introduction to SCRUM',
            time: 0,
            cost: 0,
            position: {
               x: 1260,
               y: 700
            },
            difficulty: common_Difficulties.None
         }, 13).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'Article',
            label: 'Read the Scrum Guide',
            description: 'Understand the principles behind Scrum',
            time: 120,
            cost: 0,
            position: {
               x: 1500,
               y: 700
            },
            difficulty: common_Difficulties.None
         }, 14).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Category,
            label: 'Kanban',
            description: 'Introduction to Kanban',
            time: 0,
            cost: 0,
            position: {
               x: 1200,
               y: 1500
            },
            difficulty: common_Difficulties.None
         }, 15).toJSON(),
         new CardNodeDummyModel({
            cardType: common_CardTypes.Task,
            customCardType: 'YouTube video',
            label: 'Read about Kanban',
            description: 'Understand the principles behind Scrum',
            time: 60,
            cost: 9.90,
            position: {
               x: 1500,
               y: 1500
            },
            difficulty: common_Difficulties.None
         }, 16).toJSON(),
      ]
      super(assign({
         revision: 'aaa-ddd',
         label: 'initial version',
         comment: 'The main version of the template',
         timestamp: 1655564100,
         nodes: !emptyNodesEdges ? nodes : [],
         edges: !emptyNodesEdges ? [
            edge('goal', nodes[1]._id),
            edge('goal', nodes[9]._id),
            edge(nodes[1]._id, nodes[2]._id),
            edge(nodes[1]._id, nodes[3]._id),
            edge(nodes[3]._id, nodes[4]._id),
            edge(nodes[3]._id, nodes[5]._id),
            edge(nodes[1]._id, nodes[6]._id),
            edge(nodes[6]._id, nodes[7]._id),
            edge(nodes[6]._id, nodes[8]._id),
            edge(nodes[9]._id, nodes[10]._id),
            edge(nodes[10]._id, nodes[11]._id),
            edge(nodes[10]._id, nodes[12]._id),
            edge(nodes[10]._id, nodes[13]._id),
            edge(nodes[10]._id, nodes[15]._id),
            edge(nodes[13]._id, nodes[14]._id),
            edge(nodes[15]._id, nodes[16]._id)
         ] : []
      }, overwrite))
   }
}