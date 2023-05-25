import './home.css'
import {useState, useEffect} from 'react'


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
            <h1>HOME</h1>

            <input type="text" placeholder='add item' value={inputValue} onChange={handleInput}/>
            <button onClick={handleClick}>Add</button>
            <div>{list.map((item, index) => (
                <p key={index}>{item} {'INDEX: ' + index}</p>
            ))}</div>
        </div>
    )
}


export default Home;