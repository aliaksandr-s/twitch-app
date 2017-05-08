import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const CardInfo = () => (
  <Card fluid>
    <Card.Content>
      <a style={{float: 'right'}}>
        <Icon name='user'/>
        Online
      </a>
      <Image floated='left' size='mini' shape='circular' className="m-b-0" src='https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png' />
      <Card.Header>
        FreecodeCamp
      </Card.Header>
      <Card.Meta>
        This channel is currently offline
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default CardInfo

