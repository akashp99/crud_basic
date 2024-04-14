import React, { useState } from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'
import './index.css'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, item])
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id != id)
    setItems(updatedItems)
  }

  const editItem = (id, newText) => {
    const updatedItems = items.map((item) => item.id === id ? {...item, text: newText} : item)
    setItems(updatedItems)
  }
  
  return (
    <div className='container'>
    <h1>CRUD APP</h1>
    <AddItem addItem={addItem}/>
    <ItemList items={items} deleteItem={deleteItem} editItem={editItem}/>
    </div>
  )
}

export default App