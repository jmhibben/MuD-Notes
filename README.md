# MuD Notes
An Electron-powered, CommonMarkl-based note-taking app.


## Using MuD Notes
Currently, MuD Notes requires that you have [Electron](http://electron.atom.io) pre-installed on your system to run (if you don't already have it). To run MuD Notes:

1. Download the zip folder containing the Master branch and unpack it into your desired location.
2. Use npm to download and install markdown-it and the following plugins:
  - Note: npm is installed with Electron; run `npm install markdown-it --save` to install markdown-it; replace `markdown-it` with one of the plugins below to install that plugin
  - markdown-it-abbr
  - markdown-it-container
  - markdown-it-deflist
  - markdown-it-footnote
  - markdown-it-for-inline
  - markdown-it-ins
  - markdown-it-mark
  - markdown-it-sub
  - markdown-it-sup
3. Open a terminal or command prompt and navigate to the directory **above** where you unzipped MuD Notes.
  - e.g., if you unpacked it to `{%USER%}/Downloads/MuD-Notes`, you would cd to `{%USER%}/Downloads` (replace `{%USER%}` with the path to your user directory)
4. Assuming you installed the pre-built binary packages for Electron, type `electron ./MuD-Notes` to run the program.
  - *Note:* If this step does not work, locate the path to Electron. Often, simply running Electron will show you the exact path to the pre-built binary file. The [Electron docs](https://github.com/atom/electron/tree/master/docs) page should have information on exactly where this is installed by default.
    - I will change the Electron docs link above once I find a hard-link to the page containing that information.
