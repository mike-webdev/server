import styles from "../../styles/Sidebar.module.scss";
import {useEffect} from "react";

export default function Sidebar(props) {

      function hideNav(){        
        var navList_container = document.getElementById("sidebar-left");

        navList_container.addEventListener('transitionend', function () {
            navList_container.style.cssText="padding-left:0; padding-right:0; width:0";
            document.getElementById("sidebar_icon").style.display="block";
        }, {
            once: true
        });
      }
    
      function showNav(){    
        var navList_container = document.getElementById("sidebar-left");
        setTimeout(function () {
            navList_container.style.cssText="padding-right: calc(var(--bs-gutter-x)/ 2);padding-left: calc(var(--bs-gutter-x)/ 2); width: null; display:block";
            document.getElementById("sidebar_icon").style.display="none";

        }, 0);
      }
      

    function subList(e){
        var subList_id = e+"-tab-sub";
        var subList_container = document.getElementById(subList_id);

        if(subList_container){
            if (!subList_container.classList.contains('sub_show')) {
                subList_container.classList.add('sub_show');
                subList_container.style.height = 'auto';

                var height = subList_container.clientHeight + 'px';

                subList_container.style.height = '0px';

                setTimeout(function () {
                    subList_container.style.height = height;
                }, 0);
            
            } else {
                subList_container.style.height = '0px';

                subList_container.addEventListener('transitionend', function () {
                    subList_container.classList.remove('sub_show');
                }, {
                    once: true
                });
            
            }
        }

    }
    
    useEffect(()=>{
        document.querySelectorAll('#nav-left .nav-link').forEach(function(e){
            e.addEventListener('click', function() {
                var id = this.id;
                var nav_link = document.querySelectorAll("#nav-left .nav-link");

                [].forEach.call(nav_link, function(e) {
                    e.classList.remove("active");
                });

                document.getElementById(id).classList.add("active");
            });
          });

    }, [])

    const tab_list = Array.from(props.tab_list);

    return (
        <>
            <div id="sidebar_icon" onClick={showNav}><i className="fas fa-info-circle icons"></i></div>
            <div className="col-sm-2 text-center" id="sidebar-left">
              <div id="nav-left">
                <div className={styles.sidenav_container}>
                
                    <div className="d-grid gap-2 col-10 mx-auto mb-4">
                        <div className="btn btn-dark" onClick={hideNav}><i className="fas fa-info-circle icons"></i></div>
                    </div>

                    <img  id="courseimg" className={styles["course-logo"] + " img-fluid rounded-circle mb-4 mx-auto d-block"} src={props.img_src} alt="course logo" />

                    <div id="viewcourse"  className="d-grid gap-2 col-10 mx-auto mb-4">
                        <a href="#" className="btn btn-dark view-course-btn">View Course</a>
                    </div>

                    <div className="nav flex-column nav-pills lesson-sidebar" id={styles.sidenav} role="tablist" aria-orientation="vertical">
                                {
                            tab_list.map((value, index) => {
                                return(
                                    <>
                                    <button className={"nav-link" + " " +value.add_class} id={value.target+"-tab"} data-bs-toggle="pill" data-bs-target={"#"+value.target} type="button" role="tab" aria-controls={value.target} aria-selected="false" key={index+1}  onClick={() => subList(value.target)}>
                                        {value.is_finished == 0 ? (
                                            <i className="far fa-check-circle"></i>
                                        ): value.is_finished == 1 ? (
                                            <i className="fas fa-check-circle text-success"></i>
                                        ) : (
                                            <></>
                                        )
                                        }
                                        &nbsp; {value.title}
                                    </button>
                                    
                                    {value.sub_list &&
                                    value.sub_list.length > 0 &&
                                        <ul
                                        className="sub-menu fw-normal"
                                        id={value.target+"-tab-sub"}
                                        >
                                        {
                                            value.sub_list.map((val, i) => {
                                                return (
                                                    <>
                                                    <li key={i+1}>
                                                        <button className={"nav-link" + " " +value.addsub_class} id={val.subtarget+ "-tab"} data-bs-toggle="pill" data-bs-target={"#"+val.subtarget} type="button" role="tab" aria-controls={val.subtarget} aria-selected="true" key={i+1}>
                                                        {val.is_finished == 0 ? (
                                                            <i className="far fa-check-circle"></i>
                                                            ): value.is_finished == 1 ? (
                                                            <i className="fas fa-check-circle text-success"></i>
                                                        ) : (
                                                            <></>
                                                        )
                                                        }
                                                            &nbsp; {val.subtitle}
                                                        </button>
                                                    </li>
                                                    
                                                    </>
                                                )
                                            })
                                        }
                                        </ul>
                                    }
                                    </>

                                )
                                
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}