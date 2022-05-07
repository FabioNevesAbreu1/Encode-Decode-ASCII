# Encode-Decode-ASCII

## Install Packages

    npm install

## Run App 

    npm run dev

## Run the tests

    npm run test

# Routes

`POST /encode`

## Request

    POST /encode HTTP/1.1
    Host: localhost:8090
    Content-Type: application/javascript
    Content-Length: 26

    {
        "text": "Encode"
    }

### Response

    {"encrypted":"1010011119910186"}

`POST /decode`

## Request


    POST /decode HTTP/1.1
    Host: localhost:8090
    Content-Type: application/json
    Content-Length: 36

    {
        "text": "1010011119910186"
    }

### Response

    {"decrypted":"Decode"}