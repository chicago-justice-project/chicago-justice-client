import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('chicago-justice-client functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('chicago-justice-client main page shows up', function() {
  F('title').text('chicago-justice-client', 'Title is set');
});
