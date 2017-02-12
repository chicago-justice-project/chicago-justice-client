import QUnit from 'steal-qunit';
import { ViewModel } from './params';

// ViewModel unit tests
QUnit.module('chicago-justice-client/components/params');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the cj-params component');
});
