<template>
    <div id="MyTodo"> 
        <h1>할 일</h1> 
        <table> 
            <tr><td>ID</td><td>기한</td><td>할일</td></tr> 
            <tr v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{done: todo.done}">           
                <td>{{ todo.id }}</td> 
                <td>{{ todo.dueDate }}</td>  
                <td>
                    <input type="checkbox" v-model="todo.done" @click="toggleTodo(todo)"/> 
                    {{ todo.title }}
                    <span @click="deleteTodo(todo.id)">x</span>
                </td> 
            </tr> 
        </table> 
        <input type="text" v-model="title" placeholder="할일을 입력하세요"/>
        <input type="date" v-model="dueDate" />
        <button type="button" @click="addTodo">추가</button>
    </div>
</template>
<script>
import axios from 'axios'; 

axios.defaults.baseURL = "http://localhost:3000"; // 백엔드 API URL 앞 부분을 미리 설정한다 
export default { 
    name: "MyTodo", 
    data() { 
        return { 
            todos: [ ], 
            title: "",
            done: false,
            dueDate:""
        } 
    }, 
    mounted() { // 컴포넌트가 처음 화면에 보이게 될 때, 자동으로 호출되는 메소드 
        this.reloadTodos(); // 데이터를 로드한다 
    }, 
    methods: { 
        async reloadTodos() { // 백엔드 API를 호출하여 데이터를 로드한다 
            try { 
                const response = await axios.get("/todos"); 
                this.todos = response.data;
            } catch (error) { 
                alert('조회 에러: ' + (error instanceof Error ? error.message : error)); 
            } 
        },
        async addTodo() { 
            try { 
                const todo = {id: 0, dueDate: this.dueDate, done: this.done, title: this.title}; //id가 AI이기 때문에 자동으로 결정된다.
                await axios.post("/todos", todo); // 새 todo를 백엔드에 등록한다 
                this.reloadTodos(); // todo 목록 다시 로드 
                this.title = ""; 
                this.dueDate = "";
            } catch (error) { 
                alert('저장 에러: ' + (error instanceof Error ? error.message : error)); 
            } 
        },
        async deleteTodo(id) {
            try { 
                if (confirm("삭제하시겠습니까?") == false) return;
                await axios.delete("/todos/" + id); 
                this.reloadTodos(); // todo 목록 다시 로드  
            } catch (error) { 
                alert('삭제 에러: ' + (error instanceof Error ? error.message : error)); 
            }
        },
        async toggleTodo(todo) { 
            try { 
                todo.done = !todo.done; 
                await axios.put("/todos/" + todo.id, todo); 
                this.reloadTodos();
            } catch (error) { 
                alert('저장 에러: ' + (error instanceof Error ? error.message : error)); 
            } 
        } 
    }
}
</script>
<style scoped>
    div#MyTodo { padding: 30px; margin: 30px auto; width: 500px; border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; } 
    h1 { border-bottom: 1px solid gray; } 
    table { border-collapse: collapse; margin: 20px 0; width: 100%; } 
    tr:nth-child(1) { background-color: #eee; text-align: center; } 
    td { border: 1px solid gray; padding: 6px; } 
    td:nth-child(1) { text-align: center; width: 30px;}
    td:nth-child(2) { text-align: center; width: 100px;}
    input[type=text] { padding: 5px; margin-right: 5px; width: 290px; } 
    input[type=date] { padding: 5px; margin-right: 5px; width: 100px; } 
    button { padding: 0.3em 1.5em; }
    span { font-weight: bold; margin-left: 10px; cursor: pointer; float: right; }
    tr.done { background-color: #f8f8f8; color: #bbb; text-decoration: line-through; } 
    input[type=checkbox] { accent-color: #bbb; }
</style>