# Your Holidays


## Docker to run database

``$ docker run -p 3337:27017 --name holidays_db -v $(pwd)/data/db:/data/db -d mongo``
``$ docker run -d -p 3000:3000 --name holidays_db_admin --link holidays_db:db -e MONGO_URL=db --volumes-from holidays_db mongoclient/mongoclient``


## Installing packages
``
$ npm install
``

## Starting develop mode
``
$ npm run dev
``
