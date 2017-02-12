import QUnit from 'steal-qunit';
import { ViewModel } from './belongs-to';

// ViewModel unit tests
QUnit.module('chicago-justice-client/components/filter/belongs-to');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the filter-belongs-to component');
});
