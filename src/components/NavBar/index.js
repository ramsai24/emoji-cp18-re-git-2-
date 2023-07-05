// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreDetails, checks} = props
  console.log(props)
  const {score, topScore, check} = scoreDetails
  // console.log(checks)
  console.log(`check: ${check}`)

  if (score === 12) {
    return (
      <nav className="nav-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
      </nav>
    )
  }
  if (check === true) {
    return (
      <nav className="nav-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav-container">
      <div className="inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>

      <ul className="score-items inner-container">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </ul>
    </nav>
  )
}

export default NavBar
