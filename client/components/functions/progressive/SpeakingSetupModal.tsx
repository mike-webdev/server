import * as React from "react"
import { useVoiceRecorder } from "use-voice-recorder"
import { useState } from "react"

export default function SpeakingSetupModal(props) {
    const [records, updateRecords] = useState([]);
    const {isRecording, stop, start} = useVoiceRecorder((data) => {
        updateRecords([...records, window.URL.createObjectURL(data)])
    });

    // function to change homework content and open speaking exercise
    const changeContent = () => {
        const writingContainer = document.querySelector('.writing_container')
        const speakingContainer = document.querySelector('.speaking_container')
        const buttonContainer = document.querySelector('.homework_buttons_container')
        const insideContainer = document.querySelector('.speaking_inside_container_'+props.type)
        const testContainer = document.querySelector('.test_speaking_container')

        const startRecordButton = insideContainer.getElementsByTagName("button")[0]

        if (props.type === "homework") {
            writingContainer.classList.add('hide')
            speakingContainer.classList.add('show')
            buttonContainer.classList.add('hide')
        } else {
            testContainer.classList.add('hide')
        }

        insideContainer.classList.add('show')
        startRecordButton.click()
    }

    // function to show test mic action buttons
    const showTestMic = () => {
        document.querySelector('#'+props.type+'_action_buttons').classList.add('show')
        document.querySelector('#test_mic_'+props.type).classList.add('hide')
    }

    return (
        <>
            <div className="modal fade" id={`${props.type}SetupModal`} tabIndex="-1" aria-labelledby={`${props.type}SetupModalLabel`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="py-5 text-center">
                                <div className="py-3">
                                    <h3><strong>
                                        {props.type === "homework" ? 'PREHOMEWORK SETUP' : 'PRETEST SETUP'}
                                        
                                    </strong></h3>
                                    <p className="float-start">Microphone:</p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Microsoft Lifechat</option>
                                    </select>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-md btn-secondary form-control" id={`test_mic_${props.type}`} onClick={() => showTestMic()}>
                                            <i className="fas fa-headset"> Test Microphone</i> 
                                        </button>
                                        <div className="row" id={`${props.type}_action_buttons`} style={{display: 'none'}}>
                                            <div className="col-sm-12">
                                                <button type="button" className="btn btn-sm btn-success" onClick={start}>Start</button>
                                                <button type="button" className="btn btn-sm btn-danger" onClick={stop}>Stop</button>
                                            </div>
                                            <div className="col-sm-12 mt-3">
                                                { isRecording ? (
                                                    <p className={`text-danger record_progress my-2`}><i className="fas fa-record-vinyl"> recording in progress</i></p>
                                                    ) : ''
                                                }
                                                {records.map((data, idx) => (
                                                    <div key={idx}>
                                                        <audio src={data} controls preload={'metadata'} style={{width: '100%'}} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-md btn-secondary form-control" data-bs-dismiss="modal" 
                                            onClick={() => changeContent()}
                                        >
                                            <i className="fas fa-check-circle"> Finish Setup</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}