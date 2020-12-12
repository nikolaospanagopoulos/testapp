import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Components/MessageComponent/Message";
import Loader from "../../Components/LoadingComponent/LoadingComponent";
import { listPageDetails ,updatePage} from "../../actions/pagesActions";
import { PAGES_UPDATE_RESET } from "../../constants/pagesConstants";
import './PageEditScreen.css'

const PageEditScreen = ({ match,history }) => {
  const pageId = match.params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState();
  

  const dispatch = useDispatch();

  const pageDetails = useSelector((state) => state.pageDetails);
  const { loading, error, page } = pageDetails;


  const pageUpdate = useSelector((state) => state.pageUpdate);
  const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = pageUpdate;
  const [isActive, setIsActive] = useState(Boolean);

  useEffect(() => {
      if(successUpdate){
          dispatch({type:PAGES_UPDATE_RESET})
          history.goBack()
      }else{
        if (page.id !== pageId) {
            dispatch(listPageDetails(pageId));
          } else {
            setTitle(page.title);
            setDescription(page.description);
            setType(page.type);
            setIsActive(page.isActive)
            
           
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
        isActive,
        publishedOn: new Date()
    }))
  };

  return (
    <>

      <Button onClick={()=>history.goBack()}>Go back</Button>
      <div>
      
        <h1 className='editpage-title'>Edit Page</h1>
        {loadingUpdate && <Loader/>}
        {errorUpdate && <Message variant='danger'> {errorUpdate} </Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger"> {error} </Message>
        ) : (
          <Form onSubmit={submitHandler} className='form-edit'>


            <Form.Group controlId="title">
              <Form.Label> Title </Form.Label>
              <Form.Control
                type="text"
                placeholder={page.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label> Description </Form.Label>
              <Form.Control
                type="text"
                placeholder={page.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label> Type </Form.Label>
              <Form.Control
                type='number'
                placeholder={page.type}
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></Form.Control>
            </Form.Group>

            
            <Form.Group controlId='isactive'>
             
            <Form.Check
            type="checkbox" 
            label="is the website active?"
            
            value={isActive}
            onChange={(e)=>setIsActive(e.target.checked)}
             />
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
