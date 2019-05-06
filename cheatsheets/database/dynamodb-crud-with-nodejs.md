keywords dynamodb, node, nodejs, javascript, basic, query, queries, survival, search, find, get, insert, upsert, add, delete, remove, update, modify
labels dynamodb, nodejs, javascript

# DynamoDB: CRUD with node.js

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
dynamoDb.createTable({
  TableName: 'Reviews',
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
}, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```

## 2. Insert an Item

```javascript
const docClient = new aws.DynamoDB.DocumentClient()

docClient.put({
  TableName: 'Reviews',
  Item: {
    'id': '00000000-0000-0000-000000000000',
    'content': 'dummy content',
    'datetime': new Date(),
    'issues': [
      'communication'
    ]
  }
}, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```

## 3. Query an Item

```javascript
const docClient = new aws.DynamoDB.DocumentClient()

docClient.query({
    TableName : "Reviews",
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames: {
      '#id': 'id'
    },
    ExpressionAttributeValues: {
        ':id': '00000000-0000-0000-000000000000'
    }
}, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```

## 4. Scan for Items

```javascript
const docClient = new aws.DynamoDB.DocumentClient()

docClient.scan({
  TableName: 'Reviews',
  FilterExpression: '#datetime between :startTime and :endTime',
  ExpressionAttributeNames: {
    '#datetime': 'datetime',
  },
  ExpressionAttributeValues: {
    ':startTime': '2019-01-01T00:00:00Z',
    ':endTime': '2019-12-31T23:59:59Z'
  }
}, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```

## 5. Update an Item

```javascript
const docClient = new aws.DynamoDB.DocumentClient()

docClient.update({
  TableName: 'Reviews',
  Key: {
    'id': id,
  },
  UpdateExpression: 'set #datetime=:datetime',
  ExpressionAttributeNames: {
    '#datetime': 'datetime'
  },
  ExpressionAttributeValues:{
    ':datetime': '2019-05-06T00:00:00Z'
  },
  ReturnValues:"UPDATED_NEW"
}, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```

## 6. Delete an Item

```javascript
const docClient = new aws.DynamoDB.DocumentClient()

docClient.delete({
  TableName: 'Review',
  Key:{
    'id': id
  }
}, (err, data) => {
  if (err) console.log(err)
  else console.log(data)
})
```
