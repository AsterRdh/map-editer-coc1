import './App.css';
import React from 'react';

export default class MapItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            select: false
        }
    }

    render() {

        return (
            <div className={"box"}>
                <div
                    className={this.state.select?"button-select":"button"}
                    onMouseLeave={()=>{this.setState({select:false})}}
                    onMouseEnter={()=>{this.setState({select:true})}}
                />

                <div className={"box-upper"}>
                <img src={require('./img/15.png')}/>
                </div>
            </div>
        )
    }
}
