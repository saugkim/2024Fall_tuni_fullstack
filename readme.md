```
git@course-gitlab.tuni.fi:intro-2-full-stack-fall2024/mkyuki.git
```

intro-2-full-stack-fall2024

```
git clone git@course-gitlab.tuni.fi:intro-2-full-stack-fall2024/mkyuki.git intro-2-full-stack-fall2024

git pull course-upstream main

git pull

git push

```

```
# installs fnm (Fast Node Manager)
winget install Schniz.fnm
# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression
# download and install Node.js
fnm use --install-if-missing 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.18.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```
**course materials**

https://65dd992612ff519bb404b248--unique-rolypoly-e01631.netlify.app/a_html_and_dom/

<br>

**online file validator**

https://validator.w3.org/nu/#file

<br>


https://65dd992612ff519bb404b248--unique-rolypoly-e01631.netlify.app/a_html_and_dom/#hands-on-semantic-tags-validation-and-the-dom-tree


https://yanwei-liu.medium.com/using-web-browser-on-ubuntu-server-8076e1634967

open website with NO-GUI Server

```
sudo apt-get install w3m
w3m -v http://www.google.com
```



**05 Cookies ex5 express**

```
curl localhost:3000/
curl localhost:3000/about
curl localhost:3000/contact
curl localhost:3000/user/username?age=18
curl localhost:3000/user/username
```


link 

HY   
https://fullstackopen.com/en/part9/typing_an_express_app#let-there-be-code 

Aalto   
https://fitech101.aalto.fi/courses/web-software-development/part-2/3-first-web-applications-with-deno
