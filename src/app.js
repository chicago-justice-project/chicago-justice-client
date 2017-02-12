import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import 'can-component';
import 'can-stache';
import 'can-connect/can/super-map/';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'chicago-justice-client',
    serialize: false
  }
});

export default AppViewModel;
