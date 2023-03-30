// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

function Faqs(props) {
  const {faqsList} = props
  return (
    <div className="main-container">
      <div className="faq-main">
        <h1 className="main-heading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
