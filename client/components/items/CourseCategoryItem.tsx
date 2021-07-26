
export default function CourseCategoryItem({ category }) {
    return (
        <>
            <div className="col-sm-3">
                <div className="card">
                    <img src={category.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title text-center">{category.name}</h6>
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}
