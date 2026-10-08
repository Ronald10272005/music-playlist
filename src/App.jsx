import './style.css'

function App() {
  return (
    <div className="player">
      <img 
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
        alt="Cover" 
      />

      <h2>Music Time</h2>
      <p>Kalapastangan</p>

      <div className="progress">
        <div className="bar"></div>
      </div>
      <div className="time">
        <span>05:00</span>
        <span>10:10</span>
      </div>

      <div className="controls">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>

      <div className="volume">
        <span>🔈</span>
        <div className="bar"></div>
        <span>🔊</span>
      </div>
    </div>
  )
}

export default App