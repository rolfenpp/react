
import '../components/newsLetter.css'
import womanNewsImg from '../assets/womannews.jpg'

const NewsLetter = () => {
    return (
    <div className="newsLetter">
      
            {/* <img src={womanNewsImg} alt="" /> */}
            <h1>Subscribe to our newsletter!</h1>
            <input type="text" placeholder='email adress..' />
            <button>Subscribe</button>

    </div>
    )
}

export default NewsLetter;