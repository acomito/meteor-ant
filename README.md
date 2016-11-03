# Base-Material-UI 
A Material-UI starting point for Meteor/React apps. (Fork of [TheMeteorChef's Base](http://themeteorchef.com/base))

| [TODO](#todo) | [COMPARISON](/COMPARISON.md) | [Examples](/README.md) |  [ORIGINAL Base Docs](http://themeteorchef.com/base) |
|---|---|---|---|


## Version

<table>
  <tbody>
      <tr>
      <th>Base-Material-UI</th>
      <td>v0.0.2</td>
    </tr>
    <tr>
      <th>Base Version</th>
      <td>v4.5.0</td>
    </tr>
    <tr>
      <th>Meteor Version</th>
      <td>v1.3.5.1</td>
    </tr>
  </tbody>
</table>

## Getting Started

Same as the regular base project. See https://themeteorchef.com/base/getting-started/

## Changes from ORIGINAL Base - Overall

* added material-ui with `meteor npm install material-ui`
* added `formsy-react` and `formsy-react-material-ui`
* added `react-tap-event-plugin` with `meteor npm install --save react-tap-event-plugin`
* uses formsy instead of jquery and jquery validation

## Where's the code?

If you haven't seen Meteor 1.3's recommended application structure yet you may be wondering where the actual code is.

Most of the app is in the `imports` folder. The UI is found in `imports/ui`. The API (methods, publications, schemas) can be found in `imports/api`

## Other Stuff
* [How to Do a FAB in the corner] (http://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float)
* [AirBnB Style Guide for React] (https://github.com/airbnb/javascript/tree/master/react)
* [MaterialUp curates the best of Material Design, daily.] (http://www.materialup.com/)
* [Material Palette] (https://www.materialpalette.com/) 

## TODO
* where applicable, use this.context.muiTheme to reference the global theme object. [See here](http://www.material-ui.com/#/customization/themes)
* Re-add re-routing logic (login, reset, etc. etc.)
* it would be cool to tie bert-alert color schemes into the material-ui color scheme
* where it makes sense, extract inline-js css styles to the .scss files
* Keep an eye out for new version of Material-UI... errors since react updated (https://facebook.github.io/react/warnings/unknown-prop.html)
* improve documentation
* you have to click off the input field for formsy to validate and change the submit button from disabled... minor UI blemish.
* **Consider Other Versions:**
* mobx
* redux
* flux
* relay/graphql

## DONE
* ~~Other version: [react-material-ui-blog](https://github.com/acomito/base-material-ui-blog)~~
* ~~Other version: [react-material-ui-wordpress](https://github.com/acomito/react-material-ui-wordpress)~~
* ~~Add PropTypes where needed (basically, everywhere at this point.)~~
* ~~Collapsable nav and other responsive work~~
* ~~decision: combine delete-dialog and update-dialog components?~~ no
* ~~decision: flexbox grid? bootstrap grid? grid agnostic?~~ flexboxgrid
* ~~Add file for customizing the Material-UI theme~~
* ~~re-add validation for password-reset form~~
* ~~wire up the username to be in top-right corner of authenticated navbar (was getting an odd error when trying to do this so I just hardcoded "username" there for now)~~
