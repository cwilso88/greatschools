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

  const filledStar = {
      fontFamily: "Icons",
      color: "#FFD700",
  }

  const emptyStar = {
      color: "#FFD700",
  }

  const heartStyle = {
    cursor: "pointer",
    float: "right",
    width: "auto",
    color: "#1dace5",
    fontSize: "17px"
  }

  const active = {
    color: "#2b6777",
    fontFamily: "Icons"
  }

  const schoolInfo = {
      width: "80%"
  }

  const fontColor ={
      color: "#52ab98"
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
        <div className="school-info" style={schoolInfo}>
          <a
            href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/"
            className="name"
            style={fontColor}
          >
            Charles R. Drew Charter School
          </a>
          <div className="address">
            301 East Lake Boulevard Southeast, Atlanta, GA, 30317
          </div>
          <p className="students">Public Charter, PK-5 | 994 students</p>
          <div className="five-star-review" style={ratingStyles}>
            <span>
              <a 
                href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/reviews"
                style={fontColor}>
                36 Reviews
              </a>
            </span>
            <span>
              <div className="five-star-rating">
                <div className="five-star-rating__stars fsr-medium">
                  <span className="five-stars">
                    <Icon className="star icon filled-star" style={filledStar}></Icon>
                    <Icon className="star icon filled-star" style={filledStar}></Icon>
                    <Icon className="star outline icon filled-star" style={filledStar}></Icon>
                    <Icon className="star outline icon filled-star" style={filledStar}></Icon>
                    <Icon className="star outline icon empty-star" style={emptyStar}></Icon>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <br />
          <div className="homes-for-sale">
            <span className="icon icon-house">
              <Icon name="home" style={active}/>
            </span>
            <a
              href="https://www.zillow.com/GA-30317?cbpartner=Great+Schools&amp;utm_source=GreatSchools&amp;utm_medium=referral&amp;utm_campaign=schoolsearch"
              target="_blank"
              class="homes-for-sale-link"
              rel="noreferrer"
              style={fontColor}
            >
              &nbsp; Homes for sale
            </a>
          </div>
        </div>
        <span>
        <Icon className="heart outline icon" style={heartStyle, active}></Icon>
        </span>
      </div>
    </div>
  );
};

export default SchoolItem;