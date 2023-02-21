# What is this?
An object containing four methods for managing cookies. The main methods set and get. And the secondary methods check and destroy.

## Install
Use npm to install bjork_cookies or copy the code manually from [github](https://github.com/EmilEinarsen/bjork_cookie).
```bash
> npm i bjork_cookie
```

## Usage
```js
const cookie = require('bjork_cookie')

cookie.set(key, value, opions?)
cookie.get(key, initalValue)
cookie.destroy(key)
cookie.check(key)
```

### Set
Format and sets the cookie according to params. 
Takes three parameters, _key_ (string), _value_ (any) and the optional _options_ (object).

> **Options**
> * _days_ (number):
Expiration date of the cookie **in days** (@default 7) 
> * _path_ (string):
Indicates a URL path. (@default '/')

### Get
Gets the cookies value by keye.
Takes two parameters, _key_ (string) and the optional _initalValue_. Returns value if defined otherwise _initalValue_.

### Check
> Info: Wrapper around _get_.
Checks if a cookie has been set by given key. 
Takes one param, _key_. Returns _Boolean_. 

### Destroy
> Info: Wrapper around _set_, setting the expiration date to yesterday.
Destroys a cookie. 
Takes one param, _key_.

## Contribution
Pull requests are welcome. For any considerable changes, please open an issue first to discuss what you would like to change.<br>

## Licence
[MIT](https://github.com/EmilEinarsen/cookie-helper/blob/master/LICENSE)
