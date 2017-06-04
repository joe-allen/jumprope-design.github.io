---
layout: post
title:  Develop Locally, Deploy Mindlessly
excerpt: "Homestead + Laravel getting started locally."
date:   2017-01-18 19:47:19
categories: [tutorial]
tags: [code, laravel]
comments: true
---

#  Introduction
Maybe you are in the same situation I am where you
are in need of testing or building an app or dynamic
website and you have little to no Internet access. Rest
assured, the folks at Laravel have wrapped up some very useful
software (Vagrant and Virtualbox) in a WRAPPER they call Homestead.

Homestead is prepackaged with all the software you will need
to run the latest version of Laravel. With this, you will be
able to serve you site locally and without Internet (similar
to XAMPP if you are familiar with this technology).

---

## Let's Get Started

__Keep in mind:__

*These a things to remember when working with Homestead.  This is not a tutorial on how to install or get started. For a list of helpful links on these topics see the references at the bottom for the post.*

When working with multiple sites you will need to alter the homestead.yaml file (`pico ~/.homestead/homestead.yaml`). Here you will be able to add the paths to your sites.

```
sites:
- map: test1.app
  to: /home/vagrant/Code/test1.app/public

- map: test2.app
  to: /home/vagrant/Code/test2.app/public
```

__Keep in mind:__
- Every time you change something in ~/.homestead/homestead.yaml go to ~/Homestead and run `vagrant up --provision`.
- Then remember to update your hosts file (on mac it can be found at: /private/etc/hosts) with your Homestead IP at route it to your app like:
`192.164.12.06 test1.app`

---

Now, in order to see your site in the browser you will need to initiate Vagrant. In you ~/Homestead directory run:
`vagrant up` to start your local server

I should probably do this more often, but to stop your local server run:
`vagrant halt` start stop your local server

Similar to normal server you can ssh into, you will need to ssh into your Vagrant server to clone Laravel or interact with the server.

- It is from here where you will want to download the latest install of Laravel by running: `composer create-project --prefer-dist laravel/laravel test3.app`.

If you install Laravel outside of your Vagrant instantiation (using your computers version of PHP) then you will not get the latest version of Laravel as your computer is probably running a later version of PHP needed for the Laravel ^5.3).
- Run `vagrant ssh` to ssh into your server.

When you are in your Virtualbox (ssh) and want to see the file structure / permissions run:
- `ll`

#### REMEMBER
- One last thing to remember: If you're on a Mac update the bottom of your hosts file (sudo /etc/hosts) to point to your new app (`192.168.10.10 test1.app`)

#### LASTLY
Having this ability to work offline and not push changes, wait, refresh in order to view updates is a miracle. Good luck and have fun!


#### REFERENCES
Links to help you install / getting started

<a href="http://www.youtube.com/watch?feature=player_embedded&v=NcIPANwBghU" target="_blank"><img src="http://img.youtube.com/vi/NcIPANwBghU/0.jpg" alt="gettingstarted.tv - Getting Started With Laravel Homestead" width="240" height="180" border="10" /></a>
(GettingStarted.tv)

[Laravel - Homestead](https://laravel.com/docs/5.4/homestead)