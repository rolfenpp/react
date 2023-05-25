import {useEffect, useState}from 'react'
import axios from 'axios'

function Ip() {
    const [userIp, setUserIp] = useState('')
    const [userCountry, setUserCountry] = useState('')

useEffect(() => {
    getUserIp();
},[])

const getUserIp = async () => {
    const ip = await axios.get('https://ipapi.co/json')
    console.log(ip.data)
    setUserIp(ip.data.ip)

    if (ip.data.country_name == 'Sweden') {
        setUserCountry('🔷')
    }
    
}
    return (
        <>
            <h1>Your ip adress:{userCountry} {userIp}</h1>
        </>
    );
}

export default Ip;