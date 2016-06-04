---
title: Blog
---

## Leading our Symfony's API Behat tests to be more readable with JSON Schema

### Do you really trust your REST APIs ? 

With the rise of Micro Services and Web Client. Rest APIs have the wind aft.
Clients must be able to trust their APIs. Quality assurance shall bring this trust.

But how to keep your API well tested without doing over-engineering ?
And then get functional test suits too difficult to maintain ?

### A simple REST API: `api.github.com/users/`

We want to test it. Making sure we are receiving:
- a `200 OK` 
- a `application/json` as content type header
- the expected payload 

[http](https://github.com/jkbrzt/httpie) https://api.github.com/users/gmorel

```header
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Cache-Control: public, max-age=60, s-maxage=60
Content-Encoding: gzip
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Thu, 02 Jun 2016 20:10:13 GMT
ETag: W/"f2dd6c7c0775b322b4b34434c40b603a"
Last-Modified: Thu, 26 May 2016 09:24:41 GMT
Server: GitHub.com
Status: 200 OK
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Transfer-Encoding: chunked
Vary: Accept
Vary: Accept-Encoding
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-GitHub-Media-Type: github.v3
X-GitHub-Request-Id: 58B30E9E:B211:B519A72:575092A5
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1464901813
X-Served-By: 2811da37fbdda4367181b328b22b2499
X-XSS-Protection: 1; mode=block
```

```json
{
    "avatar_url": "https://avatars.githubusercontent.com/u/2279794?v=3", 
    "bio": null, 
    "blog": null, 
    "company": null, 
    "created_at": "2012-09-04T18:53:00Z", 
    "email": null, 
    "events_url": "https://api.github.com/users/gmorel/events{/privacy}", 
    "followers": 19, 
    "followers_url": "https://api.github.com/users/gmorel/followers", 
    "following": 13, 
    "following_url": "https://api.github.com/users/gmorel/following{/other_user}", 
    "gists_url": "https://api.github.com/users/gmorel/gists{/gist_id}", 
    "gravatar_id": "", 
    "hireable": true, 
    "html_url": "https://github.com/gmorel", 
    "id": 2279794, 
    "location": "Marseille (France)", 
    "login": "gmorel", 
    "name": "Guillaume MOREL", 
    "organizations_url": "https://api.github.com/users/gmorel/orgs", 
    "public_gists": 5, 
    "public_repos": 44, 
    "received_events_url": "https://api.github.com/users/gmorel/received_events", 
    "repos_url": "https://api.github.com/users/gmorel/repos", 
    "site_admin": false, 
    "starred_url": "https://api.github.com/users/gmorel/starred{/owner}{/repo}", 
    "subscriptions_url": "https://api.github.com/users/gmorel/subscriptions", 
    "type": "User", 
    "updated_at": "2016-05-26T09:24:41Z", 
    "url": "https://api.github.com/users/gmorel"
}
```

We could test this end point functionally via [Behat](http://docs.behat.org) and its [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin) syntax.

```gherkin
    Scenario: I get a GitHub user
        Given I'm not authenticated
        When I send a GET request to "https://api.github.com/users/gmorel"
        Then the response status code should be 200
        And the response should be in JSON
        And the JSON node "login" should be equal to "gmorel"
        And ...
        And the JSON node "location" should be equal to "France"
```

#### Testing our JSON REST API end point

Make sure it is exposing the user login.

```json
    "login": gmorel,
```


```gherkin
And the JSON node "login" should be equal to "gmorel"
```

Up to there it's pretty easy.

### What about testing a more complex end point ?

And if we wanted to test a JSON REST API listing GitHub users ?

[http](https://github.com/jkbrzt/httpie) https://api.github.com/users/rezzza/repos\?visibility=public

But we want to test the `sort` feature which can sort a repository list by
- `created`
- `updated`
- `pushed`
- `full_name`

We would have in [Be:hat](http://docs.behat.org):
- 1 Feature : `List all organization repositories from different filter`
- 5 Scenarios : `Sort by created`, `Sort by updated`, `Sort by pushed`, `Sort by full_name` and `Sort by default`

Something like this:

#### Optimistic way

![Optimistic way](/static/blog/json-schema/optimistic.png)

#### Pessimistic way

![Pessimistic way](/static/blog/json-schema/pessimistic.png)

Did you read it ? 

No ?

**No surprise !**

### Issue

We are quickly getting duplicated assertions in every feature's scenarios.
Fearing potential functional regressions. We are getting exhaustive.

However **an exhaustive test becomes rapidly unreadable**.
The [cognitive load]()https://en.wikipedia.org/wiki/Cognitive_load becoming too heavy.
Leads any developer to miss (voluntarily or not) the essence of the test.
Leading in the long run to have tests hard to maintain. Especially if several developer are working on them.
After several years, we even need to refactor our tests. In order to lead to to be more readable.
Tests are now becoming a part of the the project [technical debt](http://martinfowler.com/bliki/TechnicalDebt.html).

So we are getting Features containing several Scenarios testing the same thing. For most of them copy pasted.
Despite the fact that each scenario should only look for testing in an explicit way a small part of the payload.

Now few questions:
- Is it relevant to test everything exhaustively (this might be too [pessimistic](https://github.com/gmorel/json-schema-afsy/blob/develop/test/functional/repo_list.legacy.pessimistic.feature) ?
- Even if the code base is not unit tested enough ?
- On the contrary, is it sufficient to test only nodes allowing to check if the scenario is well implemented ? Ignoring the rest of the payload.
- What about anti regression tests between sort features (this might be too [optimistic](href="https://github.com/gmorel/json-schema-afsy/blob/develop/test/functional/repo_list.legacy.optimistic.feature)) ?
- Is it productivity/maintainability friendly to do all these copy pastes    


#### And if we could write shorter functional tests ?

So we can reduce their [cognitive load]()https://en.wikipedia.org/wiki/Cognitive_load. And highlight what really matters.
And this while remaining able to detect functional regressions.

What about replacing the pessimistic way ([985 lines]((https://github.com/gmorel/json-schema-afsy/blob/develop/test/functional/repo_list.legacy.pessimistic.feature))).
![Pessimistic way](/static/blog/json-schema/pessimistic.png)

By this:

```gherkin
Scenario: should be able to sort by full_name
    When I send a GET request to "/users/rezzza/repos?sort=full_name"
    Then the response status code should be 200
    And the response should be in JSON
    And the JSON node "" should have 3 elements
    And the JSON should be valid according to the schema "app/Resources/json-schema/payload/users/rezzza/repos.json"
    And the JSON node "[0]->full_name" should be equal to "rezzza/command-bus"
    And the JSON node "[1]->full_name" should be equal to "rezzza/command-bus-bundle"
    And the JSON node "[2]->full_name" should be equal to "rezzza/JobflowBundle"
```

[138 lines](https://github.com/gmorel/json-schema-afsy/blob/develop/test/functional/repo_list.json_schema.feature)

### JSON Schema to the rescue ?

```gherkin
And the JSON should be valid according to the schema "app/Resources/json-schema/payload/v2/repo_list.json"
```

#### JSON Schema

A [JSON Schema](http://json-schema.org">JSON Schema) describe a JSON payload format.
It can be compared to XML [DTD](https://en.wikipedia.org/wiki/Document_type_definition) or [XSD](https://en.wikipedia.org/wiki/XML_Schema_(W3C))
It's allowing to write a clear documentation readable by a human AND a machine.
Very useful to do automated tests or to validate data submitted by a client.
The format is official and has a [RFC](http://tools.ietf.org/html/draft-zyp-json-schema-04) (Draft 4 - end 2015)

[JSON Schema Core](http://json-schema.org/schema)
[JSON Schema Validation](http://json-schema.org/latest/json-schema-validation.html)
[JSON Hyper-Schema](http://json-schema.org/latest/json-schema-hypermedia.html)

#### Real example

##### Check if the payload structure is respected

```json
{
  "name": "azerty"
}
```

Making sure the `name` node is a text:

```json
    {
    "definitions": {
        "repo": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                }
            }
        }
    }
}
```

##### Check if the node value format is respected

```json
    "created_at": "2012-09-04T18:53:00Z"
```

The node must always respect the date format `Y-m-dTH:i:sZ` (ISO 8601)

```json
"created_at": {
        "$ref": "../../../definition/common.json#/definitions/date_y_m_d___h_i_s"
    },
```

With this Json Schema definition (reusable):

```json
"date_y_m_d___h_i_s": {
    "description": "Y-m-dTH:i:sZ (ISO 8601)",
    "type": "string",
    "pattern": "^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T(\\d{2}):(\\d{2}):(\\d{2})Z$"
},
```

##### Check if the node value is coherent regarding your domain

```json
    "open_issues_count": 37,
```

Node can't contain a negative value

```json
"open_issues_count": {
    "$ref": "../../../definition/common.json#/definitions/positive_integer"
},
```

With this Json Schema definition (reusable):

```json
"positive_integer": {
    "description": "Positive integer",
    "type": "integer",
    "minimum": 0,
    "exclusiveMinimum": false
}
```

#### With Symfony 2/3

Several projects are already existing among them [rest-api-behat-extension](https://github.com/rezzza/rest-api-behat-extension):

> $ composer require "rezzza/rest-api-behat-extension:~3.1"

Which is allowing us to use this Behat3 step:

```gherkin
And the JSON should be valid according to the schema "app/Resources/json-schema/payload/v2/repo_list.json"
```

That's it.

There is also the library [Behatch](https://github.com/Behatch/contexts)

> $ composer require "behatch/contexts"

#### Documentation for writing JSON Schema

- Understanding JSON Schema: http://spacetelescope.github.io/
- Online JSON Schema generator: http://jsonschema.net/#/
- Online JSON Schema validator: http://www.jsonschemavalidator.net/
- Online Json Escaper: http://www.freeformatter.com/javascript-escape.html#ad-output (Very useful for escaping `/` in regex)

#### Advantages

- Ease reading API REST JSON functional tests
- Responsible for anti-regression functional tests
- One single Json Schema to test several Features
- Reusable, a JSON Schema can be included in another
- Ensure nodes coherency between different end point exposing the same resources
- Can be used to validate data received from a client

#### Drawbacks

- Mastering JSON Schema writing suffer from a long learning curve
- Not so easy to debug
- Some subtleties [allof](http://spacetelescope.github.io/understanding-json-schema/reference/combining.html#allof)
- Don't forget to test the reciprocity. Just to make sure your schema is taking loaded. You can have surprise otherwise..

#### More

- http://crypt.codemancers.com/posts/2014-02-11-An-introduction-to-json-schema/
- https://brandur.org/elegant-apis
- http://fr.slideshare.net/aloyer/bdd-writing-better-scenario
