
import React from 'react'
import Card from './Card'
import { Item } from '../types/ItemType'
import './CardList.css'

interface CardListProps {
  items: Item[]
  onRemove: (id: string) => void
}

const CardList: React.FC<CardListProps> = ({ items, onRemove }) => {
  return (
    <ul className="card-list">
      {items.map((item) => (
        <li key={item.objectID}>
          <Card item={item} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  )
}

export default CardList
