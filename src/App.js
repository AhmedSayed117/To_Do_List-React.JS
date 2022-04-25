import React,{Component} from "react";
import './App.css';
import Show from "./Components/ShowItems/Show";
import Add from "./Components/Additems/Add";
class App extends Component{
    state = {
        Items :[
            {id:1,name:"ahmed",age:20},
            {id:2,name:"sayed",age:47},
            {id:3,name:"hassan",age:50}
        ]
    }
    delete = (id)=> {
        let items = this.state.Items
        let selectedToDelete = items.findIndex(i => i.id === id)
        console.log(selectedToDelete)
        items.splice(selectedToDelete,1)
        this.setState({
            Items:items
        })
    }

    render() {
        return (
            <div className="App">
                To Do App
                <Show show={this.state.Items} delete ={this.delete}/>
                <Add/>
            </div>
        );
    }
}
export default App;