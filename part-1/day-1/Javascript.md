## 🌐 What is JavaScript?

**Overview:**  
JavaScript is a **dynamic, high-level scripting language** that brings interactivity to web pages. It works alongside **HTML** (structure) and **CSS** (style) to form the core technologies of the web.

**JavaScript** is a lightweight, cross-platform, object-oriented scripting language primarily used to make web pages interactive and dynamic.

Although JavaScript’s syntax resembles **Java**, it differs significantly in several ways. Unlike Java’s **static typing** and **strong type checking**, JavaScript is **dynamically typed** and more flexible.

The language borrows many of Java’s naming conventions, expression syntax, and control-flow structures — a similarity that led to its renaming from **LiveScript** to **JavaScript** in the mid-1990s.

Instead of the traditional **class-based** object model (as in Java), JavaScript uses a **prototype-based** model, allowing objects to inherit directly from other objects and enabling more dynamic behavior.

The ECMAScript specification is a set of requirements for implementing ECMAScript. It is useful if you want to implement standards-compliant language features in your ECMAScript implementation or engine (such as SpiderMonkey in Firefox, or V8 in Chrome).


---

### 🧠 A High-Level Definition
JavaScript allows developers to implement complex features on web pages — such as live content updates, animations, interactive maps, or multimedia control.  
It is the **third layer** of standard web technologies:
1. **HTML** – Defines the structure and content.  
2. **CSS** – Styles and visually enhances the content.  
3. **JavaScript** – Adds interactivity and dynamic behavior.

---

### ⚙️ What Can JavaScript Do?
- Store and manipulate data using variables.  
- Respond to user actions (clicks, scrolls, input, etc.).  
- Dynamically change HTML and CSS via the **DOM API**.  
- Communicate with servers using **APIs** and **HTTP requests**.  
- Work with graphics, audio, video, and even 3D content using **Canvas**, **WebGL**, and **WebRTC**.  

---

### 🧩 How Does JavaScript Work?
When a browser loads a web page, it executes JavaScript **inside its own environment (sandbox)**, isolated from other pages for security.  
JavaScript code usually runs **top to bottom**, and can respond to **events** like button clicks or form submissions.

---

### 💻 Adding JavaScript to a Web Page
You can include JavaScript in three main ways:
1. **Internal** – Inside a `<script>` tag in an HTML file.  
2. **External** – By linking a `.js` file using `<script src="script.js"></script>`.  
3. **Inline** – Inside HTML attributes (e.g. `onclick="..."`), though this is discouraged in modern development.

---

### 📝 Comments in JavaScript
Use comments to explain your code:
```js
// Single-line comment

/*
  Multi-line
  comment
*/




## 📚 Key Concepts

| **JavaScript** | **Java** |
|----------------|-----------|
| **Object-oriented (prototype-based):** All objects are dynamic and can have properties or methods added at runtime. Inheritance is achieved through the **prototype chain**. | **Object-oriented (class-based):** Objects are instances of classes. Inheritance follows a **class hierarchy**, and properties or methods cannot be added dynamically. |
| **Dynamically typed:** Variable types are determined at runtime; no need for explicit type declarations. | **Statically typed:** Variable types must be declared explicitly, and type checking occurs at compile time. |
| **Browser sandboxed:** Cannot directly read from or write to the local hard disk for security reasons. | **System-level access:** Can read from and write to the local hard disk with appropriate permissions. |
