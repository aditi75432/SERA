
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Typography() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">About Us</h5>
                <CardTitle tag="h3">
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="typography-line">
                  <h1>
                   
                   About Us
                  </h1>
                </div>
                
                
                <div className="typography-line">
                  <h3>
                    
                    SERA : Stock Education and Real-time Simulation Analysis
                  </h3>
                </div>
                
                <div className="typography-line">
                  <p>
                    <span>Our Summary</span> SERA, was founded by four keen Stock Traders, who knew far too little to begin their Journey at the time. Our mission therefore, was to create a platform where people of all ages, could dwelve into the world of trading without worying about losing too much cash.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Our Motive</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "Transform Your Financial Future with SERA: The Ultimate Gamified Stock Trading Platform for Young Adults (16-25). Experience the Thrill of Real-Time Market Simulations & Handling wallet credits. Empower Yourself with Comprehensive Educational Content, and Stay Engaged with Interactive Features. SERA is Designed to Help You Learn Investing, Develop Smart Money Management Skills, and Build a Robust Financial Foundation. Dive into Realistic Market Scenarios, Participate in Exciting Challenges, and Unlock Your Potential with SERA – Where Learning and Investing Come to Life." <br />
                      <br />
                      <small>- AVAA</small>
                    </p>
                  </blockquote>
                </div>
                
                <div className="typography-line">
                  <span>THE FOUNDERS</span>
                  <p className="text-danger">
                    The Founders Of SERA are :
                    Aditi :A
                    Vania :V
                    Anusha:A
                    Arshiya:A
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    
                   What Makes US Different? <br />
                    
                  </h2>
                </div>
                <div className="typography-line">
                  <span>OUR FEATURES</span>
                  <Row>
                    <Col md="3">
                      <h5>Features</h5>
                      <ul>
                        <li>Advanced Blockchain Security and Transparency</li>
                        <li>Real-Time Trading and Market Data</li>
                        <li className="list-unstyled">
                          <ul>
                            <li>Comprehensive Educational Content</li>
                            <li>Machine Learning-Driven Insights and Predictions</li>
                            <li>Actionable Performance Insights</li>
                          </ul>
                        </li>
                        <li>Expert Guidance and Learning Resources</li>
                      </ul>
                    </Col>
                    <Col md="3">
                      <h5>USPs</h5>
                      <ol>
                        <li>Engaging Gamification Features</li>
                        <li>Enhanced User Engagement and Retention</li>
                        <li>LeaderBoard</li>
                        <li>Scalable and Adaptable Technology</li>
                      </ol>
                    </Col>
                    
                  </Row>
                </div>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
