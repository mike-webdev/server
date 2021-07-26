interface IProps{
    index: number,
    question: string
    rows: number
}
const Essay:React.FunctionComponent<IProps> = (props) =>{
    return(
        <div className="row mb-3" key={props.index}>
            <div className="col-12">
                <label>{props.index+1}. {props.question}</label>
            </div>
            <div className="col-12">
                <textarea
                    rows={props.rows}
                    className="w-100"
                    placeholder="type your answer here..."
                />
            </div>
        </div>
    )
} 
export default Essay;