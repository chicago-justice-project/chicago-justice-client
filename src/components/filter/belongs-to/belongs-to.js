import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './belongs-to.less';
import view from './belongs-to.stache';
import "can-stache-converters";

export const ViewModel = DefineMap.extend({
    model: "any",
    displayProperty: "string",
    modelTitle: "string",
    value: "any",
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
  tag: 'filter-belongs-to',
  ViewModel,
  view
});
