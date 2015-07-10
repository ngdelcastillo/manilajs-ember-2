/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'manilajs-demo',
    environment: environment,
    firebase: 'https://YOUR-FIREBASE-NAME.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "https://*.firebaseio.com",
      'script-src': "'self' 'unsafe-inline' http://use.typekit.net/ localhost:35729 https://*.firebaseio.com",
      'font-src': "'self' https://*.typekit.com/*",
      'img-src': "'self' 'unsafe-inline' http://p.typekit.net http://www.placehold.it/ http://placehold.it/ https://placeholdit.imgix.net/",
      'style-src': "'self' 'unsafe-inline' http://use.typekit.net",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.host = 'http://localhost:3000';
    ENV.namespace = 'api';
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:devise',
      crossOriginWhitelist: [ENV.host]
    };
    ENV['simple-auth-devise'] = {
      serverTokenEndpoint: ENV.host + '/users/sign_in'
    };
    ENV.contentSecurityPolicy['connect-src'] =  "'self' wss://*.firebaseio.com "  + ENV.host;
    ENV.firebase = 'https://manilajsdemo.firebaseio.com/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
