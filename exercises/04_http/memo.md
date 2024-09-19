**ex2 Create Server**  
```
curl localhost:3000
```

**ex3 Request Headers**  
```
curl localhost:3000

```

**ex4 Echo server**  
```
 curl --location --request POST 'localhost:3000' \
      --header 'Content-Type: text/plain' \
      --data-raw 'All together now!'

```

**ex5 ContentType**  
```
curl -H "Accept: application/json" localhost:3000

```

**ex6 Routing**  
```
curl localhost:3000/
curl localhost:3000/classical
curl localhost:3000/dystopy
curl localhost:3000/somethingelse

```

**ex7 API testing**

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

