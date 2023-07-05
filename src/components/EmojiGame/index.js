/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

// Quick Tip

//  - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

let Lst

const shuffledEmojisList = emojisList =>
  // const {emojisList} = this.props
  emojisList.sort(() => Math.random() - 0.5)

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojisLists: this.props,
    id: '',
    winOrLoss: true,
  }

  emojiClick = ids => {
    console.log(ids)
    const {id, emojisLists} = this.state
    // const emojisList = {
    //   emojisList: this.shuffledEmojisList(emojisLists.emojisList),
    // }
    // console.log(emojisList)

    // emojisLists: {emojisList}this.setState({emojisLists: {emojisList}})
    this.setState({
      id: ids,
    })

    if (ids !== id) {
      // if (score < emojisList.length) {
      this.setState(prev => ({
        emojisLists: {
          emojisList: shuffledEmojisList(emojisLists.emojisList),
        },
        score: prev.score + 1,
        id: ids,
      }))
      //  }
      //   else {
      //     ;<WinOrLoseCard scoreBoard={{score, topScore, emojisList}} />
      //   }
    } else {
      console.log('game failed')
      Lst = emojisLists
      this.setState({winOrLoss: false})
    }
  }

  playAgain = (score, topScore) => {
    const {emojisLists, winOrLoss} = this.state
    if (score === emojisLists.emojisList.length) {
      this.setState({score: 0, topScore: 0})
    } else {
      if (score > topScore) {
        this.setState({
          score: 0,
          topScore: score,
          emojisLists: {
            emojisList: shuffledEmojisList(emojisLists.emojisList),
          },
          id: '',
          winOrLoss: true,
        })
      }
      //   else if (score > topScore) {
      //     this.setState({score: 0, topScore: score})
      //   }
      this.setState(prev => ({
        score: 0,
        topScore: prev.topScore,
        emojisLists: {
          emojisList: shuffledEmojisList(emojisLists.emojisList),
        },
        id: '',
        winOrLoss: true,
      }))

      // this.setState({score: 0, topScore: score})
    }
  }

  render() {
    const {score, topScore, emojisLists, winOrLoss} = this.state
    // const {emojisList} = this.props
    console.log(emojisLists)
    console.log(this.state)
    console.log(Lst === emojisLists)
    const check = Lst === emojisLists
    console.log(check)

    console.log(check)

    return (
      <div>
        {winOrLoss ? (
          <div className="app-container">
            <div className="bg-container">
              <div>
                {score === emojisLists.emojisList.length ? (
                  <div>
                    <NavBar scoreDetails={{score, topScore, check}} />
                    <WinOrLoseCard
                      scoreBoard={{score, topScore, emojisLists}}
                      playAgainBtn={this.playAgain}
                      winorLos={winOrLoss}
                    />
                  </div>
                ) : (
                  <div>
                    <NavBar
                      scoreDetails={{score, topScore, check}}
                      checks={check}
                    />
                    <ul className="emoji-List-Items">
                      {emojisLists.emojisList.map(each => (
                        <EmojiCard
                          emojiListItem={each}
                          key={each.id}
                          emojiClick={this.emojiClick}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="app-container">
            <div className="bg-container">
              {/* (
            <div>
              <NavBar scoreDetails={{score, topScore}} />
              <WinOrLoseCard
                scoreBoard={{score, topScore, emojisLists}}
                playAgainBtn={this.playAgain}
              />
              )
            </div>
            ) */}
              {!Lst !== emojisLists ? (
                <div>
                  <NavBar scoreDetails={{score, topScore, check}} />
                  <WinOrLoseCard
                    scoreBoard={{score, topScore, emojisLists}}
                    playAgainBtn={this.playAgain}
                    winorLos={winOrLoss}
                  />
                </div>
              ) : (
                <div>
                  <NavBar scoreDetails={{score, topScore}} checks={check} />
                  <ul className="emoji-List-Items">
                    {emojisLists.emojisList.map(each => (
                      <EmojiCard
                        emojiListItem={each}
                        key={each.id}
                        emojiClick={this.emojiClick}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
