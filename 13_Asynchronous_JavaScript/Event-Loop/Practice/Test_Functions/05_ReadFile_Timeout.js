require("fs").readFile(__filename, () => {
  console.log("ReadFile 1");
});

setTimeout(() => console.log("Timeout 1"), 0);

// ???????????????????????

// Maybe you will see this outputs:
// Timeout 1
// ReadFile 1

// Or this outputs:
// ReadFile 1
// Timeout 1

// ------------------------------------------------------------
// Because the delay of setTimeout is 1ms
// setTimeout(() => console.log("Timeout 1"), 1);
//
// so the event loop in 0.5ms see the (Timers Phase)
// and see nothing there
// so move to the next phase which (Poll Phase)
//
// But if the event loop is slow
// so the event loop in 2ms see the (Timers Phase)
// and see the setTimeout callBack there
// so run it
// then move to (Poll Phase)
