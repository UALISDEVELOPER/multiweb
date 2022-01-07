import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

//components
import City from './City';

//styles
import "./styles/weather.scss"

//react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//images
import weatherIllustration from "./styles/img/Weather.gif";
import searchIcon from "./styles/img/searchIcon/2x/search.png"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Row, Col , Container} from 'react-bootstrap';

const Weather = () => {

    const [weatherData, setWeatherData] = useState([]);

    const [search, setSearch] = useState("");

    const [load , setLoad] = useState(false)

    const searchHandler = event =>{
        setSearch(event.target.value)
    }

    useEffect(()=>{
        weatherData.length === 0 ? setLoad(false) : setLoad(true);
    },[weatherData])

    const EnterHandler = (e)=>{
        if(e.key==="Enter"){
            clickHandler();
        }
    }


    const apiKEY = "213e1b10d0a8c32ba08147337ce2de65";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${search.trim()}&appid=${apiKEY}&units=metric`;


    const clickHandler = ()=>{
        axios.get(apiURL)
            .then(response => setWeatherData(response.data))
            // .catch((error)=>console.log(error.response.data.message))
            .catch((error)=>fail(error.response.data.message))
    }

    // const searchIcon = useRef(null);

    const animationHandler =()=>{
        let searchBox = document.getElementById("searchBox");
        searchBox.classList.toggle("searchBoxAnimation");
    }

    const fail =(message)=>toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    return (
        <Container lg="true" className='main'>
            <div className='headerDiv'>
                <h1>Weather forecast</h1>
            </div>
            <Row className="justify-content-md-center">
                        <Col lg={6}>
                            <div className='imageDiv'>
                                <Image fluid className='image' src={weatherIllustration} alt="weather illustration"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='weatherContainer'>
                                <div>
                                    <div className='searchBox' id="searchBox">
                                        <Image src={searchIcon} alt="search icon" className='searchIcon'/>
                                        <input className='searchInput' type="text" placeholder="Search a city" value={search} onChange={searchHandler} onKeyDown={EnterHandler} onClick={animationHandler} />
                                    </div>
                                    <div className='buttonBox'>
                                        <button onClick={clickHandler}>Search</button>
                                    </div>
                                </div>
                                {load&&
                                    <City name={weatherData.name} country={weatherData.sys.country} temp={weatherData.main.temp} description={weatherData.weather[0].description} icon={weatherData.weather[0].icon} sunRise={weatherData.sys.sunrise} sunSet={weatherData.sys.sunset} humidity={weatherData.main.humidity} wind={weatherData.wind.speed} minTemp={weatherData.main.temp_min} maxTemp={weatherData.main.temp_max} />
                                }
                            </div>  
                        </Col>
                </Row>


            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
            />
        </Container>
    );
};

export default Weather;