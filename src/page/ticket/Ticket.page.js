import React, { useState,useEffect } from 'react'
import {Container, Col, Row,Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dumy.tickets.json'
import MessageHistory from '../../components/message-history/MessageHistory.comp'
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp'
import { useParams } from 'react-router-dom';



//const ticket = tickets[0]

export const Ticket = () => {
  const {tId} = useParams()
  const [message,setMessage] = useState('');
  const [ticket,setTicket] = useState('');

  

  useEffect(()=>{
    for (let i =0; i<tickets.length; i++) {
      if(tickets[i].id === tId){
        setTicket(ticket[i])
        continue;
      }
    }
  },[message,tId])

  const handleOnChange = e =>{
    setMessage(e.target.value)
  }

  const handleOnSubmit = () =>{
    alert("Form submitted")
  }

  return (
    <Container>
      <Row>
        <Col>
        <PageBreadcrumb page="Ticket"/>
        </Col>
      </Row>
      <Row>
        
        <Col className='text-weight-bolder text-secondary'>
        
        <div className="subject">Subject :{ticket.subject}</div>
        <div className="date">Ticket Opened :{ticket.addedAt}</div>
        <div className="status">Status :{ticket.status}</div>
        </Col>
        <Col className='text-right'>
        <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
        {ticket.history &&<MessageHistory msg={ticket.history} />}

        </Col>
      </Row>
      <hr/>
      <Row className='mt-4'>
        <Col> 
        <UpdateTicket msg={message}
        handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket