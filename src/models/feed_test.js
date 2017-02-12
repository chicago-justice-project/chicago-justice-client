import QUnit from 'steal-qunit';
import Feed from './feed';

QUnit.module('models/feed');

QUnit.test('getList', function(){
  stop();
  Feed.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.item(0).description, 'First item');
    start();
  });
});
