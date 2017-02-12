import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import set from 'can-set';
import loader from '@loader';

export const Feed = DefineMap.extend({
  seal: false
}, {
  'id': '*'
});

Feed.List = DefineList.extend({
  '*': Feed
});

const algebra = new set.Algebra(
    set.props.id("id")
);

Feed.connection = superMap({
  url: loader.serviceBaseURL + '/api/feeds',
  idProp: 'id',
  Map: Feed,
  List: Feed.List,
  name: 'feed',
  algebra
});


export default Feed;
