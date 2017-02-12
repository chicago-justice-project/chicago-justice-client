import QUnit from 'steal-qunit';
import Article from './article';

QUnit.module('models/article');

QUnit.test('getList', function(){
  stop();
  Article.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.item(0).description, 'First item');
    start();
  });
});
