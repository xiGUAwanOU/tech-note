# An Issue Caused by Race Condition

```javascript
loadData(offset = 0) {
  if (offset === 0) {
    this.infiniteScrollingResults = []
  }
  this.fetchData(offset, ITEMS_PER_PAGE).then(result => {
    this.infiniteScrollingResults = this.infiniteScrollingResults.concat(result)
  })
}
```

If there are two calls of this method one after another, there will be race conditions, thus make the data duplicated in the `this.infiniteScrollingResults`. Details are explained below:
1. The first call will set `this.infiniteScrollingResults` to `[]` because offset is 0, and then reach the `fetchData` call and return;
2. since there isn't any content yet in the results, so the offset is still 0;
3. the second call will also set `this.infiniteScrollingResults` to `[]` because offset is still 0, and then reach the `fetchData` call and return;
4. the first promise get resolved, and append all the results to the empty list;
5. the second promise get resolved, and append all the results once again to the list (which is not empty anymore because of the first resolved promise).
6. the data is duplicated in the `this.infiniteScrollingResults`.

To avoid this, I've changed this method to:

```javascript
loadData(offset = 0) {
  this.fetchData(offset, ITEMS_PER_PAGE).then(result => {
    this.infiniteScrollingResults = offset === 0 ? result : this.infiniteScrollingResults.concat(result)
  })
}
```

In this case, if the offset is 0, we will always replace the content in the list.

This could only be a hotfix. It would be better to look into this issue once again in the future, because there might be some cleverer idea after I've jumped out of the context.
