---
layout: post
title:  Laravel, Font Awesome and Elixir (Mix)!
excerpt: "Setting up Font Awesome with Laravel and Elixer (AKA Mix)"
date:   2017-02-18 15:07:19
categories: [tutorial]
tags: [code, highlighting]
comments: true
---

###  Importing Font Awesome to your Laravel Project
Setting up Font Awesome with Laravel and Elixer (AKA Mix) `(In 3.5 easy steps)`

### 1) Pull in Font-Awesome through NPM


### 2) Add css imports in your app.scss to import to your app.css file.


### 3) Update your gulp.js file, copying the node_modules/font-awesome files to a fonts directory created in your public folder
### WITH LARAVEL ELIXIR:


### WITH LARAVEL MIX:


### 3.5) That's almost it. In my case I've had to update variables.scss in the node_modules/font-awesome/scss" directory.
Change / make sure the line says:

and make sure the other variable of the same name ($fa-font-path) a few lines below is commented out.