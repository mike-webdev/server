import { useState } from 'react';
import homework from '../../../sample_data/activities.json'

/*
*OPTIMIZE: Use Component: Essay
*/
const HomeworkWritingTest = () =>{
    const [data, setData] = useState(homework.homework_speaking_test);
    const totalWords=300;
    
    
    
    const showTextLength = (input: string, id:any) =>{
        let wordCount = input.split(" ").length-1;
        let newData = [...data];
        newData[id].text_length = wordCount;
        setData(newData);
    }

      
    return(
        <>
        <div className="instruction">
            <p>Before you begin your homework, please take note of the following:</p>
            <ul>
            <li>This is an actual practice test. There will be two parts, a written and a speaking exercise. The written part of the homework prepares you for the spoken part.</li>
            <li><strong>WRITTEN PART</strong></li>
            <ul>
                <li>answer them below within 300 words.</li>
                <li>you may start the spoken part after you finish the written part</li>
            </ul>
            <li><strong>SPOKEN PART</strong></li>
            <ul>
                <li>This is timed. Please ensure that you are ready before starting. The faster you answer the questions with proper usage of pauses, the better.</li>
                <li>You will have a minute to answer each item and your answers will automatically be recorded. Please make sure that you have a good microphone setup for the spoken part.</li>
                <li>If you’re not ready, you can bookmark this homework for now.</li>
            </ul>
            <li>When you finish your homework, it will be submitted for assessment. You will receive comments and suggestions on how to improve after.</li>
            </ul>
        </div>
        <div
            className="border col-sm-12 p-3"
        >
            <h4 className="mb-4">WRITTEN HOMEWORK</h4>
            { (data.length === 0 )? (<p>NO HOMEWORK</p>) :(
                data.map((value, index)=>(
                    <div className="mb-4" key={value.id}>
                    <p>{index+1}. {value.question}</p>
                    <textarea
                    rows={10}
                    cols={80}
                    onChange={event => showTextLength(event.target.value, index)}
                    />
                    {(value.text_length > totalWords)?
                    (<p className="text-danger">You are exceeding the required maximum words: {value.text_length}/{totalWords}</p>) 
                    :
                    (<p className="float-right">Word count: {value.text_length}/{totalWords}</p>)}
                    
                    </div>
                ))
            )

            }
        </div>
        </>
    )
}
export default HomeworkWritingTest;