import { useState, useRef } from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const [state, setState] = useState({
    playing: false,
  });
  const { playing } = state;

  const playerRef = useRef(null);


  //DATA
  const src_video = "https://youtu.be/L-NSPhLHIBA";
  const [transcript, setTranscript] = useState([
    {
      id: 0,
      start: 0,
      end: 3.7,
      sentence:
        "I know a lot of has been feeling under the weather lately. It’s that time of year.",
      easy: ["know", "under"],
      normal: ["been", "feeling" ,"weather"],
      hard: ["weather","know","lately","year"],
    },
    {
      id: 1,
      start: 4,
      end: 13.5,
      sentence:
        "And according to a study done by the University of Arizona, they discovered that your keyboard have hundreds of time more bacteria per square inch than a toilet seat.",
      easy: ["according", "university"],
      normal: ["according", "University" ,"discovered"],
      hard: ["study","university","keyboard","bacteria"],
    },
    {
      id: 2,
      start: 13.6,
      end: 16.4,
      sentence:
        "I heard your mama has more bacteria per square inch than the toilet seat. ",
      easy: ["bacteria", "toilet"],
      normal: ["heard", "more" ,"square"],
      hard: ["bacteria","square","toiler","seat"],
    },
    {
      id: 3,
      start: 16.5,
      end: 18.8,
      sentence:
        "That’s true. That’s true. I dated her mama. And you know what?",
      easy: ["true", "dated"],
      normal: ["dated", "mama" ,"know"],
      hard: ["That's","true","mama","know"],
    },
    {
      id: 4,
      start: 18.9,
      end: 20,
      sentence: "Stop!",
      easy: [""],
      normal: [""],
      hard: [""],
    },
    {
      id: 5,
      start: 21,
      end: 26.1,
      sentence:
        "One of the simplest ways to cut down on the spread of germs is to use something called the vampire cough.",
      easy: ["simplest", "spread"],
      normal: [""],
      hard: [""],
    },
    {
      id: 6,
      start: 26.2,
      end: 28,
      sentence: "Did you say vampire?",
      easy: ["vampire"],
      normal: ["vampire","say"],
      hard: ["Did", "you", "say"],
    },
    {
      id: 7,
      start: 28.1,
      end: 33,
      sentence:
        "Oh no. It’s just that when a vampire had to cough, he would do it like this.",
      easy: ["vampire", "cough"],
      normal: ["It's", "when" ,"cought"],
      hard: ["vampire","like","would","just"],
    },
    {
      id: 8,
      start: 34,
      end: 39.5,
      sentence:
        "Right. And ruin their cloaks. Do you have any idea how expensive wool is in Transylvania? ‘Cause of the Euro.",
      easy: ["ruin", "expensive"],
      normal: ["their", "idea" ,"expensive"],
      hard: ["Right.","Transylvania","wool","Euro"],
    },
    {
      id: 9,
      start: 39.6,
      end: 48,
      sentence:
        "Well, other things you can do to help cut down on the spread of disease are to wash your hands regularly, don’t come in if you’re sick, and get your flu shot.",
      easy: ["things", "disease"],
      normal: ["Well", "spread" ,"regularly"],
      hard: ["things","help","regularly","sick"],
    },
    {
      id: 10,
      start: 49,
      end: 51.8,
      sentence:
        "Also, I’m going to set up hand sanitizing stations around the office.",
      easy: ["going", "sanitizing"],
      normal: ["going", "sanitizing" ,"office"],
      hard: ["Also","going","stations","office"],
    },
    {
      id: 11,
      start: 52,
      end: 55.4,
      sentence: "No, no, no! They will cost you your life.",
      easy: ["cost", "life"],
      normal: ["No", "They" ,"cost"],
      hard: ["cost","They","your","life"],
    },
    {
      id: 12,
      start: 55.5,
      end: 55.9,
      sentence: "Elaborate.",
      easy: [""],
      normal: [""],
      hard: [""],
    },
    {
      id: 13,
      start: 56.5,
      end: 75,
      sentence:
        "The worst thing you can do for your immune system is to coddle it. They need to fight their own battles.  If Sabre really cared about our well-being, the would set up hand desanitizing stations. A simple bowl at every juncture filled with dirt, vomit, fecal matter. Exposing yourself to germs is the best way to make yourself stronger. ",
      easy: ["immune", "battles"],
      normal: ["immune", "worst" ,"battles"],
      hard: ["worst","battles","well-being","stronger"],
    },
    {
      id: 14,
      start: 75.5,
      end: 78,
      sentence:
        "So, by that rationale, if I have to sneeze, I should just sneeze on you.",
      easy: ["rationale", "sneeze"],
      normal: ["rationale", "sneeze" ,"should"],
      hard: ["rationale","sneeze","should","you"],
    },
    {
      id: 15,
      start: 79,
      end: 81.5,
      sentence: "Yes, I would welcome it.",
      easy: ["welcome"],
      normal: ["would", "welcome"],
      hard: ["Yes,","would","welcome"],
    },
    {
      id: 16,
      start: 84,
      end: 85.5,
      sentence: "You’re welcome.",
      easy: ["welcome"],
      normal: ["welcome"],
      hard: ["welcome"],
    },
    {
      id: 17,
      start: 86.1,
      end: 100,
      sentence:
        "The principle is sound. To avoid illness, expose yourself to germs, enabling your immune system to develop antibodies. I don’t know why everyone doesn’t do this. Maybe they have something against living forever.",
      easy: ["principle", "yourself"],
      normal: ["illness", "antibodies"],
      hard: ["avoid","enabling","everyone"],
    },
  ]);

  //END OF DATA

  const onProgress = (changeState) => {
    var curTime = playerRef.current.getCurrentTime();
    // console.log(curTime);
    setState({ ...state, ...changeState });

    transcript.forEach(function (item: any, index: number) {
      //add current
      if (curTime >= item.start && curTime <= item.end) {
        document.getElementById(item.id.toString()).classList.add("current");

        //go to top current sentence
        var myElement = document.getElementById(item.id);
        var topPos = myElement.offsetTop;
        document.getElementById("transcript").scrollTop = topPos - 50;
        //display redo button
        document.getElementById("redo" + item.id).classList.remove("d-none");
      } else {
        document.getElementById(item.id.toString()).classList.remove("current");
        document.getElementById("redo" + item.id).classList.add("d-none");
      }

      //redo
      var loop = document.getElementById("loop" + item.id) as HTMLInputElement;
      if (loop.checked == true) {
        if (curTime <= item.start || curTime >= item.end) {
          setState({ playing: true });
          playerRef.current.seekTo(item.start);
        }
      }
    });
  };

  function JumpTo(start: number) {
    setState({ playing: true });
    playerRef.current.seekTo(start);
  }

  //Modes
  function Easy() {
    transcript.forEach((line: any) => {
      let id = line.id;
      var str = line.sentence;

      var words = line.easy;

      var ctr = 0;
      for (let word of words) {
        str = str.replace(word, '<input class="blank" id="line'+id+"answer"+ctr+'"/>');
        ctr++
      }

      const newLines = [...transcript];
      newLines[id]["sentence"] = str;
      setTranscript(newLines);
    });
  }

  function Normal() {
    transcript.forEach((line: any) => {
      let id = line.id;
      var str = line.sentence;

      var words = line.normal;

      for (let word of words) {
        str = str.replace(word, '<input class="blank"/>');
      }

      const newLines = [...transcript];
      newLines[id]["sentence"] = str;
      setTranscript(newLines);
    });
  }
  function Hard() {
    transcript.forEach((line: any) => {
      let id = line.id;
      var str = line.sentence;

      var words = line.hard;

      for (let word of words) {
        str = str.replace(word, '<input class="blank"/>');
      }

      const newLines = [...transcript];
      newLines[id]["sentence"] = str;
      setTranscript(newLines);
    });
  }
  function Master() {
    transcript.forEach((line: any) => {
      let id = line.id;

      const newLines = [...transcript];
      newLines[id]["sentence"] = '<input class="blank w-full"/>';
      setTranscript(newLines);
    });
  }

  return (
    <>

      <p>
        <strong>A. Listening Practice. </strong>Listen to the lines then fill
        the missing words. This activity has four difficulty levels. The
        different levels will determine the number of words that will be hidden
        in each line.
      </p>
      <ReactPlayer
        ref={playerRef}
        controls
        url={src_video}
        playing={playing}
        onProgress={onProgress}
        className="w-100 h-500"
      />
      <ul className="mode">
        <li>
          <button className="btn btn-light" onClick={Easy}>
            Easy
          </button>
        </li>
        <li>
          <button className="btn btn-light" onClick={Normal}>
            Normal
          </button>
        </li>
        <li>
          <button className="btn btn-light" onClick={Hard}>
            Hard
          </button>
        </li>
        <li>
          <button className="btn btn-light" onClick={Master}>
            Master
          </button>
        </li>
      </ul>
      <div className="legend">
        <span>Easy Level - 25% of the words are hidden</span>
        <br />
        <span>Normal Level - 50% of the words are hidden</span>
        <br />
        <span>Hard Level - 75% of the words are hidden</span>
        <br />
        <span>Master Level - 100% of the words are hidden</span>
        <br />
      </div>

      <div className="transcript" id="transcript">
        {transcript.map((item: any, index: number) => {
          return (
            <div className="row sentence" key={index} id={item.id}>
              <div className="col-11">
                <p>
                  <span
                    onClick={() => JumpTo(item.start)}
                    dangerouslySetInnerHTML={{ __html: item.sentence }}
                  >
                    {/* {item.sentence} */}
                  </span>
                </p>
              </div>
              <div className="col-1">
                <div className="redoBox d-none" id={"redo" + item.id}>
                  <input type="checkbox" id={"loop" + item.id} />
                  <label htmlFor={"loop" + item.id}> </label>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .transcript {
          height: 300px;
          overflow-y: scroll;
          padding: 10px 5px;
          position: relative;
        }
        .sentence {
          color: #cacaca;
        }
        .sentence:hover {
          cursor: pointer;
          color: #000;
        }

        .current {
          color: #000;
        }
        .mode {
          display: flex;
          list-style: none;
          justify-content: space-evenly;
          padding: 0;
          margin-top: 20px;
        }
        .mode li {
          width: 25%;
          text-align: center;
        }
        button {
          border: 1px solid black;
          border-radius: 10px;
          width: 95%;
        }
        .legend {
          text-align: center;
          border: 1px solid #000;
          border-radius: 10px;
          width: 99%;
          margin-left: auto;
          margin-right: auto;
          background: #f1f1f1;
          padding: 15px 0;
          font-size: 15px;
        }
        .redoBox {
          text-align: center;
        }
        .redoBox input[type="checkbox"] {
          display: none;
        }
        .redoBox input[type="checkbox"] + label:before {
          font-family: "Font Awesome 5 Free";
          content: "\f01e";
          font-size: 18px;
          cursor: pointer;
          font-weight: 600;
          color: #000;
        }
        .redoBox input[type="checkbox"]:checked + label:before {
          font-weight: 600;
          color: #2ab934;
        }
      `}</style>
    </>
  );
}
