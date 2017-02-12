import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './params.less';
import view from './params.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the cj-params component'
  }
});

export default Component.extend({
  tag: 'cj-params',
  ViewModel,
  view
});
