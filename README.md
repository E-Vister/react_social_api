<h1 align="center">
  React Social API
</h1>

<p align="center">
  <a href="#what-is-it">What is it?</a>
  •
  <a href="#the-latest-version">Latest Version</a>
  •
  <a href="#functionality-that-is-presented">Functionality</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#contacts">Contacts</a>  
  •
  <a href="#documentation">Documentation</a>
</p>

What is it?
-----------
[react_social_api](https://github.com/E-Vister/react_social_api) is a REST API server
for [react_social](https://github.com/E-Vister/react_social) app. It provides many endpoints for effective work
with the web apps.

Technologies that have been used:

* Express
* Cookies
* Body-parser
* Nodemon

The Latest Version
------------------
Information about the latest version can be found on the commits page of the current project.

Functionality that is presented
-------------------------------

* CRUD operations
* Pagination
* Validation

Installation
-----------
- Open the terminal and run the following commands

```
git clone https://github.com/E-Vister/react_social_api.git
cd react_social_api
npm install
```

- Wait for all the dependencies to be installed
- Type `npm run start` to start the bot

Contacts
--------
If you want to contact the author, please send an e-mail via visterovegor@gmail.com

Documentation
-------------
All available endpoints is provided below. More detailed information you can find [here](docs/documentation.md).

* **[/auth](docs/documentation.md#auth)**
    * auth/me [**[GET]**](docs/documentation.md#get-authme-response)
    * auth/login [**[POST]**](docs/documentation.md#post-authlogin-request) [**[DELETE]**](docs/documentation.md#delete-authlogin-response)
* **[/follow](docs/documentation.md#follow)**
    * /follow/{userId} [**[GET]**](docs/documentation.md#get-followuserid-request) [**[POST]**](docs/documentation.md#post-followuserid-request) [**[DELETE]**](docs/documentation.md#delete-followuserid-request)
* **[/profile](docs/documentation.md#profile)**
    * /profile/{userId} [**[GET]**](docs/documentation.md#get-profileuserid-request)
    * /profile/status/{userId} [**[GET]**](docs/documentation.md#get-profilestatususerid-request)
    * /profile/status [**[PUT]**](docs/documentation.md#put-profilestatus-request)
    * /profile/posts [**[POST]**](docs/documentation.md#post-profileposts-request)
* **[/users](docs/documentation.md#users)**
    * /users [**[GET]**](docs/documentation.md#get-users-request)