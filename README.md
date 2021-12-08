# CSS Helpers

[![npm version](http://img.shields.io/npm/v/elr-scss-helpers.svg)](https://www.npmjs.org/package/elr-scss-helpers)
[![Build Status](https://github.com/elr-scss-helpers/workflows/CI/badge.svg)](https://github.com/elr-scss-helpers/actions?workflow=CI)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-helpers.svg?style=flat)](https://npmjs.com/package/elr-scss-helpers)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d768ae3-693a-40d5-b5e1-d5a53aa76bb5/deploy-status)](https://app.netlify.com/sites/elr-scss-helpers/deploys)
[![last commit](https://img.shields.io/github/last-commit/Beth3346/elr-scss-helpers.svg)](https://github.com/Beth3346/elr-scss-helpers)

a library of sass mixins

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install elr-scss-helpers
```

or

```sh
yarn add elr-scss-helpers
```

## Why

This package takes a more functional CSS approach to Scss. Using a
Scss mixin allows for easy configuration of your base styles to
ensure that your helpers will match the look and feel of your
project.

Which style you choose can depend a lot on your project and your
needs. A functional CSS approach is beneficial in situations where
you have a lot of control over your HTML/JSX/Pug... whatever you're
using to write markup that eventually becomes HTML. Especially if
you are using a component based framework.

Keep in mind that adding non-semantic classes to your HTML will
result in tightly coupled markup. If your product manager tells you
that now all headlines should be green instead of blue using style
classes could make these updates tedious and time consuming. Its for
this reason that I will not include classes that apply hard coded
color styles.

Using a more stylesheet based approach is useful when you don't
necessarily have control over your HTML. Like when you're working
with a CMS where HTML structure is set in stone or dictated by your
content team.

Its also beneficial to use a more stylesheet based approach when you
are creating traditional HTML/CSS based applications without a
framework. If you are not creating reusable components you likely
have a lot of HTML that repeats throughout your site. Using a
stylesheet based approach with a BEM or similar CSS methodology will
be much easier to maintain down the road.

I usually find myself using more of a hybrid of these 2 approaches.
Though I'm leaning towards a more functional approach these days in
my React and Vue applications.

## Whats with this "elr" prefix?

I have added namespacing to avoid clashes with other frameworks. If
you don't like the 'elr' prefix or want to use a brand prefix you are free to change it. Don't make it too long though since you'll be typing it a lot.

```scss
@include elr-helper-classes(
  $config: (
    prefix: "abc",
  )
);
```

```html
<button class="abc-button">Button</button>
```

## Helper Classes

These classes allow for common styles.

### Initialize Helpers

#### Parameters:

- link-color
  - used for styling link elements
- color
  - used for styling text
- border-radius
  - used to style buttons
- accent-color
- button-color
  - used to style default buttons

```scss
@import "~elr-scss-helpers";

@include elr-helper-classes(
  $config: (
    link-color: blue,
    color: white,
    border-radius: 3px,
    accent-color: green,
    button-color: blue,
  )
);
```

### Buttons

if you only want to add button helpers

```scss
@import "~elr-scss-helpers";
@include elr-button-classes(
  $config: (
    background-color: blue,
    border-radius: 3px,
    width: 250px,
    color: white,
  )
);
```

```html
<button class="elr-button">Button</button>
```

```html
<button class="elr-button-small">Button</button>
```

```html
<button class="elr-button-primary">Button</button>
```

```html
<button class="elr-button-pill">Button</button>
```

```html
<button class="elr-button-ghost">Button</button>
```

```html
<button class="elr-button elr-button-icon">
  <div class="elr-icon">
    <i class="fas fa-arrow-alt-circle-down"></i>
  </div>
  <span class="elr-button-text">Download</span>
</button>
```

```html
<button class="elr-button elr-button-icon">
  <div class="elr-icon">
    <i class="fas fa-arrow-alt-circle-down"></i>
  </div>
</button>
```

```html
<button class="elr-button elr-button-icon-round">
  <div class="elr-icon">
    <i class="fas fa-cat"></i>
  </div>
</button>
```

### Button Group

```html
<div class="elr-button-group">
  <button class="elr-button elr-button-primary elr-button-group-item">
    Button 1
  </button>
  <button class="elr-button elr-button-primary elr-button-group-item">
    Button 2
  </button>
  <button class="elr-button elr-button-primary elr-button-group-item">
    Button 3
  </button>
  <button class="elr-button elr-button-primary elr-button-group-item">
    Button 4
  </button>
</div>
```

### Display

if you only want to add display classes. classes for display: flex and display: grid are included in other mixins.

```scss
@import "~elr-scss-helpers";
@include elr-display-classes;
```

```html
<span class="elr-block">Block</span>
<div class="elr-inline">Inline</div>
<span class="elr-inline-block">Inline Block</span>
<span class="elr-display-none">This will be hidden</span>
```

### Flex

if you only want to add flex classes

```scss
@import "~elr-scss-helpers";
@include elr-flex-classes;
```

### Layout

if you only want to add layout classes

```scss
@import "~elr-scss-helpers";
@include elr-layout-classes;
```

### Positioning

if you only want to add positioning classes

```scss
@import "~elr-scss-helpers";
@include elr-positioning-classes;
```

### List

if you only want to add list classes

```scss
@import "~elr-scss-helpers";
@include elr-list-classes;
```

### Responsive

if you only want to add responsive classes

```scss
@import "~elr-scss-helpers";
@include elr-responsive-classes;
```

### Typography

if you only want to add typography classes

```scss
@import "~elr-scss-helpers";
@include elr-typography-classes;
```

### Background

if you only want to add background classes

```scss
@import "~elr-scss-helpers";
@include elr-background-classes;
```

## Action Helper Classes

These helper classes are more suited to interactive applications that need to provide a lot of feedback to
viewers.

## License

SEE LICENSE IN LICENSE.md
