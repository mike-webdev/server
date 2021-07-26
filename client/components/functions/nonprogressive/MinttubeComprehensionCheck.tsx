import questions from '../../../sample_data/activities.json'
import Essay from '../../items/Essay'

const ComprehensionCheck = () =>{
    const data = questions.minttube_comprehension_check;
    return(
        <>
        <p><b>B. Comprehension Check. </b>Check your understanding by answering the following questions.</p>
        {(data.length === 0)? (<p>No Data</p>):(
            data.map((value,index)=>(
                <Essay
                    rows={5}
                    index={index}
                    question={value.question}
                />
            ))
        )}
        </>
    )
}
export default ComprehensionCheck;