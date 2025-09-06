// src/App.jsx
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './index.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const products = [
    { id: 1, name: 'Apple', category: 'Fruits', price: 1.00 },
    { id: 2, name: 'Milk', category: 'Dairy', price: 2.50 },
    { id: 3, name: 'Banana', category: 'Fruits', price: 0.50 },
    { id: 4, name: 'Cheese', category: 'Dairy', price: 4.00 },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
      
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
      
      <label>Filter by Category: </label>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App