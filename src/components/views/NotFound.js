import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default function NotFound() {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <h1>Doh! 404!</h1>
          <p>These are <em>not</em> the droids you are looking for!</p>
        </Col>
      </Row>
    </Grid>
  )
}
