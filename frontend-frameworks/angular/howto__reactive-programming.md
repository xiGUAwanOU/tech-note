# Reactive Programming
Different parts of view elements could probably show different aspects of a single data set. For example, while using the shopping website, while clicking on "add to cart", the icon in the upper right corner showing the number of itmes in the cart will also be updated.

This kind of behaviour requires separated data storage and view logics as well as its internal connection mechanism. This internal connection mechansim, can be implemented in a reactive way, which means, once the value in the data storage is changed, the view will also be changed accordingly.

Using RxJs, one can implement a reactive data storage easily.

Firstly, the source code in service:

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// ... ...

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _accounts: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  get accounts(): Observable<Account[]> {
    return this._accounts.asObservable();
  }
  
  add(account: Account) {
    this._accounts.next([...this._accounts.getValue(), account]);
  }
}
```

To listen to the change of the accounts, we just need to keep a reference of the Observable in the component.

```typescript
// ... ...
export class AppComponent implements OnInit {
  accounts: Observable<Account[]>;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
```

To bind it to the view template, do this.

```html
<li *ngFor="let account of accounts | async>{{ ... }}</li>
```

The key is `async`, add this for observable fields.
