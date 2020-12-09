import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Loader from "../../Components/LoadingComponent/LoadingComponent";
import Message from "../../Components/MessageComponent/Message";
import { useDispatch, useSelector } from "react-redux";
import PageCard from "../../Components/CardComponent/PageCard";
import { Row, Col, Button } from "react-bootstrap";
import { listPages } from "../../actions/pagesActions";

const HomePage = () => {
  const dispatch = useDispatch();

  // i destructure what i need from my state store
  const pageList = useSelector((state) => state.pageList);
  let { loading, error, pages } = pageList;

  const [filterPages, setFilterPages] = useState(false);

  const clickHandler = () => setFilterPages(!filterPages);

  //i filter pages based on their isActive attribute

  if (filterPages) {
    pages = pages.filter((page) => !page.isActive);
  }

  //i use the useEffect hook so that i fetch the data when the website is rendered
  useEffect(() => {
    dispatch(listPages());
  }, [dispatch]);

  return (
    <>
      <Button
        className="homepage-button"
        type="button"
        onClick={() => clickHandler()}
      >
        {" "}
        {filterPages ? (
          <h6 className="button-text">show active pages</h6>
        ) : (
          <h6 className="button-text"> show inactive pages</h6>
        )}{" "}
      </Button>
      <h2 className="title">Our Customers' websites</h2>
      <h3 className="sub-title">Click on a card to know more</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <Row>
          {pages.map((page) => {
            return (
              <Col
                key={page.id}
                className="align-items-stretch d-flex"
                sm={12}
                md={6}
                xl={3}
              >
                <PageCard page={page} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomePage;
