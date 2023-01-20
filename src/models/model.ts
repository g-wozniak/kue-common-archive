import cloneDeep from 'lodash/cloneDeep'
class AnyModel {

   protected readonly item: any

   constructor(data: any) {
      this.item = cloneDeep(data)
   }

   protected setValue(key: any, value: any) {
      if ((this.item as Record<string, any>).hasOwnProperty(key)) {
         this.item[key] = value
      }
   }

   protected toJSON() {
      return this.item
   }
}

export default AnyModel