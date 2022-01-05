import React, { useEffect, useState } from 'react';

//styles
import "./styles/city.scss"



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
      };
    },[])


    return (
        <div className='forecastDiv'>
            <div className='mainInfoDiv'>
                <p className='name'>{name},{country}</p>
                <p>{description}</p>
                <img src={image} alt='image' className='icon'/>
                <div className='tempDiv'>
                    <img src={tempIcon} alt="temp-icon"/>
                    <p className='temperature'>{Math.round(temp)}</p>
                    <span className='metric'>°C</span>
                </div>
            </div>
            <div className='dateAndTime'>
                <div className='time'>
                    <img src={clockIcon} alt="clock icon"/>
                    <p>{houre} : {minutes}</p>
                </div>
                <div className='date'>
                    <img src={todayIcon} alt="calender icon"/>
                    <p>{day} , {month+1}/{date}/{year}</p>
                </div>
            </div>
            <div className='moreInfo'>
                <div>
                    <div className='humidityDiv'>
                        <img src={dropIcon} alt="drop icon"/>
                        <p>humidity : {humidity}%</p>
                    </div>
                </div>
                <div>
                    <div className='windDiv'>
                        <img src={windIcon} alt="wind icon"/>
                        <p>wind speed : {wind} <span>km/h</span></p>
                    </div>
                </div>
            </div>
            <div className='moreInfo2'>
                <div>
                    <div className='maxTemp'>
                        <img src={upArrow} alt="up icon"/>
                        <p>{Math.round(maxTemp)} °C</p>
                    </div>
                </div>
                <div>
                    <div className='minTemp'>
                        <img src={downArrow} alt="down icon"/>
                        <p>{Math.round(minTemp)} °C</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default City;