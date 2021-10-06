import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'


const SchoolItem = (props) => {

  // SET STATE FOR THE HEART CLASS
  const [isActive, setActive ] = useState("false");
  

  // ADD CLASS ACTIVE TO HEART ONCLICK
  const clickHandler = () => {
    
    setActive(!isActive);
    console.log("active class added!");
  };

  

//TBD FIX THE handleHEARTCLICK FUNC
let loopSchoolData = () => {
  const { schoolData } = props;


  // MAPPING THROUGH EACH SCHOOL ITEM FROM JSON TO

  return schoolData.map((school) => {
    return (
      <Segment key={school.id} style={{ boxShadow: `1px 0px 12px -3px rgba(0,0,0,0.75)` }}>
      <div id="schoolItem" 
         className="school-list-item"
         >
      <div
        className="content-container"
        style={{ display: "flex", gap: "20px" }}
      >
        <div>
          <div className="circle-rating">
            {school.rating}
          </div>
        </div>
        <div className="school-info">
          <a
            href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/"
            className="name"
          >
            {school.name}
          </a>
          <div className="address">
            {school.address}
          </div>
          <p className="students">{school.district}, {school.grades} | {school.totalStudentsEnrolled} students</p>
          <div className="five-star-review">
            <span>
              <a 
                href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/reviews"
                >
                {school.reviews} Reviews
              </a>
            </span>
            <span>
              <div className="five-star-rating">
                <div className="five-star-rating__stars fsr-medium">
                  <span className="five-stars">
                    <Icon className="star icon filled-star"></Icon>
                    <Icon className="star icon filled-star"></Icon>
                    <Icon className="star outline icon filled-star"></Icon>
                    <Icon className="star outline icon filled-star"></Icon>
                    <Icon className="star outline icon empty-star"></Icon>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <br />
          <div className="homes-for-sale">
            <span className="icon icon-house">
              <Icon name="home"/>
            </span>
            <a
              href="https://www.zillow.com/GA-30317?cbpartner=Great+Schools&amp;utm_source=GreatSchools&amp;utm_medium=referral&amp;utm_campaign=schoolsearch"
              target="_blank"
              class="homes-for-sale-link"
              rel="noreferrer"
            >
              &nbsp; Homes for sale
            </a>
          </div>
        </div>
        <span>
        <Icon className={`heart outline icon ${isActive ? `active` : `` }`}
              //TBD UPDATE HANDLEHEARTCLICK TO WORK 
              //SO THAT USER CAN CLICK ON THE HEART
              //AND ONLY THAT HEART HAS THE ACTIVE 
              //CLASS ADDED TO IT
              onClick={clickHandler}></Icon>
        </span>
      </div>
      </div>
      </Segment>
    )
  })
}







  return (
    <Segment.Group id="schoolList">
      {loopSchoolData()}
    </Segment.Group>
  );
};

export default SchoolItem;