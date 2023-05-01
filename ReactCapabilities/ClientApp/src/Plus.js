import "./Plus.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Redirect, Link } from 'react-router-dom';
import { Layout } from "./components/Layout";

function Plus() {

    const [newData, setNewData] = useState([]);
    const [responseData, setResponseData] = useState();

    //useEffect(() => {
    //    //useNavigation("/grid");
    //}, [responseData]);

    const addEntry = (e) => {
        e.preventDefault();
        const tempData = [];
        //console.log("length of this: ", e.target.elements.length-1); // -1 becuase don't want the last one ie the button
        const length = e.target.elements.length - 1;
        console.log("target: ", e.target.elements[0].value);
        for (var i = 0; i < length; i++) {
            //console.log("what is form: ", e.target.elements[i].value);
            newData.push(e.target.elements[i].value);
            console.log(tempData);
        }
        //setNewData(tempData);
        var payload = new FormData();
        payload.append("id", newData[0]);
        payload.append("column1", newData[1]);
        payload.append("column2", newData[2]);
        payload.append("column3", newData[3]);

        console.log("payload: ", payload);
        // execute the post method to add information into the a new object
        async function postRequest() {
            console.log("inside post request");
            const response = await axios({
                method: "post",
                url: "https://localhost:44463/grid/post",
                data: {
                    id: payload.get("id").toString(),
                    column1: payload.get("column1").toString(),
                    column2: payload.get("column2").toString(),
                    column3: payload.get("column3").toString(),

                },
                headers: { 'Content-Type': 'application/json' }
            })

            return response;
        }
        const response = postRequest();
        response.then((responseD) => {
            console.log("reponse: ", responseD.data);
            if (responseD.data ==="added") {
                console.log("yay it got added");
                setResponseData(responseD.data);
                //return <Redirect to='/grid' />
            }
        });
        //console.log("reponse: ", response);
    }
    return (
        <Layout>
            <div className="PlusContainer">
                {
                    (responseData != null) ? <Link to="/grid"> Added Succesfully </Link>
                        : <form onSubmit={addEntry.bind(this)}>
                            <label>
                                <input type="number" className="idField" placeholder="id" />
                            </label>
                            <br />
                            <label>
                                <input type="text" className="col1Field" placeholder="col1" />
                            </label>
                            <br />
                            <label>
                                <input type="text" className="col2Field" placeholder="col2" />
                            </label>
                            <br />
                            <label>
                                <input type="text" className="col3Field" placeholder="col3" />
                            </label>
                            <br />
                            <button type="submit" >Add</button>
                        </form>
                }
            </div>
        </Layout>
    );

}
export default Plus;