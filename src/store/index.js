import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123', 
      name: 'adam'
    },
    categories: [
      'sustanability',
      'nature',
      'animal welfare',
      'housing',
      'education', 
      'food', 
      'community'
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false},
    ],
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '...', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: '...', organizer: '...' },
    ]
  },
  mutations: {
    ADD_EVENT(state, event){
      
    }
  },
  actions: {},
  modules: {},
  getters: {
    catLength: state => {// in case we want to use categ length in multiple places
      return state.categories.length
    },

    // using a getter inside a getter
  //   doneTodos: state => {
  //     return state.todos.filter(todo => todo.done)
  //   },
  //   activeTodosCount: (state, getters) => state.todo.length - getters.doneTodos.length
  
  activeTodosCount: state => state.todos.filter(todo => !todo.done).length,

  //dinamic getters => with an argument
    getEventByID: state => id => state.events.find(event => event.id === id)
}
});
