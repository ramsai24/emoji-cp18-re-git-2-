// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {scoreBoard, playAgainBtn, winorLos} = props
  const {score, topScore, emojisLists} = scoreBoard

  console.log(`win or Loss ${winorLos}`)

  const playAgainId = () => {
    playAgainBtn(score, topScore)
  }

  return (
    <div>
      {winorLos ? (
        <div>
          <div>
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>{score}/12</p>
            <button type="button" onClick={playAgainId}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      ) : (
        <div>
          <div>
            <h1>You Lose</h1>
            <p> Score</p>
            <p>{score}/12</p>
            <button type="button" onClick={playAgainId}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
