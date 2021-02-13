import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { VideosData } from '../data/VideosData'
import Videos from './Videos'
import 'react-tabs/style/react-tabs.css';

import TeamImage from '../images/2.jpg'
// import Fade from 'react-reveal/Fade';

const FullGallery = ({data}) => {
    return (
        <section className="fullgallery">
            <div className="page__img-wrapper">
                <img src={TeamImage} alt="team" className="page__image" />
            </div>
            <div className="container">
                <div className="row">
                    <Tabs>
                        <TabList>
                        <Tab>Gallery</Tab>
                        <Tab>Videos</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="fullgallery__wrapper">
                                {
                                    data.gallery.map((gallery, index) => (
                                        // <Fade bottom duration={1200} key={index}>
                                            <img 
                                            className="fullgallery__image" loading="lazy" key={index} src={gallery.image} alt={gallery.alt} />
                                        // </Fade>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Videos data={VideosData} />
                        </TabPanel>
                    </Tabs>
                    
                </div>
            </div>
        </section>
    )
}

export default FullGallery
