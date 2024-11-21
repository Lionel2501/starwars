import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
        <footer style={{ backgroundColor: '#6c757d', padding: '20px 0' , marginTop: '20px'}}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <p style={{ color: '#fff' }}>2024 - &copy;Site crée par Lionel Cassar</p>
                    </Col>
                </Row>
                {/* <Row>
                    <Col className="text-center">
                        <p>Tous droits réservés.</p>
                    </Col>
                </Row> */}
            </Container>
        </footer>
  );
}

export default Footer;

