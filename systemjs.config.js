/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'src':                        'lib', // 'dist',
        // '@angular':                   'node_modules/@angular',
     
      '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
      '@angular/material': 'npm:@angular/material/material.umd.min.js',
      'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
      'rxjs':                       'rxjs-min',
      'mathjax': 'node_modules/mathjax',

    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'src':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };
    var config = {
        paths: { 'npm:': 'node_modules/' },
        map: map,
        packages: packages
    };
    System.config(config);
})(this);

