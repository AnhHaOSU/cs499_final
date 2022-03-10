import { useState } from 'react'; 
import Modal from "react-modal";

Modal.setAppElement("#root");

function Filter({data}) {
    const [currentPercentage, setCurrentPercentage] = useState('');

    function onPercentChange(val) {
        if (val > '0'){
            var newPercentage = parseInt(val)
    
            console.log(newPercentage);
    
            for(var i = 0; i < data.length; i++){  
                if ((data[i].ShareWomen * 100) < newPercentage){
                    var currItem = data[i].Major_code
                    var stringItem = String(currItem);
                    var currElement = document.getElementById(stringItem);
                    currElement.setAttribute("fill-opacity", "10%");
                    currElement.setAttribute("stroke-opacity", "10%");
                } else {
                    var currItem = data[i].Major_code
                    var stringItem = String(currItem);
                    var currElement = document.getElementById(stringItem);
                    currElement.setAttribute("fill-opacity", "30%");
                    currElement.setAttribute("stroke-opacity", "100%");
                }
            }
        }
    }



    
    return (
        <form>
            <label>
            Enter Filter Percentage (0-100):
             <input type="text" name="filterP" value={currentPercentage} onChange={event => setCurrentPercentage(event.target.value)} onClick={onPercentChange(currentPercentage)}/>
            </label>
            {/* <input type="submit" value="Submit" onClick={onPercentChange(currentPercentage)} /> */}
        </form>
    )
};
 
export default Filter;