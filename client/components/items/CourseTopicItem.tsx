
export default function CourseTopicItem({ topic }) {
    return (
        <>
            <div className="col-sm-3">
                <div className="card">
                    <img src={topic.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title text-center">{topic.name}</h6>
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}