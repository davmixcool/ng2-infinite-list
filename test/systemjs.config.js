(function(global) {
  var map = {
    app: ".",
    '@angular': '../node_modules/@angular',
    'rxjs': '../node_modules/rxjs',
    'ng2-utils': '../node_modules/ng2-utils'
  };
  var packages = {
    app: { main: './main.ts', defaultExtension: 'ts' },
    '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
    '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' },
    'ng2-utils': {main: 'dist/index.ts', defaultExtension: 'ts'}
  };

  map['ng2-infinite-list'] = '../dist';
  packages['ng2-infinite-list'] = {main: 'index.js', defaultExtension: 'js'};
  map['ng2-infinite-list'] = '../src';
  packages['ng2-infinite-list'] = {main: 'index.ts', defaultExtension: 'ts'};

  System.config({
    transpiler: 'typescript', //use typescript for compilation
    typescriptOptions: {      //typescript compiler options
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  });
})(this);
