// Add your domain model below

Objects | Properties | Messages | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
TodoList | id @Int, items @Array | create(@String) | id increments, status starts off incomplete, adds item to array | | todo item | `create('hello') => {id: 1, text: "hello", status: "incomplete"}`
| | | showAll() | | | all items | `showAll() => [{id: 1, text: "hello", status: "incomplete", date: '@string'} ||| outPut = first 20 chars + ... if text is long. Date format DD/MM/YYYY`
| | | setComplete(@Int) | finds item, then updates status property | item exists | updated todo item | `setComplete(1) => {id: 1, text: "hello", status: "complete"}`
| | | | | item does not exist | thrown error | `setComplete(1) => thrown error "Item not Found"`
| | | getByStatus(@String) | | | array, filtered by property status | `getByStatus("incomplete") => [{id: 1, text: "hello", status: "incomplete"}]`
| | | findBy(@Int) | | item exists |item | `findBy(1) => {id: 1, text: "hello", status: "incomplete"}`
| | | | | item does not exist | thrown error | `findBy(1) => thrown error "Item not Found"`
| | | deleteBy(@Int) | finds item, then removes it from array | item exists | item | `deleteBy(@Int) => {id: 1, text: "hello", status: "incomplete"}`
| | | | | item does not exist | thrown error | `deleteBy(@Int) => thrown error "Item not Found"`
