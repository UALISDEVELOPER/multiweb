import React, { useEffect, useState } from 'react';
import axios from "axios"

//components
import Row from "./Row"
import RowPlaceholder from './RowPlaceholder';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table , row } from 'react-bootstrap';
//styles
import "./styles/crypto.scss"

const Crypto = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    
    const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

    useEffect(()=>{
        axios.get(apiURL)
            .then(response => setData(response.data))
    }, []);

    const searchHandler = event =>{
        setSearch(event.target.value)
    }

    const filtered = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()))

    return (
        <div className='cryptoFillContainer'>
            <Container fluid="md" className='cryptoContainer'>
                    <div className='header'>
                        <h1 >Top 200 cryptocurrency</h1>
                    </div>
                    <div className='searchDiv'>
                        <input className='searchInput' type="text" placeholder="Search cryptocurrency name ..." value={search} onChange={searchHandler}/>
                    </div>
                    <div className='tableDiv'>
                        <Table responsive striped bordered hover variant="dark" className='table'>
                            <thead>
                                <tr>
                                    <th>Coin</th>
                                    <th>Symbol</th>
                                    <th>Price</th>
                                    <th>price change 24h</th>
                                    <th>Market cap</th>
                                </tr>
                            </thead>
                            
                                {data.length? 
                                        
                                        <tbody>
                                        {filtered.map(item => <Row key={item.id} symbol={item.symbol} name={item.name} image={item.image} price={item.current_price} cap={item.market_cap} priceChange={item.price_change_24h}/> )}
                                        </tbody> 
                                        :
                                        
                                        <RowPlaceholder />
                                }
                            
                        </Table>
                    </div>
                
            </Container>
        </div>
    );
};



export default Crypto;