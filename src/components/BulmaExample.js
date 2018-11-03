import React from 'react'
import { Container, Columns, Button } from 'react-bulma-components/full'

export default () => (
  <Container>
    <Columns>
      <Columns.Column className="has-text-centered">
        <Button size="large" color="info">
          Some button
        </Button>
      </Columns.Column>
      <Columns.Column className="has-text-centered">
        <Button size="small" color="danger">
          Another button
        </Button>
      </Columns.Column>
      <Columns.Column className="has-text-centered">
        Third Column
      </Columns.Column>
      <Columns.Column className="has-text-centered">
        Fourth Column
      </Columns.Column>
    </Columns>
  </Container>
)
