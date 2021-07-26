import { useState } from 'react'
import WordBankModal from './WordBankModal'
import data from '../../../sample_data/lessonPreview.json'
import speech from 'speech-synth'

export default function ExpressionsKey() {
    const [content, setContent] = useState([])

    // sample data
    const expressionsList = data.keyExpressionsList

    // function to close shown content
    const closeImage = () => {
        document.querySelector<HTMLElement>('.expressions_content_container').style.display = 'block'
        document.querySelector<HTMLElement>('.expressions_show_content_container').style.display = 'none'
    }

     // function to show individual contents
    const showContent = (data) => {
        setContent(data)
        document.querySelector<HTMLElement>('.expressions_content_container').style.display = 'none'
        document.querySelector<HTMLElement>('.expressions_show_content_container').style.display = 'block'
    }

    // function for text to speech
    const playTextSpeech = (text:string) => {
        speech.say(text)
    }

    return (
        <>
            <div className="expressions_content_container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {expressionsList.map((data, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100" style={{backgroundColor: "#C4C4C4"}}>
                                <div className="card-body text-center py-5">
                                    <p className="card-text">
                                        <a onClick={() => showContent(data)} style={{cursor: 'pointer'}}>{data.name}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="expressions_show_content_container" style={{display: 'none'}}>
                <div className="row">
                    <div className="col-sm-12">   
                        <div className="card" style={{backgroundColor: "#C4C4C4"}}>
                            <div className="row content_header">
                                <div className="col-sm-11">
                                    <div className="bg-dark">
                                        <p className="text-light px-2">
                                            {content.name} (noun) &nbsp;
                                            <i className="fas fa-volume-up" style={{cursor: "pointer"}} onClick={() => playTextSpeech(content.name)}></i>
                                            <div className="float-end">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#expressionsWordBankModal">
                                                    <i className="fas fa-bookmark fa-lg" style={{cursor: "pointer"}}></i>
                                                </a>
                                            </div>
                                        </p>
                                    </div>
                                    <small className="px-2">{content.pronounce}</small>
                                    <p className="px-2">{content.description}</p>
                                </div>
                                <div className="col-sm-1 px-4 py-2">
                                    <a href="#" onClick={() => closeImage()} className="float-end text-danger">
                                        <i className="fas fa-times-circle fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="card-body">
                                <h5 className="card-title">Examples:</h5>
                                <ul className="list-group list-group-flush">
                                    {content.sample && content.sample.map((data, i) => (
                                        <li className="list-group-item" style={{backgroundColor: "#C4C4C4"}} key={i}>
                                            {data}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <WordBankModal text="expressions"/>

            <style jsx>{`
               .content_header p {
                    padding: 10px 0;
                    color: #000;
                }
            `}</style>
        </>
    )
}