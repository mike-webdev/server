import Link from 'next/link'
import CourseInfoActivityList from '../tabs/CourseInfoActivityList'

export default function CourseInfoItem({ item, type }) {
    return (
        <>
            <div className="box" key={item.id}>
                <div className="row">
                    <div className="col-sm-2">
                        <div className="week">
                            {type === "progressive" ? (
                                <>
                                    <strong>week</strong>
                                    <br />
                                    <h1>{item.week}</h1>
                                </>
                            ) : (
                                <Link href="/course/lessonoutlook2">
                                    <a style={{textDecoration: "none", color: "inherit"}}>
                                        <strong>Course </strong>
                                        <br />
                                        <strong>Overview</strong>
                                    </a>
                                </Link>
                            )}
                           
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <label className="text-muted">{item.duration}</label>
                        <p>
                            <Link href="/course/lessonoutlook">
                                <a className="button-lessonLink w-100"><strong>{item.chapter}</strong></a>
                            </Link>
                            <br />
                            <small>{item.intro}</small>
                        </p>

                        {item.activity.map((act) => (
                            <CourseInfoActivityList key={act.id} activity={act} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}