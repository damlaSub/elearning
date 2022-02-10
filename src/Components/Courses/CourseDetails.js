import React, { Component } from 'react';
import { coursesData } from '../../elearningData';
import Img from '../../Img/imgCours.jpg';
import {
    useParams
  } from "react-router-dom";




const CourseDetails = () => {
    // je récupère la params :id en utilisant useParams()
    // useParams est utilisable seulement en composant fonctionel
    const { id } = useParams();
        // ici je fais une boucle pour récupérer seulement l'élément dont j'ai besoin
        // en le triant par l'ID (:id)
        const course = coursesData.find(c => c.id === Number(id));
        // ici comme l'id du params est en type STRING, je le converti en type NUMBER pour pouvoir
        // boucler avec la fonction: find
        return (
            <div>
            <h3>{course.courseName}</h3>
            <img id="imgCours" src={Img}/>
            <p> {course.courseDescription} </p>
            <span> Durée : {course.courseDuration}min </span>
            <span> Note : {course.courseNote} </span>
            <p>Date de création: {course.courseCreatedAt}</p>
            <p>{course.courseVideo}</p>
            <div>
               
            <p id='test'>Pour testez votre niveau <button id="quiz-button" onClick={() => window.location = `/course/${course.id}/${id}`}> Click </button></p>
            </div>
        </div>
        );
}



export default CourseDetails;