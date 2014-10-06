Package.describe({
    name: "chhib:selectize-bootstrap-3",
    summary: "Selectize is a hybrid of a textbox and <select> element used for tagging, contact lists, and more.",
    version: '0.0.1',
    git: 'https://github.com/chhib/meteor-selectize-bootstrap-3.git'
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.use('jquery', 'client');

    api.addFiles([
        'selectize/dist/css/selectize.bootstrap3.css',
        'selectize/dist/js/standalone/selectize.js'
    ], ['client']);

});
