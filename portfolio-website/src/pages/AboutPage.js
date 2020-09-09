import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'

function AboutPage(props){
    return (
       <div>
           <Hero title = {props.title}/>

           <Content>
               <h2>Research AI/ML Intern, OnToAdaptive</h2>
               <p>
               Working as ML researcher for the Digital Health Platform Snobird. Working on the ML Ops pipeline for deployment CI/CD. Using
                Cloud App Engine, PostgreSQL, Cloud Function, Kubernetes
               </p>
           </Content>
       </div>
    );
}

export default AboutPage;