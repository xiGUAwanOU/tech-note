keywords dynamodb, node, nodejs, javascript, basic, query, queries, survival, search, find, get, insert, upsert, add, delete, remove, update, modify
labels dynamodb, nodejs, javascript

# DynamoDb: CRUD with node.js

Short words for how to run DynamoDB docker version in the local machine. Just type following commands:

```console
$ docker pull amazon/dynamodb-local
$ docker run -p 8000:8000 amazon/dynamodb-local
```

And another thing to do before we can access DynamoDB with JavaScript is install the AWS SDK:

```console
$ npm install aws-sdk
```

And in the application code, using following JavaScript to import AWS thingy:

```javascript
const aws = require('aws-sdk')
```

## 0. Connecting to DynamoDB

```javascript
const aws = require('aws-sdk')

aws.config.update({
  region: 'eu-central-1',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'noKeyId',
  secretAccessKey: 'noSecretAccessKey'
})

const dynamoDb = new aws.DynamoDB()

dynamoDb.listTables({}, (err, data) => {
  if (err) console.log(err, err.stack)
  else console.log(data)
})
```

## 1. Create a Table

```javascript
const createTableParams = {
  TableName: 'Issues',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
}

dynamoDb.createTable(createTableParams, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```

## 2. Insert an Item

```javascript
const docClient = new aws.DynamoDB.DocumentClient()

const putItemParams = {
  TableName: 'Issues',
  Item: {
    'id': '00000000-0000-0000-000000000000',
    'content': 'dummy content',
    'datetime': new Date(),
    'issues': [
      'communication'
    ]
  }
}
docClient.put(putItemParams, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```
