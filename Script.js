    const todoList=[];

    renderTodoList();

    function  renderTodoList(){

        //Create A veriable  to Stroed the Result
        let todoListhtml='';//Staring The TodolistHtnml is the Empty 
        
        for(let i=0;i<todoList.length;i++){

            //create A Veriable To save

            const todoObject=todoList[i]; 
            // const name= todoObject.name;
            // const dudate= todoObject.dudate;
            const{name, dudate}=todoObject;

            const  html=`
            <div>
            ${name}
            </div>
            <div> 
            ${dudate} 
            </div>
            <button class="delete-todo" onclick="
              todoList.splice(${i},1);
              renderTodoList()">
            Delete
            </button>
             `; // this is html Stored in the todolistHtml

            todoListhtml += html; // combain the all the code  in the TodolisHtml
        }
        console.log(todoListhtml);
        document.querySelector('.list')
        .innerHTML=todoListhtml;

 }

    var allitem=document.querySelector('.list')



    function addTodo() {
        const input= document.querySelector(".todoname");
        const name=input.value;

        const inputdate=document.querySelector(".todate");
        const  dudate=inputdate.value;
        console.log(inputdate);

        //push  method is he add the todo in the array
        todoList.push({name,dudate});
        
        console.log( name,dudate);

        //this is the chenge txet propertis 
        input.value='';
        inputdate.value='';
        
    renderTodoList();

    }
   