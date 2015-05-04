// get required bits
var app = require('app');
var browserWindow = require('browser-window');
// make an array containing all plugins to be used with markdown-it
var mdPlugins = [
  'markdown-it-abbr',
  'markdown-it-container',
  'markdown-it-deflist',
  'markdown-it-emoji', // may decide to remove this one
  'markdown-it-footnote',
  'markdown-it-for-inline',
  'markdown-it-ins',
  'markdown-it-mark',
  'markdown-it-sub',
  'markdown-it-sup'
];
// markdown-it's plugin loader expects objects built from plugins via require()
var md = require('markdown-it')('commonmark')
        .use(require('markdown-it-abbr'))
        .use(require('markdown-it-container'))
        .use(require('markdown-it-deflist'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-for-inline'))
        .use(require('markdown-it-ins'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-sub'))
        .use(require('markdown-it-sup'));
// crash reporting
require('crash-reporter').start();

var mainWindow = null;

// quit when all windows are closed
app.on('window-all-closed', function()
{
  if(process.platform != 'darwin')
    app.quit();
});

// done initializing; set up and initialize windows
app.on('ready', function()
{
  // create browser window
  mainWindow = new browserWindow({width: 1024, height: 768});
  // load the front page
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  // handle window closing
  mainWindow.on('closed', function()
  {
    // modify this to deal with multiple pages if/when multi-window support is added
    mainWindow = null;
  });
});
