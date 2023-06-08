## common example

---

```typescript
function commonExamples(n: number) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}
```

Before I start with number 1 in first question, with all due respect, I think the answear
for the common example is wrong. the right answear for above snippet is **O(N)**. the reason
is simple, so here we can see below that the for-loop condition is `i < n`

```typescript
  for (var i = 0; i < n; i++)
```

quote on first question explanation _"In Big-O notation, n represents the number
of inputs"_, therefore time complexities for snippet above is **O(N)**. _"An example
of an O(1) algorithm is accessing an item in the array by its index"_ is right, but
the right example for this explanation is below:

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
```
