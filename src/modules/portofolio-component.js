import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css'; 

import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        image: require(`../../src/assets/images/picture.png`),
        title: 'Grizzly',
        link : "https://youtu.be/AG-WwTdOC5I",
        description: "Despite my appearance and rather childish behavior, I am shown to be fairly knowledgeable about some things to help guide my brothers if they need help. I love my brothers unconditionally and would take a bullet for them."
    },
    {
        image: require(`../../src/assets/images/panda.png`),
        title: 'Panda',
        link : "https://youtu.be/r13rD5wiDjQ",
        description: "He's gentle, yet somewhat cowardly and insecure. \n He is probably the frailest of the three bears. \n He is also severely allergic to nut \n and gets embarrassed easily. His hobbies  consist \n of dating sites, social networking, anime, video \n games and art."
    },
    {
        image: require(`../../src/assets/images/icebear.png`),
        title: 'Ice Bear',
        link : "https://youtu.be/u_yKAJjAkGI",
        description: "Ice Bear sleeps in the fridge and seems to love being on cold surfaces. He is also very interested in yoga, dancing, karate, and many other similar activities while he also spends a lot of time reading and tinkering with robotics."
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                This is My Family
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                We're here to be internet famous
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#a16348',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div  className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}<br/><br/>
                                                        <a href={data.link} className="btn btn-primary"></a>
                                                        <a href={data.link} target="_blank">
                                                            <ButtonHome
                                                                text="More"
                                                                background="#a16348"
                                                                textColor="#fff"
                                                                className='button-participate'
                                                                onClick = {data.link}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;