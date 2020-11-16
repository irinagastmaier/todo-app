import React from 'react'

export default function ToDonesContainer({toDones, updateItem, deleteItem}) {
    //here in the ToDonesContainer({toDones, updateItem}), you can pass it also as ToDonesContainer(props) and in the  use: {props.toDones.map(todone=>{
    // const toDones =[
    //     {id:1, text:"Coding Practice", done:true},
    //     {id:2, text:"Exercises", done:true},
    //     {id:3, text:"Project 1", done:true}
    // ]
    // when you have a mutable/ changable data you need to put it inside the state. 
    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDones.map(todone=>{
                return(
                    <div className="todones-item" key={todone.id}>
                        <p>{todone.text}</p>
                        <button className="btn" onClick={()=>updateItem(todone.id)}>&#8635;</button>
                        <button className="btn" onClick={()=>deleteItem(todone.id)}>&#x2718;</button>
                    </div>
                )
            })}
            
        </div>
    )
}
