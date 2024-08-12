import React from "react";
import right from "../assets/images/right-icon.svg";
import left from "../assets/images/left-icon.svg";

export default function ImageSlider(props){
    const [currentID, setCurrentID] = React.useState(0)
    const sliderStyle = {
        height: '100%',
        position: 'relative',
        // border: '1px solid green'
    }
    const slideStyle= {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${props.img[currentID].url})`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: '0 20px'
        // border: '1px solid red'
    }
    const dotCont = {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer'
    }
    function moveForward(){
        const newID = currentID === props.img.length - 1 ? 0 : currentID + 1
        setCurrentID(newID)
    }
    function moveBack(){
        const newID = currentID === 0 ? props.img.length - 1 : currentID - 1
        setCurrentID(newID)
    }
    function toSpecific(index){
        setCurrentID(index)
    }
    const specificImg = props.img.map((imgItem, imgItemIndex)=>{
       return <div key={imgItemIndex} onClick={() => {toSpecific(imgItemIndex)}}>⚪</div>
    })
    return(
        <div style={sliderStyle}>
            <div style={slideStyle}>
                <img src={left} alt="" style={{marginLeft:'20px',width:'30px',height: '30px'}} onClick={moveBack} />
                <img src={right} alt="" style={{marginRight:'20px',width:'30px',height: '30px'}} onClick={moveForward} />
            </div>
            <div style={dotCont}>{specificImg}</div>
        </div>
    )
}