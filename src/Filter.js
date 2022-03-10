import { useState } from 'react'; 
import Modal from "react-modal";

Modal.setAppElement("#root");

function Filter({data}) {
    const [currMajorGroup, setCurrMajorGroup] = useState('');

    function onCurrCategoryChange(val){
        for(var i = 0; i < data.length; i++){  
            if (data[i].Major_category === val){
                var currItem = data[i].Major_code
                var stringItem = String(currItem);
                var currElement = document.getElementById(stringItem);
                currElement.setAttribute("fill-opacity", "60%");
                currElement.setAttribute("stroke-opacity", "60%");
            
            } else{
                var currItem = data[i].Major_code
                var stringItem = String(currItem);
                var currElement = document.getElementById(stringItem);

                if (currElement !== null){
                    currElement.setAttribute("fill-opacity", "10%");
                    currElement.setAttribute("stroke-opacity", "10%");
                }
            }
        }

    }


    
    return (
        <>
        {/* <form>
            <label>
            Enter Filter Percentage (0-100):
             <input type="text" name="filterP" value={currentPercentage} onChange={event => setCurrentPercentage(event.target.value)} onClick={onPercentChange(currentPercentage)}/>
            </label>
        </form> */}

        <div style={{display:'inline-block'}}>
            <input type="radio" value="Engineering" name="gender" onChange={event => setCurrMajorGroup(event.target.value) && onCurrCategoryChange(currMajorGroup)}/> Engineering
            <input type="radio" value="Physical Sciences" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)} /> Physical Sciences
            <input type="radio" value="Law & Public Policy" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)} /> Law and Public Policy
            <input type="radio" value="Computers & Mathematics" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Computers and Mathematics
            <input type="radio" value="Agriculture & Natural Resources" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Agriculture and Natural Resources
            <input type="radio" value="Business" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Business
            <input type="radio" value="Industrial Arts & Consumer Services" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Industrial Arts and Consumer Services
            <input type="radio" value="Education" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Education
            <input type="radio" value="Psychology & Social Work" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Psychology and Social Work
            <input type="radio" value="Arts" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Arts
            <input type="radio" value="Humanities & Liberal Arts" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Humanities and Liberal Arts
            <input type="radio" value="Health" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Health
            <input type="radio" value="Biology & Life Sciences" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Biology and Life Sciences
            <input type="radio" value="Communication & Journalism" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Communication and Journalism
            <input type="radio" value="Interdisciplinary" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> Interdisciplinary
            <input type="radio" value="All" name="gender" onChange={event => setCurrMajorGroup(event.target.value)} onClick={onCurrCategoryChange(currMajorGroup)}/> All
        </div>


        </>
    )
};
 
export default Filter;