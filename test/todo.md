# Welcome to MuD Notes!
Your Electron-powered, markdown-based note-taking app.

*Todo list for this project:*
- Check Atom source code for Markdown previewre code; may be able to utilize it for MuD Notes to process MD source to valid X/HTML code
- Editor need to be designed to highlight MD &amp; check for validity (e.g., no missing or misplaced tags); warn user, but stlil allow save in case they're unable to fix the issues immediately
- Automatically update preview pane with option to lock scroll of both
panes together
- Preview pane should be toggleable
- Help file(s) with MD tips &amp; syntax
- Allow user to pick syntax (e.g., original, Github, CommonMark, etc)
  - Start with either Github or *CommonMark*, then expand
- About page should contain info on MuD Notes, Electron, &amp; other dependencies, including links to relevant project pages and/or source code (when available)
- Readme should note that Electron will (currently) need to be installed manually to run; include instructions on how to run project as-is
  - Eventually, Electron needs to be packed with it &amp; the other dependencies so it can be run as a self-contained program
    - Will likely need to pack Linux, Windows &amp; Mac versions separately here due to potentially different file structures
      - Will need Mac tester(s); ask around Comp. Sci. department &amp; make note of this on Github once it gets to this point
    - Platform-dependent installs (versions packed with Electron) may need to be kept in their own repositories
- MD parsers should (ideally) be in JS... or at least be something that can be run (read: executed) through Node.js
