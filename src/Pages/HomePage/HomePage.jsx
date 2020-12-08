import React, { useEffect, useState } from 'react';
import axios from 'axios'
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
            <h3>Click on a card to know more</h3>
        </div>
        <Row>
            {pages.map((page)=> {
                return (
                    <Col key={page.id}>
                         {page.title} 
                         </Col>
                )
            })}
        </Row>
        </>
    );
}
 
export default HomePage;