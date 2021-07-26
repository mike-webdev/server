import questions from '../../../sample_data/activities.json'
import Essay from '../../items/Essay'
const Homework = () =>{
    const data = questions.minttube_homework;

    return(
        <>
        <p><b>B. Writing.</b> Answer in complete sentences.</p>
        {(data.length === 0)? (<p>No Data</p>):(
            data.map((value,index)=>(
                <Essay
                    rows={20}
                    index={index}
                    question={value.question}
                />
            ))
        )}
        </>
    )

}
export default Homework;