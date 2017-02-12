import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import set from 'can-set';
import loader from '@loader';

export const Category = DefineMap.extend({
  seal: false
}, {
  'abbreviation': '*'
});

Category.List = DefineList.extend({
  '*': Category
});

const algebra = new set.Algebra(
    set.props.id("abbreviation")
);

Category.connection = superMap({
  url: loader.serviceBaseURL + '/api/categories',
  Map: Category,
  List: Category.List,
  name: 'category',
  algebra
});


export default Category;
