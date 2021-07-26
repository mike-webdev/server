import Countdown from 'react-countdown'
import speech from 'speech-synth'
import SpeakingSummary from './SpeakingSummary'
import * as React from "react"
import { useVoiceRecorder } from "use-voice-recorder"
import { useState } from "react"

export default function SpeakingExercise(props) {

    // count question replay state
    const [replay, setReplay] = useState(0)

    // for audio recording
    const [records, updateRecords] = useState([])
    const {isRecording, stop, start} = useVoiceRecorder((data) => {
        updateRecords([...records, window.URL.createObjectURL(data)])
    });

    // sample data
    const speechText = "This is a speaking test. Answer the question that will appear on the screen. You will be given a minute to answer before the question changes. Your answers are automatically recorded. Please take note that if you exit, refresh or go to another page, you would need to retake your homework again."
    const questionList = [
        {
            id: 1,
            question: "1. Do you have a hobby?"
        },
        {
            id: 2,
            question: "2. What is your favourite color?"
        },
        {
            id: 3, 
            question: "3. What kind of clothes do you usually wear?"
        }
    ]
    
    // function for text to speech
    const playTextSpeech = (text:string) => {
        speech.say(text)
    }

    let index = 0
    
    // function for next item
    const nextItem = () => {
        showNextItem(questionList[++index])
    }

    // function to change content to next item
    const showNextItem = (item) => {
        const itemQuestion = document.querySelector<HTMLElement>('#item_question_'+props.type)
        const nextButton = document.querySelector<HTMLButtonElement>('.arrow_next_button_'+props.type)
        const actionButtons = document.querySelector<HTMLButtonElement>('#speaking_action_button_'+props.type)
        itemQuestion.innerText = item.question

        if (index >= questionList.length -1) {
            nextButton.classList.add('hide')
            actionButtons.classList.add('show')
        }

        // if (props.type === "homework") {
        //     stop()
        //     start()
        // }
    }

    // count question replay and start recording
    const replayRecording = () => {
        setReplay(replay+1)
        start()
    }

    // function to submit and show homework summary 
    const showSpeakingSummary = () => {
        const insideContainer = document.querySelector<HTMLElement>('.speaking_inside_container_'+props.type)
        const summaryContainer = document.querySelector<HTMLElement>('.speaking_summary_container')
        
        if (props.type === "homework") {
            insideContainer.classList.add('hide')
            summaryContainer.classList.add('show')
        }
    }

    // Render a countdown
    const renderer = ({ minutes, seconds, completed }) => {
        return <span>{minutes}:{seconds}</span>
    }

    return (
        <>
            <div className={`container speaking_inside_container_${props.type}`} style={{display: 'none'}}>
                <div className="row">
                    <div className="speaking_countdown">
                        <p className="float-end">
                            <strong>
                                <Countdown 
                                    date={Date.now() + 600000} 
                                    renderer={renderer}
                                />
                            </strong>
                        </p>
                    </div>
                    <div className="col-sm-12">
                        <i className="fas fa-volume-up" style={{cursor: "pointer"}} onClick={() => playTextSpeech(speechText)}></i> &nbsp;
                        <span>       
                            {speechText}
                        </span>
                    </div> 
                    <div className="col-sm-12">
                        <div className="speaking_item_container">
                            <i className="fas fa-reply fa-lg" style={{cursor: 'pointer'}} title="replay" onClick={() => replayRecording()}></i>
                            <h2 id={`item_question_${props.type}`}>{questionList[0].question}</h2>
                            <i className={`fas fa-angle-double-right fa-lg float-end arrow_next_button_${props.type}`} style={{cursor: 'pointer', position: 'relative', marginTop: '9%'}} onClick={() => nextItem()}></i>      
                        </div>
                    </div>
                </div>
                
                <button className="btn btn-sm btn-success my-2 audio_start_btn" id={`start_btn_${props.type}`} onClick={start}>Start</button>
                <div className="speaking_action_button mt-4" id={`speaking_action_button_${props.type}`} style={{display: 'none'}}>
                    <button type="button" className="btn btn-md btn-secondary" id={`stop_btn_${props.type}`} onClick={stop}>STOP RECORDING</button>
                    <button type="button" className="btn btn-md btn-secondary float-end" onClick={() => showSpeakingSummary()}>SUBMIT & SAVE</button>
                    <div className="mt-3">
                        {records.map((data, idx) => (
                            <div key={idx}>
                                <audio src={data} controls preload={'metadata'} />
                            </div>
                        ))}
                    </div>
                </div>    
                
                <div className="mt-4">
                    { isRecording ? (
                        <p className={`text-danger record_progress my-2`}><i className="fas fa-record-vinyl"> recording in progress</i></p>
                        ) : ''
                    }
                </div>
            </div>

            <div className="speaking_summary_container">
                <SpeakingSummary />
            </div>

            <style jsx>{`
                .speaking_item_container {
                    border: 1px solid #000;
                    width: 100%;
                    height: 110%;
                    padding: 10px;
                }
                .speaking_item_container h2 {
                    text-align: center;
                    margin-top: 10%;
                }
                .speaking_summary_container {
                    display: none;
                }
                .audio_start_btn {
                    display: none;
                }
            `}</style>
        </>
    )
}