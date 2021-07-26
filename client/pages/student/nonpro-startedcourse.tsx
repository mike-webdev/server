import CourseInfo from "../../components/tabs/CourseInfo";
import RelatedCourses from "../../components/tabs/RelatedCourses";
import Forums from "../../components/tabs/StartedCourse/Forums";
import MyReview from "../../components/tabs/StartedCourse/MyReview";
import OtherCourseInfo from "../../components/tabs/StartedCourse/OtherCourseInfo";
import RecentForums  from "../../components/tabs/StartedCourse/RecentForums";
import Timelines from "../../components/tabs/StartedCourse/Timelines";
import StudentReviews from "../../components/tabs/StudentReviews";
import data from "../../sample_data/nonproStartedCourse.json";

export default function NonProStartedCourse() {
    
    // Side nav sample data
    const importantDates = data.importantDates;
    const toLearn = data.toLearn

    //sample data for timeline
    const timeline_data = data.timeline_data;

    //sample data for recent forum section
    const recentForums_data = data.recentForums_data;

    //sample data for My Course goals, Bookmarks, Notes in Course Info Section
    const courseGoals_data = data.courseGoals_data;
    const bookmarks_data= data.bookmarks_data;
    const notes_data = data.notes_data;
    const finished_data = data.finished_data;

    //sample data for forums
    const forums_data = data.forums_data;
    return (
        <>
            <section className="p-course-banner">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="course-image">
                        <img
                            className="img-fluid"
                            src="https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Course Image"
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="course-description">
                        <div>
                            <h1>Mintography</h1>
                            <label className="fw-bold"><i className="fas fa-star colorMeOrange"></i> 4.9 (150 Reviews)</label>
                            <h4 className="mt-2">
                            Learn English through photos. Do this and that and that and that.
                            </h4>
                            <br />
                            <div className="row mt-4">
                            <div className="col-sm-6">
                                <div className="d-grid">
                                <button type="button" className="btn btn-success btn-lg">
                                    Resume Course
                                </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-grid">
                                <button type="button" className="btn btn-primary btn-lg">
                                    Saved Course
                                </button>
                                </div>
                            </div>
                            </div>
                            <br />
                            <label>500 people are currently enrolled in this course</label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="course-details space2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            Course Timeline:<br />
                            <strong>1 DAY - 3 DAYS PER SELECTION</strong>
                        </div>
                        <div className="col-sm-2">
                            Applicable Level:<br />
                            <strong>LEVELS 1-15</strong>
                        </div>
                        <div className="col-sm-2">
                            Course Type:<br />
                            <strong>SELF-PACED</strong>
                        </div>
                        <div className="col-sm-2">
                            Main Category:<br />
                            <strong><a href="/main-category" className="button-lessonLink" 
                            // style="text-decoration: none;"
                            >NONE</a></strong>
                        </div>
                        <div className="col-sm-4">
                            Need to know before taking this course:<br />
                            <strong>LISTENING, SPEAKING, READING, & WRITING SKILLS</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="course-summary space2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav>
                                <div className="nav nav-tabs" id="course-summary-nav" role="tablist">
                                    <button
                                    className="nav-link active"
                                    id="nav-course-info-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-course-info"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-course-info"
                                    aria-selected="true"
                                    >
                                    <strong>Course Info</strong>
                                    </button>
                                    <button
                                    className="nav-link"
                                    id="nav-timelines-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-timelines"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-timelines"
                                    aria-selected="true"
                                    >
                                    <strong>Timelines</strong>
                                    </button>
                                    <button
                                    className="nav-link"
                                    id="nav-forums-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-forums"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-forums"
                                    aria-selected="true"
                                    >
                                    <strong>Forums</strong>
                                    </button>
                                    <button
                                    className="nav-link"
                                    id="nav-student-reviews-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-student-reviews"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-student-reviews"
                                    aria-selected="false"
                                    >
                                    <strong>Student Reviews</strong>
                                    </button>
                                    <button
                                    className="nav-link"
                                    id="nav-related-courses-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-related-courses"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-related-courses"
                                    aria-selected="false"
                                    >
                                    <strong>Related Courses</strong>
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content mt-4" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-course-info"
                                    role="tabpanel"
                                    aria-labelledby="nav-course-info-tab"
                                >
                                    <div className="box mb-4">
                                        <OtherCourseInfo
                                        goals={courseGoals_data}
                                        bookmarks={bookmarks_data}
                                        notes={notes_data}
                                        finishedTopics = {finished_data}
                                        />
                                     </div> 

                                        <div className="row">
                                            <CourseInfo 
                                            sideTags="Photos, Vocabulary, Expressions, Storytelling, Simulation of Real-life Conversations" 
                                            type="nonprogressive" 
                                            importantDates={importantDates} 
                                            toLearn={toLearn} />
                                        </div>    
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-timelines"
                                    role="tabpanel"
                                    aria-labelledby="nav-timelines-tab"
                                >
                                    
                                    <Timelines
                                        timeline={timeline_data}
                                        progress={10}
                                    />
                                    
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-forums"
                                    role="tabpanel"
                                    aria-labelledby="nav-forums-tab"
                                >
                                    <div className="row">
                                        <Forums
                                        data = {forums_data}
                                        />
                                        <RecentForums
                                        course_type="progressive"
                                        data = {recentForums_data}
                                        />                  
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-student-reviews"
                                    role="tabpanel"
                                    aria-labelledby="nav-student-reviews-tab"
                                >
                                    <MyReview/>
                                    <StudentReviews/>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-related-courses"
                                    role="tabpanel"
                                    aria-labelledby="nav-related-courses-tab"
                                >
                                    <RelatedCourses/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}