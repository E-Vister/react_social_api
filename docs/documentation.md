## /auth

### /auth/me

| Method | Description                   |
|--------|-------------------------------|
| GET    | Get auth data of current user |

### [GET] /auth/me Response

**Media type**: application/json

**Type:** object

**Properties:**

* **resultCode:** *required(integer)*

  (0 if operation completed successful, other numbers - some error occurred)

* **loginData:** *required(object)*

  if user is authenticated then data contains all this properties

    * **id:** *required(integer)*

      logged user id

    * **login:** *required(string)*

      user login

    * **name:** *required(string)*

      logged user name

    * **surname:** *required(string)*

      logged user surname

* **dialogs:** *required(array)*

  user's dialogs

  * **dialog** *required(object)*
  
    * **dialogId** *required(number)*

    * **members** *required(array)*
    
      array of dialog participants

    * **messages** *required(array)*

      array of dialog messages
    
      * **id** *required(number)*

        message id

      * **author** *required(object)*

        message author

      * **content** *required(string)*

        message content

**Example:**

```json
{
  "resultCode": 0,
  "loginData": {
    "id": 1,
    "login": "user",
    "name": "John",
    "surname": "Doe"
  },
  "dialogs": [
    {
      "dialogId": 0,
      "members": [
        {
          "id": 0,
          "name": "John",
          "surname": "Doe",
          "avatar": "https://someurl.com/avatar.png"
        },
        {
          "id": 1,
          "name": "Bob",
          "surname": "Smith",
          "avatar": "https://someurl.com/avatar.png"
        }
      ],
      "messages": [
        {
          "id": 0,
          "author": {
            "id": 0,
            "name": "John",
            "surname": "Doe",
            "avatar": "https://someurl.com/avatar.png"
          },
          "content": "Hey"
        },
        {
          "id": 1,
          "author": {
            "id": 1,
            "name": "Bob",
            "surname": "Smith",
            "avatar": "https://someurl.com/avatar.png"
          },
          "content": "Hello"
        }
      ]
    }
  ]
}
 ```

***

### /auth/login

| Method | Description              |
|--------|--------------------------|
| POST   | Authorize on the service |
| DELETE | Logout on the service    |

### [POST] /auth/login Request

**Media type**: application/json

**Type:** object

**Properties:**

* **login:** *required(string)*

  valid user login

**Example:**

```json
{
  "login": "user"
}
 ```

### [POST] /auth/login Response

**Media type**: application/json

**Type:** object

**Properties:**

* **resultCode:** *required(integer)*

  (0 if operation completed successful, other numbers - some error occurred)

* **message:** *(array or string)*

  is empty if resultCode is 0, contains error messages if resultCode is different from 0

* **data:** *required(object)*

  if user is authenticated then data contains all this properties

    * **id:** *required(integer)*

      logged user id

    * **login:** *required(string)*

      user login

    * **name:** *required(string)*

      logged user name

    * **surname:** *required(string)*

      logged user surname

**Example:**

```json
{
  "resultCode": 0,
  "loginData": {
    "id": 1,
    "login": "user",
    "name": "John",
    "surname": "Doe"
  }
}
 ```

### [DELETE] /auth/login Response

**Media type**: application/json

**Type:** object

**Properties:**

* **resultCode:** *required(integer)*

  (0 if operation completed successful, other numbers - some error occurred)

* **message:** *(array or string)*

  is empty if resultCode is 0, contains error messages if resultCode is different from 0

**Example:**

```json
{
  "resultCode": 0,
  "message": "OK"
}
 ```

## /follow

### /follow/{userId}

| Method | Description                                 |
|--------|---------------------------------------------|
| GET    | Is current user follower for requested user |
| POST   | Follow requested user                       |
| DELETE | Unfollow requested user                     |

### [GET] /follow/{userId} Request

URI Parameters

* **userId:** *required(integer)*

### [GET] /follow/{userId} Response

**Media type**: application/json

**Type:** boolean

**Example:**

```json
true
```

### [POST] /follow/{userId} Request

URI Parameters

* **userId:** *required(integer)*

### [POST] /follow/{userId} Response

**Media type**: application/json

**Type:** object

**Properties:**

* **resultCode:** *required(integer)*

  (0 if operation completed successful, other numbers - some error occurred)

* **followStatus:** *required(boolean)*

  Subscription status for the current user

* **message:** *(array or string)*

  is empty if resultCode is 0, contains error messages if resultCode is different from 0

**Example:**

```json
{
  "resultCode": 0,
  "followStatus": true,
  "message": "OK"
}
 ```

### [DELETE] /follow/{userId} Request

URI Parameters

* **userId:** *required(integer)*

### [DELETE] /follow/{userId} Response

**Media type**: application/json

**Type:** object

**Properties:**

* **resultCode:** *required(integer)*

  (0 if operation completed successful, other numbers - some error occurred)

* **followStatus:** *required(boolean)*

  Subscription status for the current user

* **message:** *(array or string)*

  is empty if resultCode is 0, contains error messages if resultCode is different from 0

**Example:**

```json
{
  "resultCode": 0,
  "followStatus": false,
  "message": "OK"
}
 ```

## /profile

### /profile/{userId}

| Method | Description                      |
|--------|----------------------------------|
| GET    | Returns user profile information |

### [GET] /profile/{userId} Request

URI Parameters

* **userId:** *required(integer)*

### [GET] /profile/{userId} Response

**Media type**: application/json

**Type:** object

**Properties:**

