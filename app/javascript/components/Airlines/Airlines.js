import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Airline from './Airline'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h2 {
        font-size: 42px;
    }
`
const Subeader = styled.div`
    font-weight: 300;
    font-size: 26px
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Airlines = () => {

    const [airlines, setAirlines] = useState([])

    useEffect(()=>{
        axios.get('api/v1/airlines.json')
            .then(resp => setAirlines(resp.data.data))
            .catch(resp => { console.log(resp) })
    }, [airlines.length])

    const grid = airlines.map(item => {
        return (
            <Airline key={item.attributes.name} attributes={item.attributes} />
        )
    })

    return (
        <Home>
            <Header>
                <h2>OpenFlights</h2>
            </Header>
            <Subeader>
                Honest, unbiased airline reviews.
            </Subeader>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Airlines