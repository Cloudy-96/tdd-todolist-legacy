class TodoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(str, date = new Date()) {
    // increment the id value
    this.id++
    // id: updated/incremented id from line above, str=the todo, status: auto-set to incomplete
    const formattedDate = new Intl.DateTimeFormat('en-UK').format(date)
    const item = {
      id: this.id,
      text: str,
      status: 'incomplete',
      date: formattedDate
    }
    // add to this.array
    this.items.push(item)
    console.log(item)
    return item
  }

  showAll() {
    const formattedDate = new Intl.DateTimeFormat('en-UK').format(this.date)

    return this.items.map((item) => {
      if (item.text.length > 20) {
        const newText = item.text.substring(0, 20) + '...'
        return {
          id: item.id,
          text: newText,
          status: 'incomplete',
          date: formattedDate
        }
      }
      return item
    })
  }

  // no option to set to incomplete though if set  by mistake
  //Extension 1: toggle complete
  toggleComplete(id) {
    // instead of filters and findIndex like I did in mine.
    const item = this.findBy(id)
    // giving item.status of the found id a new value
    item.status === 'complete'
      ? (item.status = 'incomplete')
      : (item.status = 'complete')
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

const newList = new TodoList()
newList.create('slay codeing ex')
newList.create('slay coding ttd')

module.exports = TodoList
