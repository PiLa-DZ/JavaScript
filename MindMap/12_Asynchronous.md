# Asynchronous JavaScript

- Timers
  - `setTimeout(callback, ms);`
  - `setInterval(callback, ms)`
- CallBack
  - Async CallBack
  - Sync CallBack
- Promise
  - then.catch.finally
  - all
  - race
  - allSettled
  - any
- Async/Await
  - async --> return Promise.resolve()
  - await --> Pauses function
  - Error Swallowing --> 2>/dev/null
  - Error handling --> try.catch.finally `throw Error`
- Event-Loop
  1. VIP Lane
  1. TIMERS
  1. POLL
  1. CHECK
  1. CLOSE
