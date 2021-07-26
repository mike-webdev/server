import Link from 'next/link'

export default function CourseDetails(props) {
    let redirect = (props.type === 'progressive') ? '/student/pro-maincategory' : '/student/nonpro-maincategory'

    return (
        <>
            <section className="course-details space2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            Course Timeline:<br />
                            <strong>{props.courseTimeLine}</strong>
                        </div>
                        <div className="col-sm-2">
                            Applicable Level:<br />
                            <strong>{props.applicableLevel}</strong>
                        </div>
                            <div className="col-sm-2">
                            Course Type:<br />
                            <strong>{props.courseType}</strong>
                        </div>
                        <div className="col-sm-2">
                            Main Category:
                            <br />
                            <strong>
                                <Link href={redirect}>
                                    <a className="button-lessonLink" style={{textDecoration: "none"}}>
                                        {props.mainCategory}
                                    </a>
                                </Link>
                            </strong>
                        </div>
                        <div className="col-sm-4">
                            Need to know before taking this course:<br />
                            <strong>{props.toKnow}</strong>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}