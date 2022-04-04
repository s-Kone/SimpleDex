# SimpleDex

# Group O2
Alex Giasson,
Saga Munkhbold,
Connie Wu,
Aidan Waterson

Install packages
```
npm install
```

Run server debug (dev) mode to enable console logging and automatic relaunch of server upon saving any file in the project
```
npm run serverstart
```
or
```
DEBUG=express-locallibrary-tutorial:* nodemon ./bin/www
```

Run server production mode
```
npm start
```
or
```
node ./bin/www
```

Local Database initialization:
- Open terminal at project/server
- `npm install`
- Install postgres
    - windows: https://www.postgresql.org/download/windows/
        - restart if prompted
    - mac: `brew install postgresql` (f yeah mac)
    - linux ubuntu: `sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources list.d/pgdg.list'`
            `wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`
            `sudo apt-get update`
            `sudo apt-get -y install postgresql-14`

- Back to terminal
- `psql postgres`
- you should now be in the postgres command line
- `CREATE ROLE pokemon WITH LOGIN PASSWORD 'pokemon123';` // creating user for the config specified in /modules/pool.js
- `ALTER ROLE pokemon CREATEDB;`
- `\q` // exit
- `psql -d postgres -U pokemon` // log back in with new user
- `CREATE DATABASE pokemon;`
- now go to /sql/init_db.sql and copy paste execute each individual CREATE TABLE query terminated by a semi-colon
    - paste them each individually into the psql cli
    - if you put them in together, only up to the first semi-colon will be read
- go to /sql/static_data.sql and copy paste execute each query there individually
- use `DROP TABLE tablename;` if you mess up
- relax, it's only been like 8 queries
- `\q` // you're done

JWT basics:
- all endpoints besides /users/login and /users/register are now protected by JWT authorization
- this means the server expects to see a valid JWT included in the cookies of the request
- a client user will obtain a valid JWT into their cookies by logging in at /users/login
- there are example POST/GET requests contained in the postman collection file in the /server and in the /server/requests.rust
    - to use request.rust, install VScode extension `REST CLIENT` and click the button above each request in requests.rest to send it to the server. requests must be separated by '###'
    - to get a cookie, you'll need something with local storage enabled, which the rest client doesn't as far as i can tell. try postman. 
    