/*!
 * Vue.js
 * 2017
 * Camille Nicodemus
 */

Vue.component('todo-item', {
  template: '\
    <li>\
      <button id="x" v-on:click="$emit(\'remove\')">X</button>\
      {{ title }}\
      <div class="dropdown" id="lvl-btn"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Level<span class="caret"></span></button><ul class="dropdown-menu"><li><a href="#">Level 1</a></li><li><a href="#">Level 2</a></li><li><a href="#">Level 3</a></li></ul></div>\
    </li>\
  ',
  props: ['title','levelselect']
})
new Vue({
  el: '#resource-list',
  data: {
    newTodoText: '',
    todos: [
    ],
    levellabel:'Select a level'
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
})

new Vue({
  el: '#cost-rates',
  data: {
    selected: '',
    options: [
      { text: 'Level 1', value: '100' },
      { text: 'Level 2', value: '200' },
      { text: 'Level 3', value: '300' }
    ]
  },
  methods: {

  }
})
