import Sidebar from "../../components/layout/LessonSidebar";
import Notes from "../../components/layout/Notes";
import Tab from "../../components/sections/Course/LessonTab";
import MultipleChoice from "../../components/functions/MultipleChoice";
import MultipleItems from "../../components/functions/MultipleItems";
import Video from "../../components/functions/progressive/Video";
import Warmup from "../../components/functions/progressive/Warmup";
import HomeworkWritingTest from "../../components/functions/progressive/HomeworkWritingTest";
import TrueFalse from "../../components/functions/TrueFalse";
import Sequencing from "../../components/functions/progressive/Sequencing";
import SetupModal from "../../components/functions/progressive/SpeakingSetupModal";
import ChapterTestSpeaking from "../../components/functions/progressive/ChapterTestSpeaking";
import SpeakingExercise from "../../components/functions/progressive/SpeakingExercise";

export default function InsideLesson() {

    return (
      <>
        <div className="container-fluid">
          <div className="row">
          
          <Sidebar 
            tab_list={[
                        {"title":"Week 2 Overview", "target":"none1", "add_class": "", "is_finished":"1", 
                        "sub_list":[
                          {"subtitle": "Introduction: Fluency and Coherence", "subtarget": "none", "addsub_class":"", "is_finished":"1"},
                          {"subtitle": "Additional Resources", "subtarget":"none0", "addsub_class":"", "is_finished":"1"}
                        ]
                        },
                        {"title":"Lesson 1. Pauses", "target":"none2", "add_class": "active","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "  Introduction. Pauses, What are pauses?", "subtarget": "v-pills-week3", "addsub_class":"active","is_finished":"0"},
                          {"subtitle": "Warm-up Activity", "subtarget":"v-pills-week4", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Annotate the Paragraphs", "subtarget":"v-pills-l1-activity", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Exercises", "subtarget":"v-pills-week5", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 2. Filler Words", "target":"none3", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction. Filler Words. What are filler words?", "subtarget": "none2", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity", "subtarget":"none4", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Complete the Sentences", "subtarget":"", "addsub_class":"none5","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Exercises", "subtarget":"", "addsub_class":"none6","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 3. Speech Rate", "target":"none7", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Speech Rate. What is speech rate?", "subtarget": "none8", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, emphasize your points", "subtarget":"none9", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Fast Talks with Idiomatic Expressions", "subtarget":"none10", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Restate the Sentences With Proper Emphasis", "subtarget":"none11", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget":"none12", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"  Lesson 4. Staying on Topic", "target":"none13", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Staying on Topic. How do you stay on topic?", "subtarget": "none14", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, answer as coherently as possible", "subtarget":"none15", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "  Activity: Fast Talks. Answer questions coherently within a time limit", "subtarget":"", "addsub_class":"none16","is_finished":"0"},
                          {"subtitle": "  Activity: Complete the Sentences. Stay coherent.", "subtarget":"none17", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget":"none18", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 5. Cohesive Devices", "target":"none19", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Cohesive Devices. What are Cohesive Devices", "subtarget": "none20", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, answer using cohesive devices", "subtarget":"none", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Restate the Sentences using cohesive devices", "subtarget":"none21", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "  Activity: Fast Talk - Use Cohesive Devices to answer questions within a time limit.", "subtarget":"none22", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Activity (General Deadline: June 8)", "subtarget":"", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 6. Answer Structure", "target":"none23", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Answer Structure. What are answer structures?", "subtarget": "none24", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, answer with the proper structure", "subtarget":"none25", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Restate the Sentences using answer structures", "subtarget":"none26", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Fast Talk - Use Answer Structures to answer questions within a time limit", "subtarget":"none27", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget":"none28", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Week 2 Conclusion", "target":"none29", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Chapter Test", "subtarget": "chapterTest", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Additional Resources", "subtarget":"none31", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Chapter Test Speaking Exercise", "subtarget":"chapterTestSpeaking", "addsub_class":"","is_finished":"0"}
                        ]
                        },
                        {"title":"True False", "target":"true_false", "add_class": "","is_finished":"0"
                        },
                        
                    ]}  
              img_src="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />
            <div className="col ml-2 mr-2">
              <div className="">
                <div className="tab-content" id="sidenav-content">
                
                {/* *
                *<Tab></Tab> Components variables:
                *is_active
                *breadcrumbs
                *title
                *learn_with_teacher_btn (*value of 1/0)- shows Learn with Teacher Button
                *learning_goals
                *keywords
                *is_done
                * */}

                <Tab 
                    id="tab-introduction" 
                    title="Introduction"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                    is_active="1"
                  >
                    {/* INTRO  */}
                </Tab>


                <Tab 
                    id="tab-warm-up" 
                    title="Warm-up"
                    learn_with_teacher_btn="1"
                    breadcrumbs={["IELTS"]}
                  >
                </Tab>


                <Tab 
                    id="tab-key-vocabulary" 
                    title="Key Vocabulary"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Key Vocabulary  */}
                </Tab>
                

                <Tab 
                    id="tab-key-expressions" 
                    title="Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Key Expressions  */}
                </Tab>


                <Tab 
                    id="tab-lesson-preview" 
                    title="Guided Practice"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Guided Practice  */}
                </Tab>


                <Tab 
                    id="tab-key-vocabulary" 
                    title="Vocabulary Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Vocabulary Check  */}
                </Tab>


                <Tab 
                    id="tab-key-expressions" 
                    title="Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Key Expressions  */}
                </Tab>

                <Tab 
                    id="tab-guided-questions" 
                    title="Guided Quesions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* "Guided Quesions  */}
                </Tab>


                <Tab 
                    id="tab-vocabulary-check" 
                    title="Vocabulary Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Vocabulary Check  */}
                </Tab>


                <Tab 
                    id="tab-roleplay" 
                    title="Roleplay"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Roleplay  */}
                </Tab>

                <Tab 
                    id="tab-story-telling" 
                    title="Story Telling"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Story Telling  */}
                </Tab>

                <Tab 
                    id="tab-discussion" 
                    title="Discussion"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Discussion  */}
                </Tab>


                <Tab 
                    id="tab-homework" 
                    title="Homework"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["IELTS"]}
                  >
                    {/* Homework  */}
                </Tab>

                  

                </div>
              </div>
            </div>
            
            <Notes/>

          </div>

          {/* Microphone Setup Modal  */}
          {/* <SetupModal type="homework"/> */}
        </div>

      </>

    )
  }
  