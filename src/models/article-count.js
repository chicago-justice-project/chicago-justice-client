import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import set from 'can-set';
import loader from '@loader';

export const ArticleCount = DefineMap.extend({
  seal: false
}, {
  'id': '*'
});

ArticleCount.List = DefineList.extend({
  '*': ArticleCount
});

const algebra = new set.Algebra(
    set.props.id("id")
);

ArticleCount.connection = superMap({
  url: loader.serviceBaseURL + '/api/articles/count',
  Map: ArticleCount,
  List: ArticleCount.List,
  name: 'article-count',
  algebra
});


export default ArticleCount;
