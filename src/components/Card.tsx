
import React, { useState } from 'react'
import { Item } from '../types/ItemType'
import './Card.css'

interface CardProps {
  item: Item
  onRemove: (id: string) => void
}

const Card: React.FC<CardProps> = ({ item, onRemove }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <div className="card-header">
        <span className="card-name">{item.title}</span>
        <span className="card-time">{new Date(item.created_at).toLocaleString()}</span>
      </div>
      {expanded && (
        <div className="card-body">
          <p>Author: {item.author}</p>
          <button onClick={() => onRemove(item.objectID)}>Remove</button>
        </div>
      )}
    </div>
  )
}

export default Card
