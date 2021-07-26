import {useEffect} from "react";

export default function MultipleItems(props, children) {
    var currentTab = 0; 

    useEffect(()=>{
              
        showTab(currentTab);

        function showTab(n) {
            var x = document.getElementsByClassName("item");
            x[n].classList.add('show');
            document.getElementById("prevBtn").style.display = "none";
        }

    },[])

    function nextPrev(n) {
        console.log(n)
        var x = document.getElementsByClassName("item");
        
        x[currentTab].classList.add('hide');
        
        currentTab = currentTab + n;

        console.log(currentTab+"==="+n);
        

        x[currentTab].classList.remove('hide');
        x[currentTab].classList.add('show');

        if (currentTab == 0) {
            document.getElementById("prevBtn").style.display = "none";
            document.getElementById("nextBtn").style.display = "inline"; 
        } else {
            document.getElementById("prevBtn").style.display = "inline";
            document.getElementById("nextBtn").style.display = "inline"; 
        }
        if (currentTab == (x.length - 1)) {
            document.getElementById("nextBtn").style.display = "none"; 
        } else {
            document.getElementById("nextBtn").style.display = "inline"; 
        }
    }

    return(
        <div className="multi-items-container"> 
            {props.children}

            <a href="#" onClick={() => nextPrev(-1)} id="prevBtn"><i className="fas fa-angle-double-left icons"></i></a>
            <a href="#" onClick={() => nextPrev(1)} id="nextBtn"><i className="fas fa-angle-double-right icons"></i></a>
        </div>
    )


}