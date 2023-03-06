class TodoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(str) {
    // increment the id value
    this.id++
    // id: updated/incremented id from line above, str=the todo, status: auto-set to incomplete
    const item = { id: this.id, text: str, status: 'incomplete' }
    // add to this.array
    this.items.push(item)
    return item
  }

  // Show only the first 20chars when displaying all items
  // When seeing all the items, only show the first 20 chars of the item text, followed by '...'
  // However, when displaying single items, show the whole item text.

  showAll() {
    return this.items.slice(0, 20)
  }

  // no option to set to incomplete though if set  by mistake
  setComplete(id) {
    // instead of filters and findIndex like I did in mine.
    const item = this.findBy(id)
    // giving item.status of the found id a new value
    item.status = 'complete'
    return item
  }

  // function 2-in-1: instead of having two functions (one for complete and one for incomplete)
  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  // array.find = better than .filter caus then you keep the full array?

  // However, when displaying single items, show the whole item text.
  findBy(id) {
    const item = this.items.find((item) => item.id === id)
    if (item === undefined) throw new Error('Item not found')
    return item
  }

  deleteBy(id) {
    const item = this.findBy(id)
    const index = this.items.indexOf(item)
    // remove 1 from found index, at position 0 of the index? Not seen this syntax before but the tests pass so...
    return this.items.splice(index, 1)[0]
  }
}

module.exports = TodoList
