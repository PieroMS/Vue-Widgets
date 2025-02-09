<!-- OPTIONS API -->
<script>
  export default{
    data(){
      return {
        currentValue : "",
        tags: []
      }
    },

    mounted() {
      const storedTags = localStorage.getItem("tags");
      if (storedTags) {
        this.tags = JSON.parse(storedTags);
      }
    },

    methods: {
      handleSubmit(){
        if(this.currentValue !== ""){
          // some recorre el array y retorna TRUE si el elemento ya existe
          const exist = this.tags.some((item) => item === this.currentValue);
          if(!exist){
            this.tags.push(this.currentValue);
            this.currentValue = "";
            this.saveTags();
          }
        }
      },
      deleteTag(tag){
        // filter crea un nuevo array y con la arrow function agrega los elementos que son diferentes al tag del argumento
        this.tags = this.tags.filter((item) => item !== tag);
        this.saveTags();
      },
      saveTags() {
        // el setItem guarda la data en el localstorage del navegador en formato json
        localStorage.setItem("tags", JSON.stringify(this.tags));
      },
    }
  }
</script>

<template>
  <div class="inputTag">
    <div class="tags">
      <div class="tag" v-for="(tag, index) in tags" :key="index">
        {{ tag }} <button @click="deleteTag(tag)"> x </button>
      </div>
    </div>
    <form action="" @submit.prevent="handleSubmit">
      <input type="text" v-model="currentValue">
    </form>
  </div>
</template>

<style scoped>
  .inputTag {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 300px;
      margin: auto;
      font-family: Arial, sans-serif;
  }

  .tags {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
  }

  .tag {
      background-color: #4CAF50;
      color: white;
      border-radius: 3px;
      padding: 5px 10px;
      margin: 2px;
      display: inline-block;
      font-size: 14px;
  }

  .tag button {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      margin-left: 5px;
      font-weight: bold;
  }

  .tag:hover {
      background-color: #388E3C;
  }

  form {
      display: flex;
  }

  input[type="text"] {
      flex: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
  }

  input[type="text"]:focus {
      border-color: #4CAF50;
      outline: none;
  }

  input[type="text"]::placeholder {
      color: #999;
  }

  input[type="text"]:invalid {
      border-color: #d32f2f;
  }
</style>
