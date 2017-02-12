import QUnit from 'steal-qunit';
import { ViewModel } from './has-and-belongs-to-many';

// ViewModel unit tests
QUnit.module('chicago-justice-client/components/filter/has-and-belongs-to-many');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the has-and-belongs-to-many component');
});
