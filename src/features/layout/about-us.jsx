import React from 'react'
import { Segment } from 'semantic-ui-react'

function AboutUs() {
    return (
        <Segment.Group id="aboutus">
            <div className="aboutus-container">
                <div className="about-us-content">
                    <h1>Empowering parents in Atlanta.</h1>
                    <h3>Find a school that fits your child's needs.</h3>
                    <p>We understand that a school with a 9/10 rating may not necessarily be a good fit for all students. We have 
                        done the research, heard the voices of parents in Atlanta, and have included only schools that 
                        have a proven record of equity, maintain strong testing scores for black students, and recieve positive feedback
                        from black parents in Atlanta.
                    </p>
                    <p>Please note that not all schools in Atlanta proper are listed. We have only included schools that meet our requirements.</p>
                </div>
            </div>
        </Segment.Group>
    )
}

export default AboutUs
