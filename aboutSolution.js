```javascript
// pages/aboutSolution.js
import { useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
```