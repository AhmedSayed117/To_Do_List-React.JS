import React,{Component} from "react";
import "./Add.css"
class Add extends Component{

    state ={
        name: "",
        date:"",
        remaining:""
    }
    handleChange = (e)=>{
        if (e.target.id !== "remaining"){
            this.setState({
                [e.target.id] : e.target.value,
            })
        }else {
            const [date2,date1] = [new Date(e.target.value),new Date()];
            const diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
            this.setState({
                remaining: diffDays,
                date:e.target.value
            })
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.add(this.state);
    }

    render() {
        return (
            <div className={"clear"}>
                <form onSubmit={this.handleSubmit}>
                    <input type={"text"} placeholder={"Enter Name Of Task ..."} id={"name"} onChange={this.handleChange} required/>
                    {/*<select id={"day"} onChange={this.handleChange} required>*/}
                    {/*    <option>Saturday</option>*/}
                    {/*    <option>Sunday</option>*/}
                    {/*    <option>Monday</option>*/}
                    {/*    <option>Tuesday</option>*/}
                    {/*    <option>Wednesday</option>*/}
                    {/*    <option>Thursday</option>*/}
                    {/*    <option>Friday</option>*/}
                    {/*</select>*/}
                    <input onChange={this.handleChange} id={"remaining"} type="date"/>
                    <input type={"submit"} value={"Add Task"}/>
                </form>
            </div>
        );
    }
}
export default Add;