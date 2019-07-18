import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Display = ({images}) => {
    
    return (
        <Card.Group style={{justifyContent: 'space-around'}}>{
            
            images.map(img => {
        
                    return <Card>
                        <Image src={img.url} wrapped ui={false} />
                        <Card.Meta>© {img.copyright}</Card.Meta>
                        <Card.Content>
                            <Card.Header>{img.title}</Card.Header>
                            <Card.Description>
                            {img.explanation}
                            </Card.Description>
                        </Card.Content>
                    </Card>;
                }
            )
            
        }</Card.Group>
    )
}

export default Display;

