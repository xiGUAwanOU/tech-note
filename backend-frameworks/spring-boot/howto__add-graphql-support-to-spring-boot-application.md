# Add GraphQL Support to Spring Boot Application
## 1. GraphQL Dependency
Add the following dependency:
```gradle
compile("com.graphql-java-kickstart:graphql-spring-boot-starter:${graphqlSpringBootStarterVersion}")
```
Don't mess up with the group ID, it is not `com.graphql-java`.

## 2. Configure GraphQL Library
Put following content into the application profile file:
```yaml
graphql:
  servlet:
    mapping: /api/graphql
    enabled: true
    corsEnabled: true
```

## 3. Prepare GraphQL Schema
Anything with suffix `.graphqls` will be treat as GraphQL schema. Put following content to the `src/main/resources/example.graphqls` file:
```graphql
type Query {
    message: String
}
```

## 4. Prepare Data Resolver
Resolver provides data for GraphQL:
```java
import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import org.springframework.stereotype.Component;

@Component
public class QueryResolver implements GraphQLQueryResolver {
    public String message() {
        return "Hello world!";
    }
}
```

## 5. Query Data
Run command:
```console
curl -X POST \
  http://localhost:9000/api/graphql \
  -H 'Cache-Control: no-cache' \
  -H 'content-type: multipart/form-data' \
  -F 'query={message}'
```
