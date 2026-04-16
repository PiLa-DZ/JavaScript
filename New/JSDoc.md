# What are those 3 lines? (JSDoc)

Those lines are called JSDoc.
Think of them as the "Header File documentation" of the JavaScript world.

Since JavaScript doesn't have a strict type system like C++,
we use these comments to tell other developers (and our code editor, Neovim)
what kind of data the function expects.

- `@param {Array} tasksArr`:
  Tells the editor that the first argument should be an Array.

- `@param {Object} updateData`:
  Tells the editor the second argument should be an Object.

- `@returns {Object|null}`:
  Tells the editor
  "This function will give you back either an Object or Null."

Why use it?
In Neovim, if you hover over the function name later,
your LSP (Language Server Protocol)
will show you this exact description.
It’s like having a built-in manual for your own code.

```js
/**
 * Generic Utility to update an object within an array
 * @param {Array} tasksArr - The current list of tasks
 * @param {Object} updateData - Object containing the ID and the fields to change
 * @returns {Object|null} - The updated task or null
 */
export const updateTaskInArray = (tasksArr, updateData) => {
  const { id } = updateData;
  const index = tasksArr.findIndex((task) => task.id === id);

  if (index < 0) return null;

  // Merge existing task with new data
  // This overwrites existing properties with whatever is in updateData
  tasksArr[index] = {
    ...tasksArr[index],
    ...updateData,
  };

  return tasksArr[index];
};
```
