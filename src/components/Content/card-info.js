import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'

const CardInfo = (props) => (
  <Card className="b-animation" fluid color={props.streamInfo ? "green" : "grey"}>
    <Card.Content>
        {props.streamInfo
          ? <div className="m-t-6 f-r">
              <Label size='small' basic color='teal' className="">
                <Icon name='users'/> {props.streamInfo.viewers}
              </Label>
            </div>
          : <div className="m-t-6 f-r">
              <Label size='small' basic color='grey'>
                Offline
              </Label>
            </div>
        }
      <Image floated='left' size='mini' shape='circular' className="m-b-0" 
        src={props.logo || "https://api.adorable.io/avatars/50/abott@adorable.png"} 
      />
      <Card.Header>
        <a href={props.url} target="blank">
          {props.name}
        </a>
      </Card.Header>
      {props.streamInfo 
        ? <Card.Meta>
            {props.streamInfo.game}
          </Card.Meta>
        : <Card.Meta>
            No Streaming Info
          </Card.Meta>
      }
    </Card.Content>
  </Card>
)

export default CardInfo

