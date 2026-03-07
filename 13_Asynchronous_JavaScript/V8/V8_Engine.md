V8
    Call-Stack
    Heap

API 
Libuv
Event-Loop
Task-Queue

### ============================================================
1. The V8 Engine Components (The "CPU" of JS)

V8 is single-threaded. 
    It can only do one thing at a time. 
    It consists of two main memory structures:

    The Call Stack (LIFO): 
        Where your code is executed. 
        It tracks where we are in the program. 
        If you call a function, 
        it's "pushed" onto the stack. 
        When it returns, it's "popped" off.

    The Heap: 
        A large, 
        unstructured memory region 
        where objects, closures, and variables are store

### ============================================================
2. The Node.js Runtime (The "OS" of JS)

Since the Call Stack can only do one thing, 
Node.js surrounds V8 with Web/Node APIs and the Task Queues.

    Node APIs: 
        These are the workers. 
        When you call fs.readFile or setTimeout, 
        V8 hands that task to a Node API 
        and moves to the next line of code.

    The Callback Queue (Task Queue): 
        When a Node API finishes (e.g., the file is read), 
        the "callback" function is placed here to wait.

### ============================================================
3. The Event Loop: The Traffic Controller

The Event Loop is a constant loop that checks two things:

    Is the Call Stack empty?

    Is there anything in the Callback Queue?

If the stack is empty, 
the Event Loop takes the first task from the queue 
and pushes it onto the stack for V8 to execute.

### ============================================================
4. How it moves between tasks (Systems Analogy)

Think of V8 as a Single-Core CPU and the Event Loop as a Scheduler.

    Synchronous Task: 
        V8 executes it immediately on the stack. (Blocking).

    Asynchronous Task: 
        V8 sends the request to the libuv Thread Pool 
        (background threads in your Linux OS) 
        and immediately moves to the next line. (Non-blocking).

    Completion: 
        Once the Linux kernel finishes the I/O, 
        it signals libuv, 
        which puts the callback in the queue.

    Resumption: 
        As soon as V8 finishes its current synchronous work, 
        the Event Loop "swaps" the callback into the stack.


```js
// ============================================================
// JS ARCHITECTURE: V8 & THE EVENT LOOP
// ============================================================
// 1. CALL STACK: LIFO (Last-In, First-Out). Where your code
//    physically executes. One task at a time.
// 2. HEAP: Memory allocation for objects and variables.
// 3. LIBUV: The C++ library that provides the Event Loop
//    and Thread Pool for asynchronous I/O.
// 4. THE FLOW:
//    Stack -> Async API -> Callback Queue -> Event Loop -> Stack
// 5. V8 OPTIMIZATION: If the Stack is busy with a heavy
//    loop, the Event Loop is "Starved" and cannot move
//    tasks from the Queue. This is "Blocking the Loop."
// ============================================================
```
