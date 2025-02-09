<!-- API COMPOSITIO -->
<script setup>
  import { reactive } from 'vue';
  import InputNewTask from './InputNewTask.vue'

  let boards = reactive([
    {
      id: crypto.randomUUID(),
      name: 'Default Board',
      items: [
          {
            id: crypto.randomUUID(),
            title: 'Default Task'
          }
      ]
    }
  ]);

  function handleNewItem(text, board){
    //console.log(text.value, board.name);
    board.items.push({
        id: crypto.randomUUID(),
        title: text.value
    });
  }

  function handleNewBoard(){
    const name = prompt('Enter the name of the board');
    if(name){
      boards.push({
        id: crypto.randomUUID(),
        name: name,
        items: []
      });
    }
  }

  function startDrag(evt, board, item){
    evt.dataTransfer.setData('text/plain', JSON.stringify({boardId: board.id, itemId: item.id}));
  }

  function onDrop(evt, dest){
    const {boardId, itemId} = JSON.parse(evt.dataTransfer.getData('text/plain'));
    const originBoard = boards.find(item => item.id === boardId);
    const originItem = originBoard.items.find(item => item.id === itemId);
    dest.items.push({...originItem});
    originBoard.items = originBoard.items.filter((item) => item !== originItem);
  }
</script>

<template>
  <nav>
    <ul>
      <li><a href="#" @click.prevent="handleNewBoard">Create board</a></li>
    </ul>
  </nav>
  <div class="boards-container">
    <div class="boards">
      <div class="board" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id">
          <p class="board-name"> {{ board.name }}</p>
          <!-- la sintaxis del emit puede variar como se ve :v -->
          <InputNewTask @on-new-item="(text) => handleNewItem(text, board)"/>
          <div class="items">
            <div class="item" draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id" >
              <p>{{ item.title }}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  margin: 20px 0;
}

li {
  background-color: #4CAF50;
  padding: 10px 15px;
  border-radius: 8px;
  transition: .4s;
}
li:hover {
  background-color: #4ece52;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 15px;
}

nav ul li a {
  font-family: Arial, sans-serif;
  color: white;
  text-decoration: none;
}

.boards-container {
  display: flex;
  justify-content: start;
  padding: 20px;
}

.boards {
  display: flex;
  gap: 20px;
}

.board {
  background: #ebebeb;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 250px;
}

.board .board-name{
  font-family: Arial, sans-serif;
  font-size: 20px;
  text-align: start;
}

.item {
  font-family: Arial, sans-serif;
  background: rgb(245, 245, 245);
  padding: 4px 10px;
  margin-top: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
}
</style>

