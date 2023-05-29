import './home.css'
import {useState, useEffect} from 'react'
import Carousel from '../components/Carousel'
import Swiperx from '../components/Swiperx'
import Deals from '../components/Deals'
import Twoimg from '../components/Twoimg'
import NewsLetter from '../components/NewsLetter'

/* const [object, setObject] = useState({namn: 'Olle', ålder: 25}) */
/* {id: 1, text: 'hej'} */
const Home = () => {

    const [list, setList] = useState(['hej', 'xYx'])
    const [inputValue, setInputValue] = useState('')

    function handleInput(event)  {
        setInputValue(event.target.value)
    }

    const handleClick = () => {
        setList([inputValue, ...list])
       /*  console.log(list) */
    }
    useEffect(() =>  {
        /* console.log('X ' + list) */
    })

    return (
        <div className="Home">

            <div className='swiper-hero'>
                <Swiperx />
            </div>

            <div><h1>Summer Sale!</h1></div>

            <div className='swiper-deals'>
                <Deals />
            </div>
            <div>
                <Twoimg />
            </div>

            <div>
                <NewsLetter />
            </div>
        </div>
    )
}


export default Home;