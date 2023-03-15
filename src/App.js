import React, { useState } from 'react';

import ToDoList from './todolist'


const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItem] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItem((oldItems) => {
            if(inputList==="")
            {
                return [...oldItems]
            }
            return [...oldItems, inputList]
        })
        setInputList('');

    }

     const deleteItem = (id) => {

        setItem((oldItems)=>{
            return oldItems.filter((arrEl, index)=>{
                return index !== id ;
            })
        })

    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>To Do List</h1>
                    <br />
                    <input type="text" placeholder='Add an Item' autoComplete='off' value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>
                    <ol>

                        {
                            items.map((val, index) => {
                                return <ToDoList 
                                            text={val} 
                                            key={index}
                                            id={index}
                                            onSelect = {deleteItem}
                                            />
                            })
                        }
                    </ol>

                </div>
            </div>
        </>
    );
};

export default App;