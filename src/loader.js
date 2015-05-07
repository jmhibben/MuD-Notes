// get required bits
var app = require('app');
var browserWindow = require('browser-window');
var ipc = require('ipc');
var Menu = require('menu');
var fs = require('fs');
// access to filesystem through node.js
// var fs = require('fs');
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

function getFileContents(path)
{
  var buf;
  fs.readFile(path, function(err, data){
    if(err) throw err;
    buf = data;
  });
  return buf;
}

/* Menu! */
var menuTemplate = [
  {
    label:    'File',
    submenu:  [
      {
        label:      'Load...',
        sublabel:   'Load a file from the computer',
        accelerator:'CmdOrCtrl+L'
      },
      {
        label:      'Save',
        enabled:    false,
        accelerator:'CmdOrCtrl+S'
      },
      {
        label:      'Save as...',
        sublabel:   'Save the file under a different name',
        enabled:    false,
        accelerator:'CmdOrCtrl+Shift+S'
      },
      {
        type:       'separator'
      },
      {
        label:      'Quit',
        accelerator:'CmdOrCtrl+Q'
      }
    ]
  },
  {
    label:    'Dev',
    submenu:  [
      {
        label:      'Toggle DevTools',
        sublabel:   'Expose Chrome\'s Developer Tools for the application',
        accelerator:'CmdOrCtrl+Shift+I',
        click:      function() { browserWindow.getFocusedWindow().toggleDevTools(); }
      }
    ]
  },
  {
    label:    'MuD Notes',
    submenu:  [
      {
        label:      'CommonMark Help'
      },
      {
        label:      'About'
      }
    ],
  }
];
var menu = Menu.buildFromTemplate(menuTemplate);

// quit when all windows are closed
app.on('window-all-closed', function()
{
  if(process.platform != 'darwin')
    app.quit();
});

// done initializing; set up and initialize windows
app.on('ready', function()
{
  // set the menu
  Menu.setApplicationMenu(menu);
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
  /* The next "function" expects "arg" to be an object of the following format:
   * 'message'  : Contains info on what needs to be done
   * 'path'     : filesystem path to the default directory  NOTE: need to set the default path later
   * 'file'     : The file location (relative to 'path')
   * 'content'  : The contents of any file to be read/written
   *
   * More properties will be added as necessary
   */
  ipc.on('asynchronous-message', function(event, arg)
  {
    // console.log(arg['message']);
    var content='';
    if(arg['message'] == 'load')
    {
      console.log('path: ' + arg['path']);
      console.log('file: ' + arg['file'])
      content = getFileContents(arg['path']+arg['file']);
      // console.log(content);
    }
    var ret = {'message': 'load', 'content': content};
    event.sender.send('asynchronous-reply', ret);
  });
});
