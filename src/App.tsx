// src/App.tsx
import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import CardList from './components/CardList'
import Footer from './components/Footer'
import { Item } from './types/ItemType'
import './index.css'

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10 // Number of items to display per page
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    // Fetch data from HackerNews API
    fetch(`https://hn.algolia.com/api/v1/search?tags=front_page`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.hits) // Set all fetched items
        setTotalItems(data.hits.length) // Store total items count
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setItems([]) // Clear items on error
      })
  }, [])

  // Calculate items for the current page
  const currentItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const handleRemove = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.objectID !== id))
  }

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < totalItems) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        {currentItems.length > 0 ? <CardList items={currentItems} onRemove={handleRemove} /> : <p style={{ textAlign: 'center', padding: '20px' }}>No data available</p>}
        <Footer onNext={handleNext} onPrev={handlePrev} disablePrev={currentPage === 0} disableNext={(currentPage + 1) * itemsPerPage >= totalItems} />
      </div>
    </div>
  )
}

export default App
