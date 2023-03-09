import React,{ useState }from 'react';
import MapItem from "../../MapItem";
import '../../App.css';
export default class MapEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            sizeX:100,
            sizeY:100,
        }
    }
    renderMap = () => {
        let sizeX=this.state.sizeX;
        let array = new Array();
        for (let x=0;x<sizeX;x++){
            array.push(this.renderRow(x<sizeX/2?x:sizeX-x));
        }
        //    height: 2900px;
        //     width: 5600px;
        return(
            <div className={"Map-Edit"} style={{height:29*this.state.sizeX+"px",width:56*this.state.sizeY+"px"}}>
                {array}
            </div>
        )
    }
    renderRow=(rowSize)=>{
        let arrayX=new Array();
        for (let y=0;y<rowSize;y++){
            arrayX.push(<MapItem/>)
        }
        return(
            <div style={{display: 'flex'}}>
                {arrayX}
            </div>
        )
    }


    render() {
        return(this.renderMap())
    }


}