keywords elasticsearch, basic, query, queries, survival, search, find, get, insert, upsert, add, delete, remove, update, modify
labels elasticsearch, database

# ElasticSearch: Basic Queries
## 1. Insert a Document
Simplest version:
```text
PUT <INDEX>/<DOC_TYPE>/<ID>
{
  "key": "value"
}
```

Generate ID automatically:
```text
POST <INDEX>/<DOC_TYPE>/
{
  "key": "value"
}
```


## 2. Update a Document
Simplest version:
```text
POST <INDEX>/<DOC_TYPE>/<ID>/_update
{
  "doc": {
    "key": "value"
  }
}
```


Upsert:
```text
POST <INDEX>/<DOC_TYPE>/<ID>/_update
{
  "doc": {
    "key" : "value"
  },
  "doc_as_upsert" : true
}
```

## 3. Fetch & Search Documents
Simplest fetch:
```text
GET <INDEX>/<DOC_TYPE>/<ID>
```

Simplest search:
```text
POST <INDEX>/<DOC_TYPE>/_search
{
  "query": {
    "term": { "key": "value" }
  },
  "_source": {
    "include": [ "key1", "key2.*" ],
    "exclude": [ "*.key3" ],
  },
  "from": 0,
  "size": 10
}
```



Full text search:
```text
POST <INDEX>/<DOC_TYPE>/_search
{
  "query": {
    "match": { "key": "full text" }
  }
}
```

More examples can be found in the [official document](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html).

## 4. Delete a Document
Simplest version:
```text
DELETE <INDEX>/<DOC_TYPE>/<ID>
```
