import Link from 'next/link'

export default function CourseBanner(props) {
    return (
        <>
            <section className="p-course-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="course-video py-4 text-center">
                                <h1><strong>Course Preview</strong></h1>
                                <p>In this video, see what this course has in store for you.</p>
                                <iframe width="100%" height="380px" 
                                    src="https://www.youtube.com/embed/zMlI6D34BJY" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="course-description">
                                <div>
                                    <h1>{props.bannerHeading}</h1>
                                    <p className="fw-bold text-uppercase">{props.bannerSubHeading}</p>
                                    <label className="fw-bold"><i className="fas fa-star colorMeOrange"></i> 4.9 (150 Reviews)</label>
                                    <h4 className="mt-2">
                                    {props.bannerText}
                                    </h4>
                                    <br />
                                    <div className="row mt-4">
                                    <div className="col-sm-6">
                                        <div className="d-grid">
                                            <Link href={props.redirect}>
                                                <a  className="btn btn-success btn-lg">
                                                    Start Course
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-lg">
                                            Save Course
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
        </>
    )
}