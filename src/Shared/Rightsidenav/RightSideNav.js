import React from 'react';
import { FaGoogle,FaGithub, FaWhatsapp,FaTwitter,FaTwitch, FaFacebook } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
             <ButtonGroup vertical>
      <Button variant="outline-primary"><FaGoogle></FaGoogle> LOgin with Googl</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Gihub</Button>
    </ButtonGroup>
    <div className='mt-2'>
        <h3>Find us</h3>
        <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
      <ListGroup.Item>Terms & Condition</ListGroup.Item>
    </ListGroup>
    </div>
    <div>
        <BrandCarousel></BrandCarousel>
    </div>
        </div>
    );
};

export default RightSideNav;