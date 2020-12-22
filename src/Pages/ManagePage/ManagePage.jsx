import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/LoadingComponent/LoadingComponent";
import Message from "../../Components/MessageComponent/Message";
import { listPages, deletePage, createPage } from "../../actions/pagesActions";
import { PAGES_CREATE_RESET } from "../../constants/pagesConstants";
import "./ManagePage.css";
import Moment from 'react-moment';
//i use the history prop so that i can redirect automaticaly
const ManagePage = ({ history }) => {
  const dispatch = useDispatch();

  //i destructure what i need from my redux store state
  const pageList = useSelector((state) => state.pageList);
  const { loading, error, pages } = pageList;

  const pageDelete = useSelector((state) => state.pageDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = pageDelete;

  const pageCreate = useSelector((state) => state.pageCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    page: createdPage,
  } = pageCreate;

  
  useEffect(() => {
    //we reset the state so that when we return to this page we don't see any messages
    dispatch({ type: PAGES_CREATE_RESET });
    if (successCreate) {
      history.push(`/admin/page/${createdPage.id}/edit`);
    } else {
      dispatch(listPages());
    }
  }, [dispatch, successDelete, history, successCreate, createdPage]);

  const deleteHandler = (id) => {
    //i add this window message in order to prevent an involuntary deletion
    if (window.confirm("Are you sure ?")) {
      dispatch(deletePage(id));
    }
  };

  //i dispatch the create website action
  const createWebsite = () => {
    dispatch(createPage());
  };

  
  return (
    <>
      <Row className="align-items-center ">
        <Col>
          <h1 className="managepage-title">Pages</h1>
  
        </Col>
        <Col className="text-right">
          <Button
            className="my-3"
            onClick={() => createWebsite()}
            style={{ backgroundColor: "#343a40" }}
          >
            Create Your page
          </Button>
        </Col>
      </Row>
      {loadingDelete ? (
        <Loader />
      ) : loading ? (
        <Loader />
      ) : loadingCreate ? (
        <Loader />
      ) : errorDelete ? (
        <Message variant="danger"> {errorDelete} </Message>
      ) : error ? (
        <Message> {error} </Message>
      ) : errorCreate ? (
        <Message variant="danger"> {errorCreate} </Message>
      ) : (
        <Table striped bordered hover responsive className="table-md ">
          <thead>
            <tr>
              <th>title</th>
              <th>description</th>
              <th>type</th>
              <th>isActive</th>
              <th>publishedOn</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td> {page.title} </td>
                <td> {page.description} </td>
                <td> {page.type===0 ? 'menu' : page.type===1 ? 'events' : page.type===2 ? 'content' : 'not available type'} </td>
                <td> {page.isActive ? "true" : "false"} </td>
                <td> <Moment date={page.publishedOn}/></td>
                <td>
                  <LinkContainer to={`/admin/page/${page.id}/edit`}>
                    <Button variant="light" className="btn-sm" title='update'>
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    title='delete'
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(page.id)}
                  >
                    <i className="fas fa-trash" ></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ManagePage;
