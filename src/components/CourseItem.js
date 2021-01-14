import React from 'react';

export default function CourseItem(props){
    return(
    <div class="cards" style={{opacity:'.7'}}>
        <i style={{marginLeft:'40%', marginTop:'10px',fontSize:'50px'}} class={props.icon} >
        </i>
        <div class="ui card" style={{marginBottom:'15px', marginLeft:'20px',zIndex:'2'}} >
            <div class="content">
                <div class="ui header" style={{marginLeft:'55px'}}>
                    {props.header}
                </div>
                <div class="description">
                    {props.description}
                </div>
            </div>
        </div>
    </div>
    );
}