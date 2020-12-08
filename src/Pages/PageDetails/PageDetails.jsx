import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col,ListGroup, Button } from "react-bootstrap";
import { listPageDetails } from "../../actions/pagesActions";
import { Link } from "react-router-dom";
import Loader from '../../Components/LoadingComponent/LoadingComponent'
import Message from '../../Components/MessageComponent/Message'

const PageDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const pageDetails = useSelector((state) => state.pageDetails);
  const { loading, error, page } = pageDetails;

  useEffect(() => {
    dispatch(listPageDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-dark my-3" to='/'> Go Back </Link>
      {loading ? <Loader/> : error ? <Message variant='danger'> {error} </Message> : (
        <Row>
        <Col>
           <ListGroup>
               <ListGroup.Item>
                   <h3> Website name: {page.title} </h3>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h3> description: {page.description} </h3>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h3> published On: {page.publishedOn} </h3>
               </ListGroup.Item>
           </ListGroup>
        </Col>
      </Row>
      )}
      
    </>
  );
};

export default PageDetailsScreen;
