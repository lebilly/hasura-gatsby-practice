import React from 'react'
import styled from 'react-emotion'

const Button = styled('button')`
  color: #fff;
  background-color: green;
`

const Div = styled('div')`
  margin: 1em auto;
  padding: 1em;
  background-color: purple;
`

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
`

export default () => (
  <Container>
    <Div>
      <Button>This is an Emotion button</Button>
    </Div>
  </Container>
)
