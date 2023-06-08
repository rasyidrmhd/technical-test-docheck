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

## 1

---

```typescript
function exampleFunction(n: number) {
  for (var i = 0; i < n; i * 2) {
    console.log(n);
  }
}
```

it seems a little bit tricky here if we aren't thorough. as my explanation above, the for-loop
condition is same `i < n`, but here we are for-loop afterthought/iteration `i * 2`, i think i can
say this is a _bad syntax_ and will make the snippet code an `infinite loop`. the interesting thing is there is no time complexities for `infinite loop` because it will always loop in unlimited time.
so the answear for this is, `undefined` i guess.

## 2

---

```javascript
function someFunction2(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        for (var l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}
```

now this is an interesting one, a multiple for-loops. we can do addition for each for-loop we have here.</br></br>
i for-loop</br>
this is O(N), because the for-loop condition is following the input (`i < n`)

```javascript
for (var i = 0; i < n; i++) {
```

j for-loop</br>
this is O(N), because the for-loop condition is following the input (`j < n`)

```javascript
for (var j = 0; j < n; j++) {
```

k for-loop</br>
this is O(N), because the for-loop condition is following the input (`k < n`)

```javascript
for (var k = 0; k < n; k++) {
```

l for-loop</br>
now this is O(1), as we can see for-loop condition is constant, this cause the time complexities
is O(1)

```javascript
for (var l = 0; l < 10; l++) {
```

### conclusion

O(N) \* O(N) \* O(N) \* O(1) = O(N<sup>3</sup>)
