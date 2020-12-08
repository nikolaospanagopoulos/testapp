import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './HomePage.css'
import PageCard from '../../Components/CardComponent/PageCard'
import {Row,Col} from 'react-bootstrap'
const HomePage = () => {
    const [pages,setPages] =useState([])

    useEffect(()=>{
        const fetchPages = async ()=> {
            const {data} = await axios.get('https://pagesmanagement.azurewebsites.net/api/ResponsivePages')
            setPages(data)
           
        }
        fetchPages()
    },[])
    return (
        <>  
        <div>
            <h2 className='title'>Our Customers' websites</h2>
            <h3 className='sub-title'>Click on a card to know more</h3>
        </div>
        <Row>
            {pages.map((page)=> {
                return (
                    <Col key={page.id} className='align-items-stretch d-flex'  sm={12} md={6} xl={3}>
                         <PageCard page={page}/> 
                         </Col>
                )
            })}
        </Row>
        </>
    );
}
 
export default HomePage;