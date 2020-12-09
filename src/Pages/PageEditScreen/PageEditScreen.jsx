import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Components/MessageComponent/Message";
import Loader from "../../Components/LoadingComponent/LoadingComponent";
import { listPageDetails ,updatePage} from "../../actions/pagesActions";
import { PAGES_UPDATE_RESET } from "../../constants/pagesConstants";

const PageEditScreen = ({ match,history }) => {
  const pageId = match.params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(1);
  

  const dispatch = useDispatch();

  const pageDetails = useSelector((state) => state.pageDetails);
  const { loading, error, page } = pageDetails;


  const pageUpdate = useSelector((state) => state.pageUpdate);
  const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = pageUpdate;


  useEffect(() => {
      if(successUpdate){
          dispatch({type:PAGES_UPDATE_RESET})
          history.push('/admin/pageList')
      }else{
        if (page.id !== pageId) {
            dispatch(listPageDetails(pageId));
          } else {
            setTitle(page.title);
            setDescription(page.description);
            setType(page.type);
           
          }
      }
   
  }, [dispatch, pageId, page,history,successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePage({
        id:pageId,
        title,
        description,
        type,
        publishedOn: new Date()
    }))
  };

  return (
    <>
      <Link to="/admin/pageList" className="btn btn-dark my-3">
        Go Back
      </Link>
      <div>
        <h1>Edit website</h1>
        {loadingUpdate && <Loader/>}
        {errorUpdate && <Message variant='danger'> {errorUpdate} </Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger"> {error} </Message>
        ) : (
          <Form onSubmit={submitHandler}>


            <Form.Group controlId="title">
              <Form.Label> Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label> Description </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label> Type </Form.Label>
              <Form.Control
                type="number"
                placeholder="enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></Form.Control>
            </Form.Group>

            
            <Button type="submit" variant="primary">
              {" "}
              Update{" "}
            </Button>
          </Form>
        )}
      </div>
    </>
  );
};

export default PageEditScreen;
