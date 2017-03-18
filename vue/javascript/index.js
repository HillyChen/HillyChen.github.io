var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
});
var cailiao=[
  { text: 'Learn JavaScript' },
  { text: 'Learn Vue' },
  { text: 'Build something awesome' }
];
console.log(cailiao.splice(0,1));
console.log(cailiao);

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: cailiao
  }
});

// app4.todos.shift({text:""});
// app4.todos.push({text:"chenxus"});
// app4.todos.delete();
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
});
