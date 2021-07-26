import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseSummary from  '../../components/sections/CourseSummary'
import data from "../../sample_data/proStartedCourse.json"

export default function Progressive({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {
    
    // Side nav sample data
    const importantDates = data.importantDates
    const toLearn = data.toLearn

    return (
        <>
            <CourseBanner 
                bannerImg={bannerImg} 
                bannerHeading={bannerHeading} 
                bannerSubHeading=""
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
                sideTags="Fluency and Coherence, Synonyms and Antonyms, Grammatical Range and Accuracy, Pronounciation" 
                type="progressive" 
                importantDates={importantDates} 
                toLearn={toLearn} 
            />       
        </>
    )
}

Progressive.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    bannerHeading: 'IELTS Step 1',
    bannerText: 'Learn IELTS. Begin here. Do this and that and that and this.',
    courseTimeLine: '5 WEEKS',
    applicableLevel: 'LEVELS 1-6',
    courseType: 'SELF-PACED',
    mainCategory: 'IELTS',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}
  