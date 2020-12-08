import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CardBackground from '../../images/www.jpg'
const PageCard = ({page}) => {
    return ( 
        <Card className='card'>
            <Link to={`/page/${page.id}`}>
            <Card.Img src={CardBackground} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/page/${page.id}`}>
            <Card.Title as='h5'>
                <strong>
                    website name:{page.title}
                </strong>
            </Card.Title>
            </Link>
            <Card.Text as='h6'>
                description :{page.description}
            </Card.Text>
            <Card.Text as='p'>
                published on :{page.publishedOn}
            </Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default PageCard;