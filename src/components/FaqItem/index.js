// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onButtonClicked = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderImage = () => {
    const {isActive} = this.state
    if (isActive) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
          alt="minus"
        />
      )
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
      />
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li>
        <div className="question-tab">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.onButtonClicked}>
            {this.renderImage()}
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
