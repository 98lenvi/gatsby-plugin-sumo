# gatsby-plugin-sumo

Provides support for [Sumo](https://sumo.com/).

## Install

```
yarn add gatsby-plugin-sumo react-helmet
```

## How to use

Just add the plugin to the plugins array in your `gatsby-config.js`, along with the Sumo Site ID

```javascript
  plugins: [
    {
      resolve : `gatsby-plugin-sumo`,
      options : {
        sumoSiteId : `61bf159c0d6eac4a9ca7XXXXXa244c564b4edfd2d6aaaed5a819b2310dXXXXXX` //Sumo Site ID
      }
    }
  ]
```
Your Site ID will be present in the Sumo dashboard 

![Sumo Dashboard depicting Site ID](https://raw.githubusercontent.com/98lenvi/gatsby-plugin-sumo/main/images/siteID.jpg)
