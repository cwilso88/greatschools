import React from 'react'
import { Icon } from 'semantic-ui-react'


const SchoolItem = () => {
  const circle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    textAlign: "center",
    fontSize: "25px",
    color: "#2b6777",
    borderStyle: "solid",
    borderWidth: "4px",
    backgroundColor: "#c8d8e4",
    borderColor: "#52ab98",
  };

  const ratingStyles = {
      display: "flex",
      flexDirection: "row",
      gap: "10px"
  }



  return (
    <div id="schoolItem" className="school-list-item">
      <div
        className="content-container"
        style={{ display: "flex", gap: "20px" }}
      >
        <div>
          <div className="circle-rating" style={circle}>
            9
          </div>
        </div>
        <div className="school-info">
          <a
            href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/"
            className="name"
          >
            Charles R. Drew Charter School
          </a>
          <div className="address">
            301 East Lake Boulevard Southeast, Atlanta, GA, 30317
          </div>
          <br/>
          <p className="students">Public Charter, PK-5 | 994 students</p>
          <div className="five-star-review" style={ratingStyles}>
            <span>
              <a href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/reviews">
                36 Reviews
              </a>
            </span>
            <span>
              <div className="five-star-rating">
                <div className="five-star-rating__stars fsr-medium">
                  <span className="five-stars">
                    <Icon className="star outline icon filled-star"></Icon>
                    <Icon className="star outline icon filled-star"></Icon>
                    <Icon className="star outline icon filled-star"></Icon>
                    <Icon className="star outline icon filled-star"></Icon>
                    <Icon className="star outline icon empty-star"></Icon>
                  </span>
                </div>
              </div>
            </span>
          </div>
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
        <span>
        <Icon className="heart outline icon"></Icon>
        </span>
      </div>
    </div>
  );
};

export default SchoolItem;