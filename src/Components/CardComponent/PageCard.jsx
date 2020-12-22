import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from 'moment';


import CardBackground from "../../images/www.jpg";
const PageCard = ({ page }) => {
  let date = moment(page.publishedOn)
  date = String(date)
  return (
    <Card className="card">
      <Link to={`/page/${page.id}`}>
        <Card.Img src={CardBackground} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/page/${page.id}`}>
          <Card.Title as="h5">
            page title:{page.title}
          </Card.Title>
        </Link>
        <Card.Text as="h6">description :{page.description}</Card.Text>
        <Card.Text as="p">{date} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PageCard;
