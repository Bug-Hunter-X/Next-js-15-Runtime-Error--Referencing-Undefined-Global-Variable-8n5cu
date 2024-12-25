```javascript
// pages/about.js

export default function About() {
  //Solution 1: Declare the variable locally
  const someLocalVar = "defined locally";
  console.log(someLocalVar); 

  //Solution 2: Remove the reference if not needed
  //console.log(someGlobalVar);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```