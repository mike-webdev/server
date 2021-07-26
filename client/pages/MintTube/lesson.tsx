import Sidebar from "../../components/layout/LessonSidebar";
import Notes from "../../components/layout/Notes";
import Tab from "../../components/sections/Course/LessonTab";
import MultipleChoice from "../../components/functions/MultipleChoice";
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
                                {"title":"Introduction", "target":"none1", "add_class": ""},
                                {"title":"Warm-Up", "target":"none2", "add_class": "active", 
                                  "sub_list":[
                                    {"subtitle": "Word Game", "subtarget":"tab-word-game", "addsub_class":"",},
                                    {"subtitle": "Key Vocabulary", "subtarget":"tab-key-vocabulary", "addsub_class":"",},
                                    {"subtitle": "Key Expressions", "subtarget":"tab-key-expressions", "addsub_class":"",},

                                ]},
                                {"title":"Lesson Preview", "target":"tab-lesson-preview", "add_class": ""},
                                {"title":"Guided Practice", "target":"none3", "add_class": "",
                                  "sub_list":[
                                    {"subtitle": "Vocabulary Check", "subtarget":"tab-vocabulary-check", "addsub_class":""},
                                    {"subtitle": "Expressions Check", "subtarget":"tab-expressions-check", "addsub_class":""},
                                    {"subtitle": "Listening Practice", "subtarget":"tab-listening-practice", "addsub_class":""},
                                    {"subtitle": "Speaking Practice", "subtarget":"tab-speaking-practice", "addsub_class":""},

                                ]},
                                {"title":"Homework", "target":"tab-homework", "add_class": ""},
                                
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
                    id="tab-word-game" 
                    title="Word Blaster"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                    is_active="1"
                  >
                    {/* WORD BLASTER GAME  */}
                </Tab>


                <Tab 
                    id="tab-key-vocabulary" 
                    title="Key Vocabulary"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* Key Vocabulary  */}
                </Tab>
                

                <Tab 
                    id="tab-key-expressions" 
                    title="Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* Key Expressions  */}
                </Tab>


                <Tab 
                    id="tab-lesson-preview" 
                    title="Guided Practice"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* Guided Practice  */}
                </Tab>


                <Tab 
                    id="tab-vocabulary-check" 
                    title="Vocabulary Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* Vocabulary Check  */}
                </Tab>


                <Tab 
                    id="tab-expressions-check" 
                    title="Expressions Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* Expressions Check  */}
                </Tab>

                <Tab 
                    id="tab-listening-practice" 
                    title="Listening Practice"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* "Listening Practice  */}
                </Tab>


                <Tab 
                    id="tab-speaking-practice" 
                    title="Speaking Practice"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* "Speaking Practice  */}
                </Tab>


                <Tab 
                    id="tab-homework" 
                    title="Homework"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* "Speaking Practice  */}
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
  