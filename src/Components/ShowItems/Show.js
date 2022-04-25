// eslint-disable-next-line no-unused-vars
import React ,{Fragment} from "react";
import "./Show.css"
const Show = (props) =>{
    const List = props.show;
    const del = props.delete;
    if (List.length >0){
        return(
            <div className="container">
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                        <th>delete</th>
                    </tr>
                    <Fragment>
                        {List.map(i=>{
                            return(
                                <tr key={i.id}>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
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
        <div className="container">
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>age</th>
                    <th>delete</th>
                </tr>
                </tbody>
            </table>
            <p className="Empty">
                    Not Found tasks yet
            </p>
        </div>

    )

}
export default Show