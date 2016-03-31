Package.describe({
  name:"qinghai:collection2",
  version: "0.3.11_1",
  git: "https://github.com/noteon/meteor-collection2.git",
  summary: "Migrate from 0.8. Collection2"
});

Package.on_use(function(api) {
  api.use('qinghai:simple-schema@0.2.45_1', ['client', 'server']);
  api.imply && api.imply('qinghai:simple-schema', ['client', 'server']);

  // Allow us to detect 'insecure'.
  api.use('insecure@1.0.1', {weak: true});

  api.use(['underscore@1.0.1', 'deps@1.0.5', 'check@1.0.2', 'mongo-livedata@1.0.6'], ['client', 'server']);
  api.add_files(['collection2.js'], ['client', 'server']);
});

Package.on_test(function(api) {
  api.use('qinghai:collection2');
  api.use('test-helpers', 'server');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
    'random', 'deps']);

  api.add_files('collection2.tests.js', ['client', 'server']);
});