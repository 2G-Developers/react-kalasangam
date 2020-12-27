import React from 'react'


const Page = ({data}) => {
    return (
        <section className="page">
            <div className="page__img-wrapper">
                <img src={data.image} alt={data.alt} className="page__image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="page__content">
                        <h2 className="page__heading">About <br/> {data.heading}</h2>
                        {
                            data.paragraph.map((para, index) => (
                                <p className="page__paragraph" key={index}>
                                    {para}
                                </p>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page
