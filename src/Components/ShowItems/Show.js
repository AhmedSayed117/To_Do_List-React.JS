// eslint-disable-next-line no-unused-vars
import React ,{Fragment} from "react";
import { FiRefreshCcw } from "react-icons/fi";
import "./Show.css"

export const Update = (props) =>{
    const List = props.show;
    return(
        <FiRefreshCcw onClick={()=>props.update(List)}/>
    )
}
const Show = (props) =>{
    const List = props.show;
    const del = props.delete;
    if (List.length >0){
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Task</th>
                        <th>date</th>
                        <th>remaining (day)</th>
                        <th>delete</th>
                    </tr>
                    <Fragment>
                        {List.map(i=>{
                            return(
                                <tr key={i.id}>
                                    <td>{i.name}</td>
                                    <td>{i.date}</td>
                                    <td>{i.remaining}</td>
                                    <td><span onClick={()=>del(i.id)}>x</span></td>
                                </tr>
                            )
                        })}
                    </Fragment>
                    </tbody>
                </table>
            </div>

        )
    }else
    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Task</th>
                    <th>date</th>
                    <th>remaining (day)</th>
                    <th>delete</th>
                </tr>
                </tbody>
            </table>
            <p className="Empty">Not Found tasks yet</p>
        </div>
    )

}
export default Show