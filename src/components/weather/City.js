import React, { useEffect, useState } from 'react';

//styles
import "./styles/city.scss"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';

//icons
import tempIcon from "./styles/img/tempicon/2x/icon2.png"
import clockIcon from "./styles/img/clockIcon/1x/clock.png"
import todayIcon from "./styles/img/todayIcon/1x/today.png"
import dropIcon from "./styles/img/dropIcon/1x/drop.png" 
import windIcon from "./styles/img/windIcon/1x/wind.png"
import upArrow from "./styles/img/arrowUpIcon/1x/up.png"
import downArrow from "./styles/img/arrowDownIcon/1x/down.png"

const City = ({name, country, temp, description, icon, sunRise, sunSet, humidity, wind ,minTemp ,maxTemp}) => {
    const image = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const houre = new Date().getHours();
    const minutes = new Date().getMinutes();

    const [day , setDay] = useState("");
    const date= new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    

    useEffect(()=>{
        switch (new Date().getDay()) {
        case 0:
            setDay("SunDay");
          break;
        case 1:
            setDay( "Monday");
          break;
        case 2:
            setDay( "Tuesday");
          break;
        case 3:
            setDay( "Wednesday");
          break;
        case 4:
            setDay( "Thursday");
          break;
        case 5:
            setDay( "Friday");
          break;
        case 6:
            setDay( "Saturday");
          break;
        default:
            setDay("not detected");
      };
    },[])


    return (
        <div className='forecastDiv'>
            <div className='mainInfoDiv'>
                <div>
                    <p className='name'>{name},{country}</p>
                    <p>{description}</p>
                    <img src={image} alt='icon' className='icon'/>
                    <div className='tempDiv'>
                        <img src={tempIcon} alt="temp-icon"/>
                        <p className='temperature'>{Math.round(temp)}</p>
                        <span className='metric'>°C</span>
                    </div>
                </div>
            </div>
            <div className='dateAndTime'>
                <Row className='dataRow'>
                    <Col sm={6}>
                        <div className='innerTimeDiv'>
                            <img src={clockIcon} alt="clock icon"/>
                            <p>{houre} : {minutes}</p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='innerTimeDiv'>
                            <img src={todayIcon} alt="calender icon"/>
                            <p>{day} , {month+1}/{date}/{year}</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='moreInfo'>
                <Row className='dataRow'>
                    <Col sm={6}>
                        <div className='innerWeatherDiv'>
                            <img src={upArrow} alt="up icon"/>
                            <p><span>max temp </span>: {Math.round(maxTemp)} °C</p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='innerWeatherDiv'>
                            <img src={downArrow} alt="down icon"/>
                            <p><span>min temp </span>: {Math.round(minTemp)} °C</p>
                        </div>
                        
                    </Col>
                </Row>
                <Row className='dataRow'>
                    <Col sm={6}>
                        <div className='innerWeatherDiv'>
                            <img src={dropIcon} alt="drop icon"/>
                            <p>humidity : {humidity}%</p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='innerWeatherDiv'>
                            <img src={windIcon} alt="wind icon"/>
                            <p>wind : {wind} <span>km/h</span></p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default City;