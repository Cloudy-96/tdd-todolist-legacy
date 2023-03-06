const TodoList = require('../src/TodoList.js')

describe('TodoList', () => {
  let todoList
  let date
  let formattedDate

  beforeEach(() => {
    todoList = new TodoList()
    date = new Date()
    formattedDate = new Intl.DateTimeFormat('en-UK').format(date)
  })

  it('creates a todo item', () => {
    // set up
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: formattedDate
    }

    // execute
    const result = todoList.create('turn the heating on!')

    // verify
    expect(result).toEqual(expected)
  })

  it('returns all items', () => {
    // set up
    const item1 = {
      id: 1,
      text: 'turn the heating on ...',
      status: 'incomplete',
      date: formattedDate
    }
    const item2 = {
      id: 2,
      text: 'Do the washing up',
      status: 'incomplete',
      date: formattedDate
    }
    const expected = [item1, item2]

    // execute
    todoList.create('turn the heating on to 25 degrees!')
    todoList.create('Do the washing up')

    // verify
    expect(todoList.showAll()).toEqual(expected)
  })

  it('toggles item from incomplete to complete if found', () => {
    // set up
    const item1 = todoList.create('turn the heating on!')
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'complete',
      date: formattedDate
    }

    // execute
    const result = todoList.toggleComplete(item1.id)

    // verify
    expect(result).toEqual(expected)
  })

  it('toggles item from complete to incomplete if found', () => {
    // set up
    const item1 = todoList.create('turn the heating on!')
    // set to complete
    todoList.toggleComplete(item1.id)

    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: formattedDate
    }

    // execute
    // set back to incomplete
    const result = todoList.toggleComplete(item1.id)

    // verify
    expect(result).toEqual(expected)
  })

  it('throws error if not found', () => {
    // set up

    // execute, verify
    // "toThrowEror" vs toEqual?
    expect(() => todoList.toggleComplete(1)).toThrowError('Item not found')
  })

  it('gets incomplete items', () => {
    // set up
    const item1 = todoList.create('turn the heating on!')
    const item2 = todoList.create('Do the washing up')
    todoList.toggleComplete(item1.id)
    const expected = [item2]

    // execute
    const result = todoList.getByStatus('incomplete')

    // verify
    expect(result).toEqual(expected)
  })

  it('gets complete items', () => {
    // set up
    const item1 = todoList.create('turn the heating on!')
    const item2 = todoList.create('Do the washing up')
    todoList.toggleComplete(item1.id)
    const expected = [item1]

    // execute
    const result = todoList.getByStatus('complete')

    // verify
    expect(result).toEqual(expected)
  })

  it('finds item by id', () => {
    // set up
    const item1 = todoList.create('turn the heating on!')
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: formattedDate
    }

    // execute
    const result = todoList.findBy(item1.id)

    // verify
    expect(result).toEqual(expected)
  })

  it('findBy throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.findBy(1)).toThrowError('Item not found')
  })

  it('deletes item by id', () => {
    // set up
    const item1 = todoList.create('turn the heating on!')
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: formattedDate
    }

    // execute
    const deletedItem = todoList.deleteBy(1)

    // verify
    expect(deletedItem).toEqual(expected)
    // well thought out
    expect(todoList.showAll()).toEqual([])
  })

  it('delete throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.deleteBy(1)).toThrowError('Item not found')
  })
})
