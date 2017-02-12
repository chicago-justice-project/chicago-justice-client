import QUnit from 'steal-qunit';
import Category from './category';

QUnit.module('models/category');

QUnit.test('getList', function(){
  stop();
  Category.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.item(0).description, 'First item');
    start();
  });
});
