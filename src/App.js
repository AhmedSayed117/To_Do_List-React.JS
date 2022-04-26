import React,{Component} from "react";
import './App.css';
import Show from "./Components/ShowItems/Show";
import Add from "./Components/Additems/Add";
import {Update} from "./Components/ShowItems/Show";
class App extends Component{
    state = {
        Items :[
            {id:1,name:"Test",date:"2022-04-26",remaining:"Test"},
        ]
    }
    delete = (id)=> {
        let items = this.state.Items
        let selectedToDelete = items.findIndex(i => i.id === id)
        items.splice(selectedToDelete,1)
        this.setState({
            Items:items
        })
    }
    add = (task) =>{
        let tasks = this.state.Items;
        let count = 0;
        tasks.map(i=> count+=1);
        task.id = ++count;
        tasks.push(task);
        this.setState({
            Items : tasks
        })
    }
    update = (list) =>{
        // eslint-disable-next-line array-callback-return
        list.map(i=>{
            const [date2,date1] = [new Date(i.date),new Date()];
            console.log(date1 , date2)
            const diffDays = (parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10));
            console.log(diffDays);
            i.remaining = diffDays;
        })
        this.setState({
            Items: list
        })
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                <div className={"main"}>Tasks
                    <Update update = {this.update} show={this.state.Items}/>
                </div>
                <Show show={this.state.Items} delete ={this.delete} />
                <Add add={this.add}/>

                </div>
            </div>
        );
    }
}
export default App;