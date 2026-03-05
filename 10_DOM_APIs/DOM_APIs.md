```js
// ============================================================
// DOM API Basics
// ============================================================
// 1. Selection: querySelector is the modern standard.
// 2. Content: Use .textContent (safe) vs .innerHTML (risky).
// 3. Classes: Use .classList.add/remove/toggle for styling.
// 4. Events: .addEventListener('type', callback) is the way.
// 5. Structure: It's a Tree. Elements are Nodes.
// ============================================================
```

### ============================================================
1. What is the DOM?
Think of the DOM as a Tree structure.
    The Window is the OS environment.
    The Document is the root directory.
    Elements (tags) are the subdirectories and files.

### ============================================================
2. Selection: Finding your Targets
Before you can change something, 
you have to find it. 
As an Arch Linux user, 
think of this like using find or grep.
```js
// document.getElementById('id')
// document.querySelector('.class')
// document.querySelectorAll('div')
const mainTitle = document.getElementById('title');
const buttons = document.querySelectorAll('.nav-btn');
```

### ============================================================
3. Manipulation: Changing the "System"
Once you have the element, 
you can change its content, style, or attributes.
```js
const status = document.querySelector('#status');

// Changing content
status.textContent = "System: Online"; 

// Changing style (like editing a config file)
status.style.color = "#00ff00"; 

// Adding/Removing classes (the preferred way to style)
status.classList.add('active');
```

### ============================================================
4. Creation & Deletion
You can build new parts of the UI on the fly, similar to mkdir or touch.
```js
// Create
const newLog = document.createElement('li');
newLog.textContent = "Kernel update successful.";

// Append (Attach to the tree)
const logList = document.querySelector('#logs');
logList.appendChild(newLog);

// Remove
// newLog.remove();
```

### ============================================================
5. Event Listeners: The "Interrupts"
In the backend, 
you handle requests. 
In the DOM, 
you handle Events (clicks, keypresses, mouse movements).
```js
const btn = document.querySelector('#reboot-btn');

btn.addEventListener('click', (event) => {
  console.log("Rebooting UI...");
  // Using a closure here!
  document.body.style.backgroundColor = "black";
});
```

