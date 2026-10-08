import './style.css'

function App() {
  return (
    <div className="player">
      <img 
        src="https://img.magnific.com/free-vector/cute-cafe-cat-sticker-set-vector-illustration_56104-3309.jpg?semt=ais_hybrid&w=740&q=80" 
        alt="Cute Cafe Cat" 
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