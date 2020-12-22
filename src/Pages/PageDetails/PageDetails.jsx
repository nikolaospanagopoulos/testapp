import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col,ListGroup} from "react-bootstrap";
import { listPageDetails } from "../../actions/pagesActions";
import { Link } from "react-router-dom";

import Loader from '../../Components/LoadingComponent/LoadingComponent'
import Message from '../../Components/MessageComponent/Message'
import './PageDetails.css'
import moment from 'moment';



const PageDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();

  //i destructure what i want from my state
  const pageDetails = useSelector((state) => state.pageDetails);
  const { loading, error, page } = pageDetails;

  useEffect(() => {
    //i get the id of the page by using the url parameters so i use the match prop
    dispatch(listPageDetails(match.params.id));
  }, [dispatch, match]);
  let date = moment(page.publishedOn)
  date = String(date)
  console.log(date)
  return (
    <>
      <Link className="btn btn-dark my-3" to='/'> Go Back </Link>
      <Link className="btn btn-dark my-3" to={`/admin/page/${page.id}/edit`}> edit website </Link>
      {loading ? <Loader/> : error ? <Message variant='danger'> {error} </Message> : (
        
        <Row>
          
        <Col>
        <h3 className='details-title'>Website Details</h3>
           <ListGroup className='page-details'>
               <ListGroup.Item>
                   <h3> Page title: {page.title} </h3>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h3> description: {page.description} </h3>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h3> page type: {page.type===0 ? 'menu' : page.type===1 ? 'events' : page.type===2 ? 'content' : 'not available type'}  </h3>
               </ListGroup.Item>
              
               <ListGroup.Item>
                   <h3> date: {date} </h3>
               </ListGroup.Item>
               
               <ListGroup.Item>
                   <h3> active page: {page.isActive ? 'true' : 'false'}</h3>
               </ListGroup.Item>
           </ListGroup>
        </Col>
      </Row>
      )}
      
    </>
  );
};

export default PageDetailsScreen;
