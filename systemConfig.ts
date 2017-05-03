declare var System: any;

System.config({
  paths: {
    'npm:': 'node_modules/',
    'rxjs/add/observable/*' : 'node_modules/rxjs/add/observable/*.js',
    'rxjs/add/operator/*' : 'node_modules/rxjs/add/operator/*.js',
    'rxjs/*' : 'node_modules/rxjs/*.js'
  },
  map: {
    'app': 'app',
    'main': 'app/main.js',

    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

    'rxjs':                       'npm:rxjs',
    'angular-in-memory-web-api':  'npm:angular-in-memory-web-api',
    'angularfire2':               'npm:angularfire2',
    'firebase':                   'npm:firebase',
    'passport':                   'npm:passport',
    'passport-strategy':          'npm:passport-strategy',
    'passport-oauth1':            'npm:passport-oauth1',
    'passport-oauth2':            'npm:passport-oauth2',
    'passport-local':             'npm:passport-local',
    'passport-facebook':          'npm:passport-facebook',
    'pause':                      'npm:pause',
    'oauth':                      'npm:oauth',
    'util':                       'npm:util',
    'url':                        'npm:url',
    'uid2':                       'npm:uid2',

    'json': 'plugins/json.js'
  },
  packages: {
    'app': { main: './main.js', defaultExtension: 'js' },
    'api' : { defaultExtension : 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },
    'firebase': { main: './firebase.js', defaultExtension: 'js' },
    'angularfire2': { main: './index.js', defaultExtension: 'js', format: 'esm' },
    'passport': { main: './lib/index.js', defaultExtension: 'js' },
    'pause': { main: './index.js', defaultExtension: 'js' },
    'oauth': { main: './index.js', defaultExtension: 'js' },
    'util': { main: './util.js', defaultExtension: 'js' },
    'url': { main: './url.js', defaultExtension: 'js' },
    'uid2': { main: './index.js', defaultExtension: 'js' },
    'passport-strategy': { main: './lib/index.js', defaultExtension: 'js' },
    'passport-oauth1': { main: './lib/index.js', defaultExtension: 'js' },
    'passport-oauth2': { main: './lib/index.js', defaultExtension: 'js' },
    'passport-local': { main: './lib/index.js', defaultExtension: 'js' },
    'passport-facebook': { main: './lib/index.js', defaultExtension: 'js' }
  },
  typescriptOptions: {
      tsconfig: true,
      types: []
  },
  meta: {
    '*.json': {
      loader: 'json'
    }
  }
});
