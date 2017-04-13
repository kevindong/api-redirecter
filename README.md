# API Redirecter

Don't you hate it when a website doesn't allow cross origin requests? Consequently, you can't use `XmlHttpRequest` in the user's browser. This aims to fix that. This is a simple Node.js app that accepts any and all requests, issues said requests on the caller's behalf, and returns the resulting data. 

# Setup

This app is meant to be run on Heroku. However there's nothing stopping you from running it on something else (in fact, it should be fairly trivial to set it up on whichever machine you want). However, I'm only going to document the Heroku way. 

To use it on Heroku: 

1. Clone this repo and push to Heroku.
2. In the `Config Variables` section, set `DOMAIN` to be whatever you want it to be (i.e. `https://www.thisisfake.com/api`).

## Domain Details

You must include the protocol (either `http` or `https`). Do not include a trailing slash (i.e. `https://www.thisisfake.com/api` is good; `https://www.thisisfake.com/api/` is bad).

# Return Values

A JSON will be returned in the following format:

* `statusCode` will be how the server responded.
* `body` will be the body of the response.
* `headers` will be the headers that the server responded with.
* `request` will be how this app sent the request. 

# Domain Restrictions

Do not use this for anything sensitive. The initial release of this app only allows the user to specify the path on a predetermined domain. Only header-less GET requests are supported. This is done partially to alleviate security concerns. 

# License

tl;dr: Apache 2.0 License. 

Copyright 2017 Kevin Dong

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.