* **items:** *required(object)*

  (Contains user information)

    * **id:** *required(integer)*

    * **name:** *required(string)*

    * **surname:** *required(string)*

    * **avatar:** *required(string)*

    * **banner:** *required(string)*

    * **status:** *required(string)*

    * **location:** *required(object)*

        * **city:** *required(string)*

        * **state:** *required(string)*

        * **country:** *required(string)*

* **posts:** *required(array of objects)*

    * **id:** *required(integer)*

    * **author:** *required(object)*

        * **name:** *required(string)*

        * **surname:** *required(string)*

        * **avatar:** *required(string)*

    * **message:** *required(string)*

    * **likeCount:** *required(integer)*

**Example:**

```json
{
  "items": {
    "id": 1,
    "name": "John",
    "surname": "Doe",
    "avatar": "https://someurl.com/avatar.png",
    "banner": "https://someurl.com/banner.png",
    "status": "Some status",
    "location": {
      "city": "New York City",
      "state": "NY",
      "country": "United States"
    }
  },
  "posts": [
    {
      "id": 1,
      "author": {
        "name": "Bob",
        "surname": "Anderson",
        "avatar": "https://someurl.com/avatar.png"
      },
      "message": "Some message",
      "likeCount": 5
    },
    {
      "id": 2,
      "author": {
        "name": "Robert",
        "surname": "Smith",
        "avatar": "https://someurl.com/avatar.png"
      },
      "message": "Another some message",
      "likeCount": 0
    }
  ]
}
 ```

***

### /profile/status/{userId}

| Method | Description                           |
|--------|---------------------------------------|
| GET    | Returns text status of requested user |

### [GET] /profile/status/{userId} Request

URI Parameters

* **userId:** *required(integer)*

### [GET] /profile/status/{userId} Response

**Media type**: application/json

**Type:** object

**Properties:**

* **value:** *required(string)*

  Requested user status

**Example:**

```json
{
  "value": "Some status"
}
```

***

### /profile/status

| Method | Description                                |
|--------|--------------------------------------------|
| PUT    | Update status for current authorized user  |

### [PUT] /profile/status Request

**Media type**: application/json

**Type:** object

**Properties:**

* **status:** *required(string)*

**Example:**

```json
{
  "status": "Some new status"
}
 ```

### [PUT] /profile/status Response

**Media type**: application/json

**Type:** object

**Properties:**

* **resultCode:** *required(integer)*

  (0 if operation completed successful, other numbers - some error occurred)

* **message:** *(array or string)*

  is empty if resultCode is 0, contains error messages if resultCode is different from 0

**Example:**

```json
{
  "resultCode": 0,
  "message": "OK"
}
 ```

***

### /profile/posts

| Method | Description                            |
|--------|----------------------------------------|
| POST   | Create new post and add it on the wall |

### [POST] /profile/posts Request

**Media type**: application/json

**Type:** object

**Properties:**

* **message:** *required(string)*

  a post message

* **profileId:** *required(integer)*

  an id of user profile

**Example:**

```json
{
  "message": "Some message",
  "profileId": 1
}
 ```

### [POST] /profile/posts Response

**Media type**: application/json

**Type:** object

**Properties:**

* **resultCode:** *required(integer)*

  (0 if operation completed successful, other numbers - some error occurred)

* **message:** *(array or string)*

  is empty if resultCode is 0, contains error messages if resultCode is different from 0

* **data:** *(array of objects)*

  Contains all user's posts with the id received in the request

    * **id:** *required(integer)*

    * **author:** *required(object)*

        * **name:** *required(string)*

        * **surname:** *required(string)*

        * **avatar:** *required(string)*

    * **message:** *required(string)*

    * **likeCount:** *required(integer)*

**Example:**

```json
{
  "resultCode": 0,
  "message": "OK",
  "data": {
    "posts": [
      {
        "id": 1,
        "author": {
          "name": "Bob",
          "surname": "Anderson",
          "avatar": "https://someurl.com/avatar.png"
        },
        "message": "Some message",
        "likeCount": 5
      }
    ]
  }
}
 ```

## /users

### /users

| Method | Description                        |
|--------|------------------------------------|
| GET    | Returns all users splitted by page |

### [GET] /users Request

Query Parameters

* **count:** *(integer - default: 2 - maximum: 50)*
  page size (how many items will be returned in response)
* **page:** *(integer - default: 1)*
  number of portion of items

**Example:**

```json
{
  "page": 2,
  "count": 2
}
 ```

### [GET] /users Response

**Media type**: application/json

**Type:** object

**Properties:**

* **items:** *required(array of users)*

  (Contains users information)

    * **id:** *required(integer)*

    * **name:** *required(string)*

    * **surname:** *required(string)*

    * **avatar:** *required(string)*

    * **status:** *required(string)*

    * **location:** *required(object)*

        * **city:** *required(string)*

        * **state:** *required(string)*

        * **country:** *required(string)*

    * **isFollowed:** *required(boolean)*

      Is current authorized user following returned user. If current user is anonymous then value always will be
      false

* **totalCount:** *required(integer)*

  total amount of registered users matching criteria

**Example:**

```json
{
  "items": [
    {
      "id": 0,
      "name": "John",
      "surname": "Doe",
      "avatar": "https://someurl.com/avatar.png",
      "status": "Some status",
      "location": {
        "city": "New York City",
        "state": "NY",
        "country": "United States"
      },
      "isFollowed": "false"
    },
    {
      "id": 1,
      "name": "Bob",
      "surname": "Anderson",
      "avatar": "https://someurl.com/avatar.png",
      "status": "Some status",
      "location": {
        "city": "Dallas",
        "state": "TX",
        "country": "United States"
      },
      "isFollowed": "true"
    }
  ],
  "totalCount": 17
}
 ```
