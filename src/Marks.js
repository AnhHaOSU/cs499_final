import { useState } from 'react'; 
import Modal from "react-modal";

Modal.setAppElement("#root");

function Marks({ data, xScale, yScale, xValue, yValue, tooltipFormat, circleRadius}) {

    // Referenced https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda
    const [isOpen, setIsOpen] = useState(false);
    const [currentMajor, setCurrentMajor] = useState({});

    function closeModal() {
      setIsOpen(false);
    }
    function openModal(d) {
      setCurrentMajor(d);
      setIsOpen(true);
    }


    const modalStyle = {
        overlay: { 
          backgroundColor: "grey",
          opacity: "1%"
        },
        content: {
          position: 'absolute',
          top: '100px',
          left: '30%',
          right: '30%',
          bottom: '950px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
    }
      
    return (
      data.map(d => (
        <>
        <circle className= "circle" id = {d.Major_code} key={d.Major_code} className="mark" cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius} fill="blue" fillOpacity="30%" stroke="blue" strokeOpacity="100%" onClick={() => openModal(d)}>
          <title>{tooltipFormat(xValue(d))}</title>
        </circle>
  
        <Modal transparent={false} style={modalStyle} isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} contentLabel="My dialog">
            <div>Major: {currentMajor.Major}</div>
            <div>Major Category: {currentMajor.Major_category}</div>
            <div>Percentage of Women: {(currentMajor.ShareWomen * 100).toFixed(2)}%</div>
            <div>Median Salary: {currentMajor.Median}</div>
            <p/>
            <button onClick={closeModal}>Close</button>
        </Modal>       
        </>
      ))
    );
};
 
export default Marks;
  // copy the class over

  // onClick should update global variables --> 
  // which are used in a new HTML element to display detailed data

  // Buttons that toggle 
  // OnClick, makes items of non major_category a different opacity