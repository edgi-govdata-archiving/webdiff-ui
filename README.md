# webdiff-ui
The UI for viewing the sites archive and diffs. React and Webpack with CSS Modules and Jest. ES6 FTW.

Data archive is populated by the (differ service)[https://github.com/edgi-govdata-archiving/differ] which produces batch diffs to be fed to this UI.

# Goals of this Repo:
* Make it easier, more efficient, less error-prone for analysts to recognize and appropriately classify diffs in pages.
* Replace the currently-used Analyst spreadsheet with this UI (see screenshot preview below)
* Provide a view of the diffs (vs. currenlty using versionista)
* Enable classification of the diff changes 

####Preview of currently-used Analyst spreadsheet:
Part 1
![Part 1 of Analyst Spreadsheet](https://cloud.githubusercontent.com/assets/6733241/22858197/d76cb55e-f06a-11e6-8451-acfcd20a6813.png)

Part 2
![Part 2 of Analyst Spreadsheet](https://cloud.githubusercontent.com/assets/6733241/22858196/d76c73fa-f06a-11e6-98e2-e2f2a0f65438.png)


# Getting started
* Clone this repo and then `yarn` all the packages
 * If you don't have yarn, you can just run `npm install`, or:
  * update your version of node, must be ">5.0.0"
  * `brew update`
  * `brew install yarn`
  * run `yarn` to install the node modules
*  Fire it up with `npm start`
