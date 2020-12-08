import React, { useEffect} from 'react';
import './HomePage.css'
import Loader from '../../Components/LoadingComponent/LoadingComponent'
import Message from '../../Components/MessageComponent/Message'
import {useDispatch,useSelector} from 'react-redux'
import PageCard from '../../Components/CardComponent/PageCard'
import {Row,Col} from 'react-bootstrap'
import {listPages} from '../../actions/pagesActions'


const HomePage = () => {
    const dispatch = useDispatch()

    const pageList = useSelector(state => state.pageList)
    const {loading,error,pages} = pageList

    useEffect(()=>{
        dispatch(listPages())
    },[dispatch])


    return (
        <>  
        
            <h2 className='title'>Our Customers' websites</h2>
            <h3 className='sub-title'>Click on a card to know more</h3>
        {loading ? <Loader/> : error ? (<Message variant = 'danger'> {error} </Message>) : (
            <Row>
            {pages.map((page)=> {
                return (
                    <Col key={page.id} className='align-items-stretch d-flex'  sm={12} md={6} xl={3}>
                         <PageCard page={page}/> 
                         </Col>
                )
            })}
        </Row>
        )}
        
        </>
    );
}
 
export default HomePage;