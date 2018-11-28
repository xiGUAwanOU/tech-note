# Dependency Injection between Services
Once the application gets bigger, it is not rare to call one service in another service. One can make the depended service as singleton, and apply some magic in the unit test to replace the singleton dependency. Or, we can use the Angular dependency injection magic.

It is very easy to achieve this. Just provide the depended service in `root` scope.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptographyService {
  // ... ...
}
```

In the service that depends on other serivces, we declare the dependencies in the constructor.

```typescript
@Injectable()
export class SomeService {
  constructor(private cryptographyService: CryptographyService) { }
  // ... ...
}
```

And inject the top-level service in the component.

```typescript
@Component({
  // ... ...
  providers: [ SomeService ]
})
export class AppComponent {
  constructor(private someService: SomeService) { }  
}
```

Note that, provide dependency in `root` scope will make it a singleton. For reasons and details read the [official guide of Angular DI](https://angular.io/guide/dependency-injection).
