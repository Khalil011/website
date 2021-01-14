import React from "react";
import CourseItem from "./CourseItem";
import './CardItem.css';


export default function Courses(){
    return(
        <div className="alumni">
            <CourseItem
            icon="building outline icon"
            header='Business'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'/>
            <CourseItem
            icon="heart outline icon"
            header='Medical'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'
            />
            <CourseItem
            icon="rupee sign icon"
            header='Accounting'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'/>
            <CourseItem
            icon="desktop icon"
            header='Technology'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'/>
            <CourseItem
            icon='film icon'
            header='Art & media'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'/>
            <CourseItem
            icon="globe icon"
            header='Web & programming'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'
            />
            <CourseItem
            icon="home icon"
            header='Real Estate'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'/>
            <CourseItem
            icon="comment icon"
            header='Language'
            description='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'/>
        </div>
    )
}
