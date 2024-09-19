**ex2**  
```
curl localhost:3000
```

**ex3**  
```
curl -H "Accept: application/json" localhost:3000

```

**ex4**  
```
 curl --location --request POST 'localhost:3000' \
      --header 'Content-Type: text/plain' \
      --data-raw 'All together now!'

```

**ex5**  
```
curl -H "Accept: application/json" localhost:3000

```

**ex6 API testing**  
```
curl localhost:3000/
curl localhost:3000/classical
curl localhost:3000/dystopy
curl localhost:3000/somethingelse

```

**ex7 auto-testing**

```
package.json
"devDependencies": {
      "chai": "^4.3.7",
      "chai-http": "^4.4.0",
      "mocha": "^10.4.0"
  }

> npm install
> npm test
```

