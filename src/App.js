import React from 'react' // you don't need to mention it, because the 17.01 version of react already recognizes without it.
import Navigation from './Components/Navigation'
import TodoContainer from'./Components/TodoContainer'
import ToDonesContainer from './Components/ToDonesContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './Components/About'
import NotFound from "./Components/NotFound"
import'./css/App.scss'

console.log(localStorage)
// let data ={
//   name:"Ali",
//   age:23
// }

//DON'T STORE IMPORTANT DATA INSIDE THE LOCAL STORAGE
// JSON.stringify()
//JSON.parse
//localStorage.setItem("data", JSON.stringify(data))
//console.log(JSON.parse(localStorage.getItem("to-do-app")).age)
//you will pass the data as a key(string value) and store it as a value
//localStorage.setItem("to-do-app","abc") //set the data
//console.log(localStorage.getItem("to-do-app"))// retrieve the data
//localStorage.removeItem() //delete the data



class App extends React.Component {
    // place the todo and the todones data in the same place
    state ={
      todoItems:[
        // {id:0, text:"Breakfast", done:false},
        // {id:1, text:"Lesson", done:false},
        // {id:2, text:"Live Coding", done:false},
        // {id:3, text:"Lunch", done:false},
        // {id:4, text:"Project", done:false},
        // {id:5, text:"Coding Practice", done:true},
        // {id:6, text:"Exercises", done:true},
        // {id:7, text:"Project 1", done:true}
      ]
    }

    componentDidMount() {
      //onload
      let data = localStorage.getItem("todo-app");
      if(data){// need to add this method, because the data is null (with empty array)
      // localStorage.setItem("todo-app") --> this key --> string data and need to convert the data to an array
      let convertedData = JSON.parse(data)
      this.setState({
        todoItems: convertedData
      })}
    }

    addItem = (value) => {
      console.log(this, "from parent container");
      let item ={id:this.state.todoItems.length, text:value, done:false}
      // now need to add this item inside the state --> here is using the Index0 + length. 
      //the push method will not work in here, only the setState
      //this is the callback
      let copystate =[...this.state.todoItems]
      copystate.push(item)
      this.setState({
        todoItems:copystate
      }, ()=>{
        localStorage.setItem("todo-app", JSON.stringify(this.state.todoItems))
        //here is passing a callback
        //in this way, when you reload the page the localStorage have the data, but it is not showing in the browser, because in the state is empty. to fix these problem is used componentDidMount
      });
      //localStorage.setItem("todo-app", JSON.stringify(copystate))
      // todo-app is a key --> this.state.todoItems is an array and for that need to use  JSON.stringify --> setState is an asycronous code and localStorage is sycronous code. so setState is executing first as localStore and that is why it is passing copystate instead this.state.todoItems
    }

    updateItem =(id)=> {
      let updatedItems = this.state.todoItems.map(item => {
        if(item.id===id){
          item.done = !item.done
          return item
        } else{
          return item
        }
      })
      this.setState({
        todoItems:updatedItems
      }, ()=>{
        localStorage.setItem("todo-app", JSON.stringify(this.state.todoItems))
        //you also need to update your local storage in setState.
      })
    }

    deleteItem=(id)=>{
      let Copystate=[...this.state.todoItems];
      let updatedData = Copystate.filter(item => item.id !== id);
      this.setState({
        todoItems: updatedData
      }, () =>{
        localStorage.setItem("todo-app", JSON.stringify(this.state.todoItems))
      })
    }


  render(){
  let toDo= this.state.todoItems.filter(item=>!item.done);
  // here is !, because it is going through all the items and select only if the value if false
  let toDones= this.state.todoItems.filter(item=>item.done);
  return (
    <BrowserRouter>
    <div className="app">
     <Navigation/>
     <Switch>
    <Route  exact path="/"> 
    <TodoContainer toDo={toDo} addItem={this.addItem} updateItem={this.updateItem}/>
     {/* need to pass the uptadeItem function as a props in the TodoConatiner file. */}
     <ToDonesContainer toDones={toDones} updateItem={this.updateItem} deleteItem={this.deleteItem}/>
     </Route>
     <Route path="/about" component={About} />
     <Route component={NotFound} /> 
     {/* Default case */}
     </Switch>
     {/* here it is passing the properties as a props to the child container */}
    </div>
    </BrowserRouter>
    );}
}

export default App;
