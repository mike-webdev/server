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
                                {"title":"Introduction", "target":"tab-introduction", "add_class": ""},
                                {"title":"Warm-Up", "target":"tab-warm-up", "add_class": "active"},
                                {"title":"Lesson Preview", "target":"none1", "add_class": "",
                                "sub_list":[
                                  {"subtitle": "Key Vocabulary", "subtarget":"tab-key-vocabulary", "addsub_class":""},
                                  {"subtitle": "Key Expressions", "subtarget":"tab-key-expressions", "addsub_class":""},

                              ]},
                                {"title":"Guided Practice", "target":"none2", "add_class": "",
                                "sub_list":[
                                  {"subtitle": "Vocabulary Check", "subtarget":"tab-vocabulary-check", "addsub_class":""},
                                  {"subtitle": "Roleplay", "subtarget":"tab-roleplay", "addsub_class":""},
                                  {"subtitle": "Story Telling", "subtarget":"tab-story-telling", "addsub_class":""},
                                  {"subtitle": "Discussion", "subtarget":"tab-discussion", "addsub_class":""},

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
                    id="tab-introduction" 
                    title="Introduction"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* INTRO  */}
                </Tab>


                <Tab 
                    id="tab-warm-up" 
                    title="Warm-up"
                    learn_with_teacher_btn="1"
                    breadcrumbs={["Mintography"]}
                    is_active="1"
                  >
                    <MultipleItems>
                        <div className="item">
                            <MultipleChoice 
                                id="warm-up"
                                instruction="Choose the correct word or expression that best fit the photos."
                                img_src="https://images.pexels.com/photos/2374794/pexels-photo-2374794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                choices={[
                                    {"choice":"frappe", "definition":"a coffee-based drink blended with milk", "is_correct":"1"},
                                    {"choice":"milkshake"}
                                ]}
                            />
                        </div>
                        <div className="item">
                            <MultipleChoice 
                                id="warm-up2"
                                instruction="steph"
                                img_src="https://images.pexels.com/photos/2374794/pexels-photo-2374794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                choices={[
                                    {"choice":"s", "definition":"a coffee-based drink blended with milk", "is_correct":"1"},
                                    {"choice":"tep"}
                                ]}
                            />
                        </div>
                    </MultipleItems>
                </Tab>


                <Tab 
                    id="tab-key-vocabulary" 
                    title="Key Vocabulary"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Key Vocabulary  */}
                </Tab>
                

                <Tab 
                    id="tab-key-expressions" 
                    title="Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Key Expressions  */}
                </Tab>


                <Tab 
                    id="tab-lesson-preview" 
                    title="Guided Practice"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Guided Practice  */}
                </Tab>


                <Tab 
                    id="tab-key-vocabulary" 
                    title="Vocabulary Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Vocabulary Check  */}
                </Tab>


                <Tab 
                    id="tab-key-expressions" 
                    title="Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Key Expressions  */}
                </Tab>

                <Tab 
                    id="tab-guided-questions" 
                    title="Guided Quesions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* "Guided Quesions  */}
                </Tab>


                <Tab 
                    id="tab-vocabulary-check" 
                    title="Vocabulary Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Vocabulary Check  */}
                </Tab>


                <Tab 
                    id="tab-roleplay" 
                    title="Roleplay"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Roleplay  */}
                </Tab>

                <Tab 
                    id="tab-story-telling" 
                    title="Story Telling"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Story Telling  */}
                </Tab>

                <Tab 
                    id="tab-discussion" 
                    title="Discussion"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Discussion  */}
                </Tab>


                <Tab 
                    id="tab-homework" 
                    title="Homework"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
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
  