import '../components/twoimg.css'
import dumbell from '../assets/dumbells.jpg'
import machine from '../assets/gymmachine.jpg'

const Twoimg = () => {
    return (
        <div className="twoimg">
            <div>
               <img src={dumbell} alt="dumbell" />
            </div>
            <div>
               <img src={machine} alt="machine" />
            </div>
        </div>
    )
}

export default Twoimg;