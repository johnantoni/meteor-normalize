Package.describe({
  name: 'johnantoni:meteor-normalize',
  version: '0.0.1',
  summary: 'normalize.css ~ packaged for Meteor',
  git: 'https://github.com/johnantoni/meteor-normalize.git',
  documentation: 'README.md'
});

Package.on_use(function(api) {
  api.add_files([
    'normalize.css/normalize.css'
  ], ['client']);
});
