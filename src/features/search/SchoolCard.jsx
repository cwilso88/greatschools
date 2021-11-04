import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'


function SchoolCard({ school }) {
  // SET STATE FOR THE HEART CLASS
  const [isActive, setActive] = useState(false);

  // Saving the active and not-active versions of the heart icon with it's classNames
  const Active = () => {
    return <Icon className="heart outline icon active"></Icon>;
  };
  const NotActive = () => {
    return <Icon className="heart outline icon"></Icon>;
  };

  return (
    <Segment
      key={school.id}
      style={{ boxShadow: `1px 0px 12px -3px rgba(0,0,0,0.75)` }}
    >
      <div id="SchoolCard" className="school-list-item">
        <div
          className="content-container"
          style={{ display: "flex", gap: "20px" }}
        >
          <div>
            <div className="circle-rating">{school.rating}</div>
          </div>
          <div className="school-info">
            <a
              href={school.siteURL}
              className="name"
            >
              {school.name}
            </a>
            <div className="address">{school.address}</div>
            <p className="students">
              {school.district}, {school.grades} |{" "}
              {school.totalStudentsEnrolled} students
            </p>
            <div className="five-star-review">
              <span>
                <a href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/reviews">
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
                <Icon name="home" />
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
          <span
            onClick={() => {
              setActive(!isActive);
            }}
          >
            {isActive ? <Active /> : <NotActive />}
          </span>
        </div>
      </div>
    </Segment>
  );
}

export default SchoolCard;