import React from "react";
import { Item } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Display = ({ images }) => {
  return (
    <Item.Group>
      {images.map(img => {
        if (img.media_type === "video") {
          return (
            <Item style={{marginTop:'10px'}} key={img.title}>
              <Item.Image size="large" style={{ marginLeft:'10px', marginBottom: '10px'}} ><iframe  src={img.url} title={img.title} style={{ width: '450px'}}/></Item.Image>
              <Item.Content>
                <Item.Header as="a">{img.title}</Item.Header>
                <Item.Meta style={{fontWeight: '700'}}>{img.explanation}</Item.Meta>
                <Item.Extra>{img.copyright}</Item.Extra>
              </Item.Content>
            </Item>
          );
        } else {
          return (
            <Item style={{ marginTop:'10px'}} key={img.title}>
              <Item.Image size="large" src={img.url} style={{ marginLeft:'10px', marginBottom: '10px'}}/>
              <Item.Content style={{ marginRight:'20px', marginBottom: '10px'}}>
                <Item.Header as="a">{img.title}</Item.Header>
                <Item.Meta style={{fontWeight: '700'}}>{img.explanation}</Item.Meta>
                {img.copyright ? (<Item.Extra>©{img.copyright}</Item.Extra>) : null}
              </Item.Content>
            </Item>
          );
        }
      })}
    </Item.Group>
  );
};

export default Display;
