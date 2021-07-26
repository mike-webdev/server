import CourseInfoMain from './CourseInfoMain'
import CourseInfoSide from '../sections/CourseInfoSide'

export default function CourseInfo({ courseSummaryPro, courseSummaryNonPro, courseSummaryCateg, courseNonProCateg, sideTags, type, importantDates, toLearn }) {

    return (
        <>
            <div className="row">
                <div className="col-sm-8">
                    <CourseInfoMain 
                        courseSummaryPro={courseSummaryPro} 
                        courseSummaryNonPro={courseSummaryNonPro} 
                        courseSummaryCateg={courseSummaryCateg}
                        courseNonProCateg={courseNonProCateg} 
                        type={type} 
                    />
                </div>
                <div className="col-sm-4">
                    <CourseInfoSide 
                        sideTags={sideTags} 
                        importantDates={importantDates} 
                        toLearn={toLearn} 
                    />
                </div>
            </div>
        </>
    )
}

CourseInfo.defaultProps = {
    courseSummaryPro: 'The IELTS STEP 1 COURSE is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.',
    courseSummaryNonPro: 'The MINTOGRAPHY COURSE is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.',
    courseSummaryCateg: 'IELTS is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.',
    courseNonProCateg: 'Learning Through Media is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.'
}