# webdiff-ui
The UI for viewing the sites archive and diffs. React and Webpack with CSS Modules and Jest. ES6 FTW.

Data archive is populated by the (differ service)[https://github.com/edgi-govdata-archiving/differ] which produces batch diffs to be fed to this UI.

# Goals of this Repo:
* Replace the currently-used Analyst spreadsheet with this UI 
* Provide a view of the diffs (vs. currenlty using versionista)
* Enable classification of the diff changes 

# Getting started
Clone this repo and then `yarn` all the packages and fire it up with `npm start`. 

###More details for newbies:
If you don't have yarn, you can just run `npm install`, or:
* update your version of node, must be ">5.0.0"
* `brew update`
* `brew install yarn`
* run `yarn` to install the node modules

# Preview of currently-used Analyst spreadsheet:
Part 1

Part 2
