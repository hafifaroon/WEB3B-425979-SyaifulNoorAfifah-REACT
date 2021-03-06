import React, { Component } from 'react'; //import dari react biasa
import { Layout, Row, Col, Modal } from 'antd'; //import dari ant seperti biasa
import '../assets/css/landing.css' //import css dari folder css yang ada di folder assets
import Navbar from '../common/layout/navbar-landing' //import komponen navbar dari folder layout yang ada di folder common 
import ButtonHome from '../common/component/button/button-home'; //import komponen buttonhome yang ada di dalamn folder component yang ada di folder common

const { Content } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/images/picture.svg`); //membuat variabel image 1 dimana isinya merupakan importan gambar yang ada dari folder images
        const {initialData,showModal,handleOk,handleCancel} = this.props; {/* ini merupakan fungsi" yang sudah di definsiikan di landing-page.js 
        kemudian kita panggil di halaman landing-component.js ketika kita memamnggil komponent dari parent komponen, komponen yang dipanggil
        akan menjadi sebuah properti, kemudian kita dapat menggunakan properti itu dihalaman ini.
        */}
        return(
            <Layout className="landing-container">
                  {/* ini merupakan component navbar yang kita import dari folder layout yang ada di common*/}
                <Content style={{ overflow: "hidden" }}> {/* ini merupakan component content yang sudah di define sebelumnya*/}
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '80%'}}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container text-align-center">
                                        <span className="text-soft-blue title-biggest bold" >Hi, there!</span>
                                        <br/>
                                        <span className="text-soft-blue title-big bold">it's me, Grizzly</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>
                                    <div className="description-container desc-medium">
                                    I love eating. I love eating. I love eating. Yeah! I love eating. Nickname(s): Crowbar Jones,
                                    Grizzly Bear,
                                    Grizz,
                                    Big Bro,
                                    Older Brother,
                                    Little Guy,
                                    Little Fella,
                                    Loud One,
                                    Spike,
                                    Bear Guy.
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="button-section-1-container">                                
                                        <a href="mailto:hafifaroon@gmail.com?Subject=Hello%20Grizz">
                                            <ButtonHome
                                                text="Text Me"
                                                className='button-participate'
                                                //onClick = {onClick}
                                            />{/* ini merupakan component button yang kita sudah definisikan di atas atas nama buttonhome*/}
                                        </a>
                                        <ButtonHome
                                            text="Trivia"
                                            background="white"
                                            textColor="#a16348"
                                            border="1px solid #a16348"
                                            marginLeft={16}
                                            className='button-participate'
                                            onClick = {showModal}
                                        />
                                    </div>
                                </Col>
                                <Modal
                                    title="Trivia"
                                    visible={initialData.visible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    className = "modal-notif"
                                    >
                                    <p className="text-notif">I am Grizzly, the oldest bear among my my brothers. When I want to, I can let out an immense roar. Not only is it extremely loud, but it can very startling.</p>
                                </Modal>{/* ini merupakan modal yang didalamnya memuat beberapa fungsi yang sudah di definisikan di atas sebagai this.props*/}
                            </Row>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;