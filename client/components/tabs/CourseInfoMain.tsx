import CourseInfoList from './CourseInfoList'

export default function CourseInfoMain(props) {
    let courseSummary = ""

    if (props.type === 'progressive') {
        courseSummary = props.courseSummaryPro
    } else if (props.type === 'nonprogressive') {
        courseSummary = props.courseSummaryNonPro
    } else if (props.type === 'pro-category') {
        courseSummary = props.courseSummaryCateg
    } else {
        courseSummary = props.courseNonProCateg
    }
    
    return (
        <>
            <div className="course-info-main">
                <h3>COURSE SUMMARY</h3>
                <p>
                    {courseSummary}
                </p>

                <CourseInfoList type={props.type} />
            </div>
        </>
    )
}