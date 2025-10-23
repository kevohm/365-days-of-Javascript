# 365 Days of JavaScript — Part 4 (Days 181–270)
> Master advanced JS patterns, object-oriented programming, testing, and tooling to become production-ready.

## 🎯 Month 7–9 Theme: Deep JavaScript & Development Best Practices

---

### 🗓️ DAY 181 — Closures Introduction
- **Goal:** Understand how closures capture variables.
- **Docs:** [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- **Task:** Write a function that keeps a private counter.

---

### 🗓️ DAY 182 — Lexical Scope Review
- **Goal:** Revisit scope and its relation to closures.
- **Task:** Create nested functions showing variable accessibility.

---

### 🗓️ DAY 183 — Practical Closures
- **Goal:** Use closures in real use-cases.
- **Task:** Build a `makeAdder(x)` function that returns an adder.

---

### 🗓️ DAY 184 — Immediately Invoked Function Expressions (IIFE)
- **Goal:** Learn how IIFEs create local scope.
- **Docs:** [MDN: IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- **Task:** Use IIFE to isolate variables.

---

### 🗓️ DAY 185 — The `this` Keyword
- **Goal:** Understand dynamic context in JS.
- **Docs:** [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- **Task:** Try logging `this` in different contexts.

---

### 🗓️ DAY 186 — Call, Apply, and Bind
- **Goal:** Change the context of functions.
- **Task:** Use `.bind()` to preserve context in callbacks.

---

### 🗓️ DAY 187 — Constructor Functions
- **Goal:** Build objects with constructors.
- **Task:** Create a `Car` constructor and instantiate multiple cars.

---

### 🗓️ DAY 188 — Prototypes
- **Goal:** Learn prototype inheritance.
- **Docs:** [MDN: Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- **Task:** Add shared methods to `Car.prototype`.

---

### 🗓️ DAY 189 — Classes (ES6)
- **Goal:** Write class-based objects.
- **Docs:** [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- **Task:** Create a `User` class with methods like `login()` and `logout()`.

---

### 🗓️ DAY 190 — Class Inheritance
- **Goal:** Extend classes using `extends` and `super`.
- **Task:** Create `Admin` class extending `User`.

---

### 🗓️ DAY 191 — Static Methods
- **Goal:** Understand methods tied to the class itself.
- **Task:** Add `User.count()` to track total users.

---

### 🗓️ DAY 192 — Getters and Setters
- **Goal:** Control access to properties.
- **Task:** Use `get` and `set` for a temperature converter.

---

### 🗓️ DAY 193 — Encapsulation
- **Goal:** Keep internal data private.
- **Task:** Use `#` private fields to store sensitive data.

---

### 🗓️ DAY 194 — Composition vs Inheritance
- **Goal:** Understand design flexibility.
- **Task:** Build reusable mixin functions.

---

### 🗓️ DAY 195 — Functional Programming Basics
- **Goal:** Write pure functions and avoid side effects.
- **Docs:** [MDN: Functional Programming Concepts](https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming)
- **Task:** Refactor code to eliminate global state.

---

### 🗓️ DAY 196 — Higher-Order Functions
- **Goal:** Use functions that take/return functions.
- **Task:** Write a function that decorates another with logs.

---

### 🗓️ DAY 197 — Currying
- **Goal:** Learn to transform multi-argument functions.
- **Task:** Implement a curried `multiply(a)(b)`.

---

### 🗓️ DAY 198 — Recursion
- **Goal:** Use functions that call themselves.
- **Docs:** [MDN: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- **Task:** Build factorial and Fibonacci functions.

---

### 🗓️ DAY 199 — Memoization
- **Goal:** Optimize recursive functions.
- **Task:** Cache factorial results with an object.

---

### 🗓️ DAY 200 — Pure vs Impure Functions
- **Goal:** Differentiate predictable vs side-effectful code.
- **Task:** Refactor impure functions into pure ones.

---

### 🗓️ DAY 201 — Debouncing and Throttling
- **Goal:** Control function execution rate.
- **Task:** Create debounce and throttle utility functions.

---

### 🗓️ DAY 202 — Event Delegation
- **Goal:** Use event bubbling efficiently.
- **Docs:** [MDN: Event delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- **Task:** Handle list item clicks via parent container.

---

### 🗓️ DAY 203 — Factory Functions
- **Goal:** Create multiple similar objects easily.
- **Task:** Write a `createUser(name, role)` function.

---

### 🗓️ DAY 204 — The Module Pattern
- **Goal:** Combine closures and IIFEs to create modules.
- **Task:** Build a counter module with private state.

---

### 🗓️ DAY 205 — Observer Pattern
- **Goal:** Learn pub-sub model.
- **Task:** Build a basic event emitter system.

---

### 🗓️ DAY 206 — Singleton Pattern
- **Goal:** Ensure only one instance of an object.
- **Task:** Implement a singleton configuration object.

---

### 🗓️ DAY 207 — Strategy Pattern
- **Goal:** Swap algorithms dynamically.
- **Task:** Build a payment strategy example (PayPal, Card).

---

### 🗓️ DAY 208 — Decorator Pattern
- **Goal:** Enhance functions dynamically.
- **Task:** Add logging behavior to an existing function.

---

### 🗓️ DAY 209 — Proxy and Reflect
- **Goal:** Intercept and control object behavior.
- **Docs:** [MDN: Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- **Task:** Log access to an object using Proxy.

---

### 🗓️ DAY 210 — Symbols and Iterators
- **Goal:** Understand custom iteration logic.
- **Task:** Create an iterable range object using `Symbol.iterator`.

---

### 🗓️ DAY 211 — Generators
- **Goal:** Use `function*` to create iterable sequences.
- **Docs:** [MDN: Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- **Task:** Build a number generator.

---

### 🗓️ DAY 212 — Async Generators
- **Goal:** Combine async with generators.
- **Task:** Stream data asynchronously with `for await...of`.

---

### 🗓️ DAY 213 — EventEmitter Implementation
- **Goal:** Create a custom event system.
- **Task:** Add `on`, `emit`, and `off` methods.

---

### 🗓️ DAY 214 — Custom Iterable Objects
- **Goal:** Make objects iterable using `Symbol.iterator`.
- **Task:** Build a playlist object that iterates songs.

---

### 🗓️ DAY 215 — Performance Profiling
- **Goal:** Profile code execution time.
- **Task:** Compare `for`, `forEach`, and `map()` using console.time().

---

### 🗓️ DAY 216 — Memory Management
- **Goal:** Learn garbage collection basics.
- **Docs:** [MDN: Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- **Task:** Identify references that prevent GC.

---

### 🗓️ DAY 217 — Writing Unit Tests
- **Goal:** Test small units of code.
- **Task:** Write basic test assertions manually.

---

### 🗓️ DAY 218 — Jest Introduction
- **Goal:** Learn a popular JS testing framework.
- **Docs:** [Jest Docs](https://jestjs.io/)
- **Task:** Write your first Jest test suite.

---

### 🗓️ DAY 219 — Mocking Functions
- **Goal:** Mock dependencies in tests.
- **Task:** Use `jest.fn()` to mock a data fetcher.

---

### 🗓️ DAY 220 — Test Coverage
- **Goal:** Measure what’s tested.
- **Task:** Run coverage reports using `jest --coverage`.

---

### 🗓️ DAY 221 — Test-Driven Development (TDD)
- **Goal:** Build features through tests.
- **Task:** Create a calculator using TDD.

---

### 🗓️ DAY 222 — Linting Basics
- **Goal:** Use ESLint to maintain code quality.
- **Docs:** [ESLint](https://eslint.org/docs/latest/)
- **Task:** Install ESLint and fix style errors.

---

### 🗓️ DAY 223 — Prettier Integration
- **Goal:** Format code automatically.
- **Task:** Configure Prettier + ESLint for consistency.

---

### 🗓️ DAY 224 — Babel Introduction
- **Goal:** Transpile ES6+ for compatibility.
- **Docs:** [Babel](https://babeljs.io/)
- **Task:** Set up Babel CLI to compile modern JS.

---

### 🗓️ DAY 225 — Webpack Basics
- **Goal:** Bundle JS modules.
- **Docs:** [Webpack](https://webpack.js.org/concepts/)
- **Task:** Create a minimal Webpack config and bundle your code.

---

### 🗓️ DAY 226 — NPM Scripts
- **Goal:** Automate common tasks.
- **Task:** Add scripts like `build`, `start`, and `test` in `package.json`.

---

### 🗓️ DAY 227 — Using Environment Variables
- **Goal:** Protect secrets/config.
- **Task:** Use `.env` files with Node or frontend builds.

---

### 🗓️ DAY 228 — Working with JSON Data
- **Goal:** Read/write JSON in Node.
- **Task:** Create a data.json file and load it dynamically.

---

### 🗓️ DAY 229 — File System (Node.js)
- **Goal:** Read and write files.
- **Docs:** [Node: fs](https://nodejs.org/api/fs.html)
- **Task:** Write logs to a file and read them back.

---

### 🗓️ DAY 230 — Review & Mini Project
- **Goal:** Apply advanced and testing concepts.
- **Mini Project:** Build a **To-Do App** with:
  - OOP classes for tasks
  - LocalStorage persistence
  - Jest tests for core functions
  - ESLint + Prettier integration

---

📅 **End of Part 4 — Advanced Concepts Mastered!**
You’ve now tackled JS internals, design patterns, and testing workflows.
