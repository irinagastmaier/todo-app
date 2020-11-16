import React from 'react'

export default class TodoContainer extends React.Component {
    state= {
        inputField:""
    }
    // const ToDos =[
    //     {id:1, text:"Breakfast", done:false},
    //     {id:2, text:"Lesson", done:false},
    //     {id:3, text:"Live Coding", done:false},
    //     {id:4, text:"Lunch", done:false},
    //     {id:5, text:"Project", done:false}
    // ]
    addData=(e)=>{
    e.preventDefault()
    console.log(this, "from Child todos container");
    this.props.addItem(this.state.inputField)
    }
    render() {
    return (
        <div className="todos-container">
            <form className="todo-form" onSubmit={this.addData}>
                <label className="input-item">
                    <input type="text" name="todo" onChange={(e)=>this.setState({inputField:e.target.value})}/>
                    {/* means that it is storing everthing that is typing inside this input field */}
                    {/* now need to push in the array inside the App component.  */}
                </label>
                <input className="btn" type="submit" value="ADD"/>
            </form>
            <div className="todos">
                <h3>TO DO</h3>
                {this.props.toDo.map(todo=>{
                    return(
                        <div className="todo-item" key={todo.id}>
                            <p>{todo.text}</p>
                            <button className="btn" onClick={()=>this.props.updateItem(todo.id)}>&#10004;</button>
                            {/* when the user click, it is receiving the data, you are loooping through each item in the map method. in the updatedItem function. */}
                        </div>
                    )
                })}
            </div>
            
        </div>
    )}
}
