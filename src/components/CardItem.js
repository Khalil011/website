import React from "react";
import faker from 'faker';
//import './CardItem.css';
export default function CardItem(props){
return(
    <div class="ui cards" style={{opacity:'.8'}}>
        <div class="card">
            <div class="ui image">
                <img src={faker.image.image()}/>
            </div>
            <br/>
            <div class="content">
                <div class="ui header">Matt Giampietro</div>
                <div class="description">
                    Matthew is an interior designer living in New York.
                </div>
            </div>
        </div>
    </div>
);
}
