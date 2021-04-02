import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input, MultipleImageUpload } from '../components/Input'
import { BASE_URL } from '../data/env'

const Gallery = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [heading, setHeading] = useState(data?.value?.header[0])
    const [subheading, setSubHeading] = useState(data?.value?.subheader[0])
    const [file, setFile] = useState("")
    const [filepath, setFilePath] = useState(data?.value?.images)
    const [ready, setReady] = useState(false)

    const saveHandler = () => {
        
        const imageData = new FormData();

        for(let i=0; i<file.length; i++) {
            imageData.append("file", file[i])
        }

        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")
        postHeaders.append("Authorization",localStorage.getItem("token"))

        const imageHeaders = new Headers()
        imageHeaders.append("authorization",localStorage.getItem("token"))

        if(file) {
            fetch(`${BASE_URL}/uploader_multi/alphas9`, {
                headers: imageHeaders,
                method: "POST",
                body: imageData,
                redirect: "follow"
            })
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
            })
            .then(data => {
                setFilePath(data.desc)
                setFile("")

                const sectionData = {
                    "Subheading": JSON.stringify([subheading]),
                    "header": JSON.stringify([heading]),
                    "images": JSON.stringify(data.desc)
                }

                fetch(`${BASE_URL}/update/all/${window.location.pathname.split("/")[1]}/${id}/`, {
                    headers: postHeaders,
                    method: "POST",
                    body: JSON.stringify(sectionData),
                    redirect: "follow"
                }).then(res => res.json())
                .then(data => {
                    setReady(true)
                    setTimeout(function(){
                        setReady(false)
                    }, 3000)
                })
            })
        } else {
            const sectionData = {
                "Subheading": JSON.stringify([subheading]),
                "header": JSON.stringify([heading]),
                "images": JSON.stringify(filepath)
            }

            fetch(`${BASE_URL}/update/all/3/${id}/`, {
                method: 'POST',
                headers: postHeaders,
                body: JSON.stringify(sectionData),
                redirect: "follow"
            })
            .then(res => res.json())
            .then(data => {
                setReady(true)
                setTimeout(function(){
                    setReady(false)
                }, 3000)
            })
        }

    }


    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__image">
                        <MultipleImageUpload file={file} setFile={setFile} filepath={filepath} />
                    </div>
                    <div className="about__content">
                        <div className="about__text">
                            <p>ID:</p>
                            <Input disabled value={id} setValue={setId} />
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>Sub Heading:</p>
                            <Input value={subheading} setValue={setSubHeading} />
                        </div>
                    </div>
                    <div className="about__cta">
                        <button className="btn btn--primary" onClick={saveHandler}>Save</button>
                        <DangerButton>Cancel</DangerButton>
                    </div>   
                    <div className="about__success" style={{opacity: `${ready? "1": "0"}`}}>
                        <p>Updated Successfully</p>
                    </div>               
                </div>
            </div>
        </section>
    )
}

export default Gallery
