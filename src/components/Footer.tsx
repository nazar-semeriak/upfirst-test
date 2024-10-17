import React from 'react'
import './Footer.css'

interface FooterProps {
  onNext: () => void
  onPrev: () => void
  disablePrev: boolean
  disableNext: boolean
}

const Footer: React.FC<FooterProps> = ({ onNext, onPrev, disablePrev, disableNext }) => {
  return (
    <footer className="footer">
      <div>
        <button onClick={onPrev} disabled={disablePrev}>
          Previous Page
        </button>
        <button onClick={onNext} disabled={disableNext}>
          Next Page
        </button>
      </div>
      <div className="help-center">
        <button className="bth-help-center">Help Center</button>
      </div>
    </footer>
  )
}

export default Footer
