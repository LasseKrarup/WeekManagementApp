# Week Management

## About

This project is a web app under development that aims towards becoming a management system for people living under the same roof, that require an easy to use and simple way to structurize their daily lives.

## Getting started

Clone this repository and run the server with

`npm start`

A gulpfile has been created for watching the `.scss` files in the `/src/scss/` folder. Build and watch the files by running

`gulp`

## Technologies

This app is built using [React](https://www.reactjs.org), and the state is maintained using [Redux](https://www.redux.js.org). The CSS-styling is primarily made with [Bootstrap 4](https://www.getbootstrap.com).

## Further work

Even though the client-side view part of this app is considered to be almost finished, there are many things to be implemented on this app yet. It is the intention to scale this to become a full-stack app with an [ASP.NET](https://dotnet.microsoft.com/apps/aspnet) back-end controller and a yet to be decided database model - possibly [mongoDB](https://www.mongodb.com).

Some of the future work - but not all - is listed below.

### Backend API

The entire API for database handling is yet to be implemented. It might be built using [ASP.NET](https://dotnet.microsoft.com/apps/aspnet).

### Database

The entire database part of this app is also to be implemented. What database to use has not yet been decided. It might be [mongoDB](https://mongodb.com) or it might be something completely different.

### Custom lists feature

The skeleton for custom lists is already made, and the Redux reducers and action creators have been set up.

### Delete persons feature

This feature is quickly implemented - and will be so in the near future. The need for this is just not very urgent for the time being.
