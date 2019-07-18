import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Display = ({images}) => {
    
    return (
        <Card.Group style={{justifyContent: 'space-around'}}>{
            
            images.map(img => {
                if(img.media_type === 'video'){
                    return <Card style={{width: '45%', marginBottom: '20px'}} key={img.title}>
                    <iframe src={img.url} wrapped ui={false} title={img.title} style={{maxWidth: '100%', maxHeight: '200px'}}/>
                    <Card.Meta>© {img.copyright}</Card.Meta>
                    <Card.Content>
                        <Card.Header>{img.title}</Card.Header>
                        <Card.Description>
                        {img.explanation}
                        </Card.Description>
                    </Card.Content>
                </Card>;
                } else {
                    return <Card style={{width: '45%', marginBottom: '20px'}} key={img.title} >
                    <Image src={img.url}/>
                    <Card.Meta>© {img.copyright}</Card.Meta>
                    <Card.Content>
                        <Card.Header>{img.title}</Card.Header>
                        <Card.Description>
                        {img.explanation}
                        </Card.Description>
                    </Card.Content>
                </Card>;
                   
                }
            }
            )
            
        }</Card.Group>
    )
}

export default Display;

