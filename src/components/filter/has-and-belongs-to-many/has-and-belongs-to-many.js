import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './has-and-belongs-to-many.less';
import view from './has-and-belongs-to-many.stache';

export const ViewModel = DefineMap.extend({
    model: "any",
    displayProperty: "string",
    modelTitle: "string",
    values: "any",
    itemsPromise: {
        value: function(){
            return this.model.getList({});
        }
    },
    getId: function(item){
        return this.model.connection.id(item);
    },
    getDisplay: function(item){
        return item[this.displayProperty];
    }
});

export default Component.extend({
  tag: 'has-and-belongs-to-many',
  ViewModel,
  view
});
