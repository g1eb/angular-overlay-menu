# Overlay menu UI element

This directive is designed to provide a general purpose overlay menu. 

Floating menu can be used for both flat and nested navigation structures.

Desgined to be as simple as possible in order to afford intuitive interactions.

Converted into an angular directive for your convenience :)

## Demo
Click <a href="https://rawgit.com/g1eb/angular-overlay-menu/master/" target="_blank">here</a> for a live demo.

## Installation

1) Install 'angular-overlay-menu' with bower

```
bower install angular-overlay-menu
```

2) Add 'g1b.overlay-menu' module to your app config


```javascript
angular.module('myApp', [
  'g1b.overlay-menu',
  ......
])
```

3) Use directive in your view

```html
<overlay-menu items="menu" on-select="print(item)"></overlay-menu>
```

4) Interact with the menu

You can bring up the menu using `<Esc>` button or by press and hold anywhere on the page.

### Attributes

|Property        | Usage           | Default  | Required |
|:------------- |:-------------|:-----:|:-----:|
| items | Array of arrays with menu items (for nested navigation) | none | no |
| on-select | Handler function that is fired when user clicks on one of the items | none | no |

## Dependencies

* [AngularJS](https://angularjs.org/)
