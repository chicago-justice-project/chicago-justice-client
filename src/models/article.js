import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import set from 'can-set';
import loader from '@loader';

export const Article = DefineMap.extend({
  seal: false
}, {
  'id': '*'
});

Article.List = DefineList.extend({
  '*': Article
});

const algebra = new set.Algebra(
    set.props.id("id")
);

Article.connection = superMap({
  url: loader.serviceBaseURL + '/api/articles',
  Map: Article,
  List: Article.List,
  name: 'article',
  algebra
});


export default Article;
