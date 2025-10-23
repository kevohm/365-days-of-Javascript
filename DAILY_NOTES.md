# 🗓️ Day [Number]: [Topic Title]

## 🎯 Objective
> Clearly state what you want to achieve today.  
> Example: "Understand how JavaScript closures work and practice with simple use cases."

---

## 📚 Key Concepts
| Concept | Description |
|----------|--------------|
| [Concept 1] | Brief explanation |
| [Concept 2] | Brief explanation |
| [Concept 3] | Brief explanation |

> 💡 Tip: Keep your notes short and focused — aim to capture *understanding*, not just code.

---

## 🧠 Learning Resources
- 📖 [MDN: [Topic]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/[topic])
- 📘 [W3Schools: [Topic]](https://www.w3schools.com/js/)
- 🎥 [Optional YouTube Resource](https://www.youtube.com/results?search_query=javascript+[topic])

---

## 💻 Practice Tasks
✅ **SMART Goals (Specific, Measurable, Achievable, Relevant, Time-bound):**
1. Implement: `[Describe a small coding task — e.g., "Write a function using closures to create a counter."]`
2. Test: `[Example — "Try increasing and resetting the counter value."]`
3. Reflect: `[Example — "Write down where closures can help you in a project."]`

---

## 🧩 Code Example

```js
// Example: Closure Counter
function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
