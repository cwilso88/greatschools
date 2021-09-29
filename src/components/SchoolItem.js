import React from 'react'


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
    }
  return (
    <div id="schoolItem" className="school-list-item">
      <div className="content-container" style={{display:"flex", gap:"20px"}}>
        <div>
          <div className="circle-rating" style={circle}>9</div>
        </div>
        <div className="school-info">
  <a href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/">
    Charles R. Drew Charter School
  </a>
  <p className="school-district">
    <a href="/georgia/atlanta/atlanta-public-schools/">
      Atlanta Public Schools
    </a>
  </p>
  <p className="students">Charter, PK-5 | 994 students</p>
  <div className="five-star-review">
    <span>
      <a href="/georgia/atlanta/2465-Charles-R.-Drew-Charter-School/reviews">
        36 Reviews
      </a>
    </span>
    <span>
      <div className="five-star-rating">
        <div className="five-star-rating__stars fsr-medium">
          <span className="five-stars">
            <span className="icon-star filled-star" />
            <span className="icon-star filled-star" />
            <span className="icon-star filled-star" />
            <span className="icon-star filled-star" />
            <span className="icon-star empty-star" />
          </span>
        </div>
      </div>
    </span>
  </div>
  <div style={{ marginTop: 5 }}>
    <a
      className="icon icon-house active"
      href="https://www.zillow.com/GA-30317?cbpartner=Great+Schools&utm_source=Great_Schools&utm_medium=referral&utm_campaign=districtpage_schoollistings"
      target="_blank" rel="noreferrer"
    >
      <span> Homes for sale</span>
    </a>
  </div>
</div>
      </div>
    </div>
  );
};

export default SchoolItem;