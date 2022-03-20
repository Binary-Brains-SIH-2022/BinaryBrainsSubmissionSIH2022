import React from 'react';
import JsonData from "../data/data.json";

const Header = (props) => {
   return (
   <>
     <header id='header'>
       <div className='intro'>
         <div className='overlay'>
           <div className='container'>
             <div className='row'>
               <div className='col-md-8 col-md-offset-2 intro-text'>
                 {/* <h1>
                   {JsonData.data ? JsonData.data.title : 'Loading'}
                   <span></span>
                 </h1>
                 <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}

                <h1>
                Welcome to St. Francis Institute of Technology!!
                   <span></span>
                 </h1>
                 <p>St. Francis Institute of Technology (SFIT) was established in 1999 with a view to create an Engineering Degree Institute to fulfill the long felt public need of an Institute of Excellence in Borivali. SFIT has five UG Programs and two PG Programs in the most coveted disciplines considering both industrial need and public preference.</p>

                 <a
                   href='/3d'
                   className='btn btn-custom btn-lg page-scroll'
                 >
                   Take 3D Tour
                 </a>{' '}
               </div>
             </div>
           </div>
         </div>
       </div>
     </header>

     <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text info">
                <h2>About SFIT</h2>
                {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
               <p> St. Francis Institute of Technology (SFIT) was established in 1999 with a view to create an Engineering Degree Institute to fulfill the long felt public need of an Institute of Excellence in Borivali.

SFIT has five UG Programs and two PG Programs in the most coveted disciplines considering both industrial need and public preference. These courses would lead to award of the Degree of Bachelor of Engineering (B.E.) in Computer Engineering, Electronics & Telecommunication Engineering, Information Technology, Electrical Engineering and Mechanical Engineering and Master of Engineering (M.E.) as well as Ph.D. (Technology) in Computer Engineering and Electronics & Telecommunication Engineering.

SFIT is approved by AICTE and is permanently affiliated to the University of Mumbai.

National Board of Accreditation (NBA) has granted accreditation to the three U.G. programs i.e. Computer Engineering, Electronics & Telecommunication Engineering and Information Technology offered by our Institute as per the validity period mentioned in their letter (Click here). The institute is also certified for meeting with the Quality Management System Standards ISO 9001:2015, for providing undergraduate courses in Engineering/Technology.
</p>

                <h3>Vision</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12 info">
                  To be a chrysalis where bright youngsters are transformed into technological entrepreneurs and innovative leaders of tomorrow’s world, consistent with the Franciscan vision of integrity, peace and love.
                  </div>
                  
                  <h3>Mission</h3>
                  <div className="col-lg-6 col-sm-6 col-xs-12 info">
                  For UG programme:- “To churn highly competent engineering graduates with a commitment to result oriented work, a perennial zest for learning, a quest for excellence, an open mind and the universal values of honesty, dignity and mutual care.”

                 For PG programme:- “To continually improve and progress in the path of developing post graduate scholars who will be competent in exploring, developing and disseminating new knowledge in their areas of specialisation so that the repository of new knowledge and innovation and its dissemination will be enhanced in scope of effectiveness.”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>

   )
 }

export default Header;