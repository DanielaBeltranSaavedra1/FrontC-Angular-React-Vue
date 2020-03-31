<template >
  <div class="app2">
    <div class="container">
      <div class="row header">
        <h1 class="col s6 offset-s3 center-align ">To-Do List!</h1>
      </div>
      <div class="row">
        <form @submit.prevent="submitTodo" class="col s6 offset-s3">
          <div class="input-field">
             <i class="material-icons prefix">format_list_bulleted</i>
             
            <textarea v-model="newTodo" id="icon_prefix2" class="materialize-textarea"></textarea>
            <label for="icon_prefix2">What to do?</label>
          </div>
          <div class="bton">
          <button class="btn  waves-effect col s12">Add</button>
        </div>
        </form>
      </div>
      <div class=todo-list>
      <div class="row">
        <ul class="collection col s6 offset-s3">
          <li class="collection-item" v-for="todo in todos" :key="todo.id">
            <p>
              <label class=todo-list>
                <input type="checkbox" :checked=todo.done @change="todo.done = !todo.done" />
                <span>{{todo.title}}</span>
                <span>
                  <a @click.prevent="deleteTodo(todo)">
                    <i class="material-icons right ">delete</i>
                  </a>
                </span>
              </label>
            </p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app2',
  data() {
    return {
      todos: [],
      newTodo: '',
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos);
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  methods: {
    submitTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = '';
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  },
};
</script>

<style long="scss">
.app2{
  background: none  !important;
  color: white !important;
  padding: 0px;
}
.label {
    font-size:  20px!important;
    color:whitesmoke !important;
}
.col{
  color:whitesmoke!important;
}
.row .col.offset-s3{
  margin-left: -14% !important;
}
.materialize-textarea{
  color:whitesmoke !important;
}
.input-field>label {
    color: whitesmoke !important;
    font-size: 23px !important;
    
}
.input:not([type]), input[type=text]:not(.browser-default), input[type=password]:not(.browser-default), input[type=email]:not(.browser-default), input[type=url]:not(.browser-default), input[type=time]:not(.browser-default), input[type=date]:not(.browser-default), input[type=datetime]:not(.browser-default), input[type=datetime-local]:not(.browser-default), input[type=tel]:not(.browser-default), input[type=number]:not(.browser-default), input[type=search]:not(.browser-default), textarea.materialize-textarea {
    color:whitesmoke !important;
    border-bottom: 3px solid whitesmoke !important;
    font-size: 27px !important;
      
}
.material-icons{
  color: whitesmoke!important;
}
.bton{
  color:whitesmoke;
   border: 3px solid transparent;
   font-size: 35px;
}
.btn {
     border: 3px solid transparent;
   font-size: 15px !important;
}
.btn:hover, .btn-large:hover, .btn-small:hover {
    background-color: #ffc107;
    border-color: #ffc107 !important;
    color:black !important;
}
.collection .collection-item {
background: none;
color:whitesmoke !important;
}
.row .col.s6{
    border: none;
}
.todo-list{
    font-size: 20px!important;
    color:whitesmoke !important;

}
[type="checkbox"]+span:not(.lever):before, [type="checkbox"]:not(.filled-in)+span:not(.lever):after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    z-index: 0;
    border: 2px solid whitesmoke !important;
}
[type="checkbox"]+span:not(.lever) {
font-size: 30px;
}
</style>