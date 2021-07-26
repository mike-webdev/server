import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseSummary from  '../../components/sections/CourseSummary'

export default function ProMainCategory({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {
    
    // Side nav sample data
    const importantDates = [
        "Start of course",
        "Duedates: Homework",
        "Duedates: Quiz (Chapter Mock Tests)",
        "End of Course"
    ]

    const toLearn = [
        {
            title: "Sample Lesson Tag",
            content: [
                "Sample subtag",
                "Sample subtag",
                "Sample subtag"
            ]
        }
    ]

    return (
        <>
            <CourseBanner 
                bannerImg={bannerImg} 
                bannerHeading={bannerHeading} 
                bannerSubHeading="[ 4 COURSES UNDER THIS CATEGORY ]"
                bannerText={bannerText} 
                redirect="/student/pro-startedcourse"
            />
            <CourseDetails 
                courseTimeLine={courseTimeLine} 
                applicableLevel={applicableLevel} 
                courseType={courseType} 
                mainCategory={mainCategory} 
                toKnow={toKnow} 
                type="progressive"
            />
            <CourseSummary 
                sideTags="Vocabulary, Expressions, Grammar, Subject Verb Agreement, Conversations" 
                type="pro-category" 
                importantDates={importantDates} 
                toLearn={toLearn} 
            />
        </>
    )
}

ProMainCategory.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bannerHeading: 'IELTS CATEGORY',
    bannerText: 'IELTS is sed ipsum tellus. Nulla libero lacus, pulvinar tincidunt enim ut, placerat porta quam. Nam vel viverra libero. Vivamus lectus ipsum, porta nec quam eu, maximus condimentum dolor.',
    courseTimeLine: '4-5 Months',
    applicableLevel: 'LEVELS 1-15',
    courseType: 'SELF-PACED',
    mainCategory: 'NONE',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}