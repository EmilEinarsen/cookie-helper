# What is this?

An object containing four methods for managing cookies. The main methods set and get. And the secondary methods check and destroy.


## Install
Use npm to install bjork_cookies or copy the code manualy form [github]:https://github.com/EmilEinarsen/bjork_cookie.

```bash
> npm i bjork_cookies
```

## Usage
```js
> const cookie = require('bjork_cookies')
>
> cookie.set(key, value, opions?)
> cookie.get(key, initalValue)
> cookie.destroy(key)
> cookie.check(key)
```
### Set
Packages and sets a cookie according to params. Takes three parameters, _key_ (string), _value_ (\*) and _options_ (object).

> **Options**
> * _days_ (number):
Expiration date of the cookie **in days** (@default 7) 
> * _path_ (string):
Indicates a URL path. (@default '/')

### Get
Fetches cookie by key and extracts value.
Takes two parameters, _key_ (string) and _initalValue_. Returns value | _initalValue_.

### Check
Checks if a cookie by the given key exists. Takes one param, _key_. Returns _Boolean_. 
Utilizes _get_.

### Destroy
Destroys a cookie by overwriting it. Takes one param, _key_.
Utilizes _set_ and a expiration date of yesterday.

## Contribution
Pull requests are welcome. For any considerable changes, please open an issue first to discuss what you would like to change.<br>
<br>
Please make sure to update the tests as appropriate.

## Licence
[MIT](https://github.com/EmilEinarsen/bjork_restrain/blob/master/LICENSE)
