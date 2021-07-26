
export default function WordBankModal(props) {
    
    // function to redirect to wordbank section
    const showWordBank = (text) => {
        const wordBank = document.querySelector('#v-pills-word-bank-tab') as HTMLButtonElement
        const wordBankModal = document.querySelector('#'+text+'WordBankModal').getElementsByTagName("button")[1]
        
        wordBankModal.click()
        wordBank.click()
    }

    return (
        <>
            <div className="modal fade word_bank_modal" id={`${props.text}WordBankModal`} tabIndex="-1" aria-labelledby={`${props.text}WordBankModalLabel`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body border border-5 border-dark">
                            <div className="py-5 text-center">
                                <h3 style={{textTransform: "uppercase"}}><strong>{props.text} SAVED!</strong></h3>
                                <p>You can check your saved {props.text} in the Word Bank</p>
                                <div className="row justify-content-center py-3">
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-md btn_modal" onClick={() => showWordBank(props.text)}>Check Word Bank</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-md btn_modal" data-bs-dismiss="modal">Close</button>
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