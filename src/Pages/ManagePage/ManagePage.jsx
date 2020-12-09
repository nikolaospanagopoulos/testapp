import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/LoadingComponent/LoadingComponent";
import Message from "../../Components/MessageComponent/Message";
import { listPages,deletePage } from "../../actions/pagesActions";

const ManagePage = ({ match }) => {
  const dispatch = useDispatch();
  const pageList = useSelector((state) => state.pageList);
  const { loading, error, pages } = pageList;

  const pageDelete = useSelector((state) => state.pageDelete);
  const { loading:loadingDelete, error:errorDelete ,success:successDelete} = pageDelete;



  useEffect(() => {
    dispatch(listPages());
  }, [dispatch,successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deletePage(id))
    }
  };

  const createWebsite = (page) => {

  }

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Websites</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createWebsite}>
            Create Your Website
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader/>}
      {errorDelete && <Message variant='danger'> {errorDelete} </Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>id</th>
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
                <td> {page.id} </td>
                <td> {page.title} </td>
                <td> {page.description} </td>
                <td> {page.type} </td>
                <td> {page.isActive ? 'true' : 'false'} </td>
                <td> {page.publishedOn} </td>
                <td>
                  <LinkContainer to={`/admin/page/${page.id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                      </Button>
                  </LinkContainer>
                  <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(page.id)}>
                      <i className='fas fa-trash'></i>
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
