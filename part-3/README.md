# 365 Days of JavaScript — Part 3 (Days 91–180)
> Master advanced JavaScript patterns, asynchronous techniques, and deeper internals of the language.

## 🎯 Month 4–6 Theme: Advanced JavaScript & Architecture
This phase will help you code like a professional developer — understanding *how* and *why* JavaScript works.

---

### 🗓️ DAY 91 — Advanced Scope & Lexical Environment
- **Goal:** Understand lexical scope creation and closure formation.
- **Docs:** [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- **Task:** Build a private counter module using closures.

---

### 🗓️ DAY 92 — Execution Context
- **Goal:** Learn what happens during JS execution (creation vs. execution phase).
- **Task:** Visualize variable hoisting in code comments.

---

### 🗓️ DAY 93 — Call Stack & Memory Heap
- **Goal:** Understand how JS manages function calls and memory.
- **Task:** Trace a recursive function’s call stack manually.

---

### 🗓️ DAY 94 — Garbage Collection
- **Goal:** Learn how JS frees unused memory.
- **Docs:** [MDN: Memory management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- **Task:** Simulate object references being freed.

---

### 🗓️ DAY 95 — Event Loop Deep Dive
- **Goal:** Understand microtasks vs macrotasks.
- **Task:** Predict order of logs using `setTimeout` and `Promise.resolve`.

---

### 🗓️ DAY 96 — Async Patterns: Callback Hell
- **Goal:** Recognize and avoid callback nesting.
- **Task:** Refactor nested callbacks into Promises.

---

### 🗓️ DAY 97 — Promise Internals
- **Goal:** Learn states (pending, fulfilled, rejected).
- **Docs:** [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- **Task:** Manually create and resolve a promise.

---

### 🗓️ DAY 98 — Promise.all, .race, .any
- **Goal:** Handle multiple async calls.
- **Task:** Fetch three endpoints simultaneously and log results.

---

### 🗓️ DAY 99 — Async/Await Error Handling
- **Goal:** Gracefully manage async errors.
- **Task:** Wrap an `await fetch()` in `try/catch`.

---

### 🗓️ DAY 100 — Generators for Async Flow
- **Goal:** Control execution with generators.
- **Task:** Yield numbers with pauses using `next()`.

---

### 🗓️ DAY 101 — Iterables & Custom Iterators
- **Goal:** Create your own iterable object.
- **Task:** Build a range iterator.

---

### 🗓️ DAY 102 — Proxy & Reflect
- **Goal:** Intercept and customize object operations.
- **Docs:** [MDN: Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- **Task:** Log every property access using a Proxy.

---

### 🗓️ DAY 103 — Object.defineProperty
- **Goal:** Define getters/setters manually.
- **Task:** Create a property with a custom getter and setter.

---

### 🗓️ DAY 104 — Getters & Setters in Classes
- **Goal:** Encapsulate data access.
- **Task:** Add getters/setters to a `User` class.

---

### 🗓️ DAY 105 — Error Handling Patterns
- **Goal:** Create custom error classes.
- **Task:** Extend `Error` to define `ValidationError`.

---

### 🗓️ DAY 106 — Deep vs. Shallow Copy
- **Goal:** Understand copying objects.
- **Task:** Clone an object using `JSON.parse(JSON.stringify())` and structuredClone.

---

### 🗓️ DAY 107 — Functional Programming: Intro
- **Goal:** Understand pure functions and immutability.
- **Docs:** [MDN: Functional programming](https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming)
- **Task:** Write a pure `sum()` function.

---

### 🗓️ DAY 108 — Map, Filter, Reduce Practice
- **Goal:** Deepen FP array methods.
- **Task:** Transform a dataset (students to grades).

---

### 🗓️ DAY 109 — Function Composition
- **Goal:** Combine small functions into pipelines.
- **Task:** Create a `compose()` utility.

---

### 🗓️ DAY 110 — Currying
- **Goal:** Break down functions into smaller calls.
- **Task:** Convert a 2-arg function into curried form.

---

### 🗓️ DAY 111 — Pure vs Impure Functions
- **Goal:** Recognize side effects.
- **Task:** Identify and refactor impure functions.

---

### 🗓️ DAY 112 — Memoization
- **Goal:** Cache function results.
- **Task:** Build a `memoize()` wrapper for factorial.

---

### 🗓️ DAY 113 — Modules Deep Dive
- **Goal:** Explore module design patterns.
- **Task:** Implement IIFE-based and ES6-based modules.

---

### 🗓️ DAY 114 — Singleton Pattern
- **Goal:** Ensure one instance per class.
- **Task:** Implement `DatabaseConnection` as a singleton.

---

### 🗓️ DAY 115 — Factory Pattern
- **Goal:** Create objects without specifying classes.
- **Task:** Build a `ShapeFactory` that returns circles or squares.

---

### 🗓️ DAY 116 — Observer Pattern
- **Goal:** Implement subscription updates.
- **Task:** Build a simple event emitter.

---

### 🗓️ DAY 117 — Module Pattern
- **Goal:** Encapsulate private data.
- **Task:** Create a `userModule` using IIFE.

---

### 🗓️ DAY 118 — Prototype Inheritance Deep Dive
- **Goal:** Understand JS prototypal inheritance.
- **Docs:** [MDN: Prototype Chain](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- **Task:** Link objects using `Object.create()`.

---

### 🗓️ DAY 119 — Custom Prototype Methods
- **Goal:** Extend prototypes safely.
- **Task:** Add a custom method to `Array.prototype`.

---

### 🗓️ DAY 120 — Class vs Prototype Comparison
- **Goal:** Understand ES6 class sugar vs legacy prototypes.
- **Task:** Reimplement a class using prototype syntax.

---

### 🗓️ DAY 121 — Command Pattern
- **Goal:** Encapsulate actions as objects.
- **Task:** Build an undo/redo system for a text editor.

---

### 🗓️ DAY 122 — Strategy Pattern
- **Goal:** Swap algorithm behavior dynamically.
- **Task:** Implement a payment strategy system.

---

### 🗓️ DAY 123 — Decorator Pattern
- **Goal:** Extend behavior without modifying classes.
- **Task:** Wrap a function to add logging.

---

### 🗓️ DAY 124 — Proxy Pattern
- **Goal:** Use Proxy to validate inputs dynamically.
- **Task:** Guard an object against invalid age input.

---

### 🗓️ DAY 125 — Adapter Pattern
- **Goal:** Make incompatible APIs work together.
- **Task:** Adapt a legacy logger to a new interface.

---

### 🗓️ DAY 126 — Async Patterns Project
- **Goal:** Combine async logic, Promises, and Fetch.
- **Project:** Create an API dashboard with multiple endpoints.

---

### 🗓️ DAY 127 — MVC Pattern Intro
- **Goal:** Separate logic, UI, and data.
- **Task:** Build a small MVC counter app.

---

### 🗓️ DAY 128 — MVVM Pattern
- **Goal:** Understand data binding concepts.
- **Task:** Simulate reactive data binding with Proxies.

---

### 🗓️ DAY 129 — Pub/Sub Pattern
- **Goal:** Implement event broadcasting.
- **Task:** Build a `Publisher` and `Subscriber` module.

---

### 🗓️ DAY 130 — Module Loader Concepts
- **Goal:** Understand `require()`, `import`, and bundlers.
- **Task:** Compare CommonJS vs ES Modules.

---

### 🗓️ DAY 131 — WeakMap/WeakSet Internals
- **Goal:** Learn memory-safe references.
- **Task:** Store private data using WeakMap in a class.

---

### 🗓️ DAY 132 — Advanced Array Techniques
- **Goal:** Practice `flat()`, `flatMap()`, and chaining.
- **Task:** Flatten nested arrays dynamically.

---

### 🗓️ DAY 133 — Advanced Object Operations
- **Goal:** Learn `Object.assign()`, `entries()`, `values()`.
- **Task:** Merge multiple configuration objects.

---

### 🗓️ DAY 134 — Recursion Advanced
- **Goal:** Handle recursive arrays and trees.
- **Task:** Sum nested numbers in a tree.

---

### 🗓️ DAY 135 — Data Structures: Stack
- **Goal:** Implement stack using class.
- **Task:** Add `push`, `pop`, and `peek` methods.

---

### 🗓️ DAY 136 — Data Structures: Queue
- **Goal:** FIFO concept.
- **Task:** Create an enqueue/dequeue system.

---

### 🗓️ DAY 137 — Data Structures: Linked List
- **Goal:** Implement singly linked list.
- **Task:** Add node traversal and deletion.

---

### 🗓️ DAY 138 — Data Structures: Doubly Linked List
- **Goal:** Add previous/next navigation.
- **Task:** Build navigation history system.

---

### 🗓️ DAY 139 — Data Structures: Stack & Queue in Practice
- **Goal:** Use DS for real use cases.
- **Task:** Simulate a printer queue.

---

### 🗓️ DAY 140 — Big O Notation Intro
- **Goal:** Understand algorithm complexity.
- **Task:** Compare O(n) vs O(n²) loops.

---

### 🗓️ DAY 141 — Map & Filter Performance
- **Goal:** Analyze array method efficiency.
- **Task:** Benchmark filter vs for loop.

---

### 🗓️ DAY 142 — Async Queue Implementation
- **Goal:** Manage async tasks sequentially.
- **Task:** Queue multiple fetch calls.

---

### 🗓️ DAY 143 — Throttling & Debouncing
- **Goal:** Optimize event handling.
- **Task:** Build a search input with debounce.

---

### 🗓️ DAY 144 — Web Workers
- **Goal:** Use background threads.
- **Docs:** [MDN: Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- **Task:** Run a heavy calculation in a worker.

---

### 🗓️ DAY 145 — Service Workers
- **Goal:** Learn offline caching.
- **Task:** Register a basic service worker.

---

### 🗓️ DAY 146 — EventTarget Custom Events
- **Goal:** Create and dispatch custom events.
- **Task:** Emit a custom “dataLoaded” event.

---

### 🗓️ DAY 147 — Async Generators
- **Goal:** Combine async and generators.
- **Task:** Create an async number stream.

---

### 🗓️ DAY 148 — Streams API
- **Goal:** Process data chunks progressively.
- **Task:** Simulate reading data stream.

---

### 🗓️ DAY 149 — File API
- **Goal:** Work with user file uploads.
- **Task:** Read a text file with FileReader.

---

### 🗓️ DAY 150 — Blob & URL API
- **Goal:** Handle binary data.
- **Task:** Create a blob and generate a download link.

---

### 🗓️ DAY 151 — IndexedDB Basics
- **Goal:** Learn browser database storage.
- **Docs:** [MDN: IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- **Task:** Store and retrieve items from IndexedDB.

---

### 🗓️ DAY 152 — DOMParser & XMLSerializer
- **Goal:** Work with XML/HTML strings.
- **Task:** Parse HTML and log node names.

---

### 🗓️ DAY 153 — Intl API
- **Goal:** Handle localization and currency formatting.
- **Task:** Format price in multiple locales.

---

### 🗓️ DAY 154 — Clipboard API
- **Goal:** Copy and paste text.
- **Task:** Add copy-to-clipboard button.

---

### 🗓️ DAY 155 — Notifications API
- **Goal:** Push desktop notifications.
- **Task:** Request permission and notify “Task Done!”

---

### 🗓️ DAY 156 — Geolocation API
- **Goal:** Access user location.
- **Task:** Display coordinates on button click.

---

### 🗓️ DAY 157 — Speech Synthesis API
- **Goal:** Make your app talk.
- **Task:** Read out a paragraph aloud.

---

### 🗓️ DAY 158 — Drag & Drop API
- **Goal:** Enable drag interactions.
- **Task:** Build a draggable to-do list.

---

### 🗓️ DAY 159 — Canvas API Basics
- **Goal:** Draw shapes programmatically.
- **Task:** Draw a rectangle and circle.

---

### 🗓️ DAY 160 — Canvas Animations
- **Goal:** Animate using `requestAnimationFrame`.
- **Task:** Animate a bouncing ball.

---

### 🗓️ DAY 161 — WebSockets Intro
- **Goal:** Learn real-time communication.
- **Task:** Simulate a chat message echo.

---

### 🗓️ DAY 162 — WebSocket Chat Project
- **Goal:** Apply WebSockets in UI.
- **Project:** Create a live chat demo (mock server).

---

### 🗓️ DAY 163 — Performance API
- **Goal:** Measure code execution time.
- **Task:** Benchmark loops using `performance.now()`.

---

### 🗓️ DAY 164 — requestIdleCallback
- **Goal:** Schedule background tasks.
- **Task:** Log data processing during idle time.

---

### 🗓️ DAY 165 — MutationObserver
- **Goal:** Watch DOM changes dynamically.
- **Task:** Observe new nodes being added.

---

### 🗓️ DAY 166 — IntersectionObserver
- **Goal:** Lazy load elements.
- **Task:** Load images when they appear in viewport.

---

### 🗓️ DAY 167 — ResizeObserver
- **Goal:** Respond to element size changes.
- **Task:** Log width/height when resized.

---

### 🗓️ DAY 168 — Shadow DOM
- **Goal:** Encapsulate component styles.
- **Task:** Create a custom element with shadow DOM.

---

### 🗓️ DAY 169 — Custom Elements
- **Goal:** Build reusable HTML components.
- **Task:** Define a `<user-card>` element.

---

### 🗓️ DAY 170 — Web Components Project
- **Goal:** Combine shadow DOM + custom elements.
- **Project:** Build a weather widget web component.

---

### 🗓️ DAY 171 — Clipboard Project
- **Goal:** Practice modern browser APIs.
- **Project:** Clipboard note-taking tool.

---

### 🗓️ DAY 172 — Service Worker Project
- **Goal:** Enable offline capability.
- **Project:** Offline to-do app.

---

### 🗓️ DAY 173 — Design Patterns Review
- **Goal:** Consolidate all learned patterns.
- **Task:** Create a cheatsheet of all patterns.

---

### 🗓️ DAY 174 — Async Patterns Recap
- **Goal:** Compare callbacks, Promises, and async/await.
- **Task:** Build a single script showing all 3 styles.

---

### 🗓️ DAY 175 — Browser API Recap
- **Goal:** Review all browser APIs learned.
- **Task:** Create a mini “Web API dashboard”.

---

### 🗓️ DAY 176 — Mini Challenge
- **Goal:** Combine async, DOM, and pattern concepts.
- **Task:** Build a GitHub Repo Viewer with search.

---

### 🗓️ DAY 177 — Smart Code Organization
- **Goal:** Learn folder structure best practices.
- **Task:** Refactor a small project into modules.

---

### 🗓️ DAY 178 — Advanced Debugging
- **Goal:** Learn `debugger`, call stacks, and watches.
- **Task:** Debug a buggy async function.

---

### 🗓️ DAY 179 — Testing Intro
- **Goal:** Write first JS test using assertions.
- **Task:** Create simple `assertEqual()` test function.

---

### 🗓️ DAY 180 — Project: Pattern Playground
- **Goal:** Combine design patterns into one project.
- **Project:** Build a “Pattern Explorer” — a small app showcasing each pattern in action.

---

📅 **End of Part 3**
You now understand JavaScript internals, asynchronous behavior, and reusable design patterns — ready to build *real-world-grade* apps.
