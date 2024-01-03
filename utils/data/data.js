const initialList = ['Item 1', 'Item 2', 'Item 3'];
const initialColumns = {
  todo: {
    id: 'todo',
    list: initialList,
  },
  doing: {
    id: 'doing',
    list: [],
  },
  done: {
    id: 'done',
    list: [],
  },
};

export { initialList, initialColumns };
