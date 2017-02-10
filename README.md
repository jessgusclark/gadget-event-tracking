[![Build Status](https://travis-ci.org/jessgusclark/gadget-event-tracking.svg?branch=master)](https://travis-ci.org/jessgusclark/gadget-event-tracking)

An OUCampus gadget that allows content authors to insert a link with a Google event attached to it. 

## Gadget Preview
![Preview of the Event Tracking Gadget](https://jessgusclark.github.io/gadget-event-tracking/build/img/preview.jpg)

## Google Code:

The final code that is inserted into the page looks like this:

```
<a href="http://www.google.com" onclick="ga('send', {hitType: 'event',
                                                      eventCategory: 'link',
                                                      eventAction: 'click',
                                                      eventLabel: 'google'
                                                     });">Google!</a>
```

Code is based off of analytics.js tracking. [More information on Google's Event Tracking here](https://developers.google.com/analytics/devguides/collection/analyticsjs/events). If you are running an older version of Google Analytics, this gadget will not work.

## Test the link

To test if the Google event fires, publish out the page and click on the link. Next in Google Analytics, navigate to the “Real-Time”/”Events” and see if the Event Category and Action happened. 

## Install

### Install via GitHub pages

Uisng [OmniUpdate's Instructions](http://support.omniupdate.com/oucampus10/setup/gadgets/new-gadget.html), when asked for the URL please use: https://jessgusclark.github.io/gadget-event-tracking/build/

### Clone the repo and host locally

Make sure [npm](https://www.npmjs.com/), [Bower](http://bower.io/), and [Gulp](http://gulpjs.com/) are installed on your machine.

```
npm install

bower install

gulp build
```

## Contributing

Yes! Fork and put in a pull request. Report issues in the issues tab.
