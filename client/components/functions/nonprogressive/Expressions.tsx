import WordBankModal from './WordBankModal'
import data from '../../../sample_data/lessonPreview.json'

export default function Expressions() {
    // sample data
    const expressionList = data.expressionList

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-sm-12">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                {expressionList.map((data, index) => (
                                    <button key={index} className={index !== 0 ? "nav-link" : "nav-link active"} id={`nav-${data.name}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${data.name}`} type="button" role="tab" aria-controls={`nav-${data.name}`} aria-selected={index !== 0 ? "true" : "false"}>{data.name}</button>
                                ))}
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            {expressionList.map((data, index) => (
                                <div className={index !== 0 ? "tab-pane fade" : "tab-pane fade show active"} id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`} key={index}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <img 
                                                src={data.image}
                                                alt="Sample Image"
                                                style={{width: '100%', height: '300px'}}
                                            />
                                            <p className="text-center text-light bg-dark py-2">{data.name}</p>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="row justify-content-center">
                                                {data.content.map((item) => (
                                                    <div className="content_column" key={item.id}>
                                                        <button type="button" className="btn btn-lg btn-outline-dark btn-block word_button" data-bs-toggle="modal" data-bs-target="#expressionWordBankModal">{item.text}</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
            </div>

            {/* Modal */}
            <WordBankModal text="expression" />
        </>
    )
}