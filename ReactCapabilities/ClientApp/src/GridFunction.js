import { useEffect, useState } from "react"
import axios from 'axios';
import "./GridFunction.css";
import GridItem from "./components/GridItem";
import GridRow from "./components/GridRow";
import { Layout } from "./components/Layout";

function GridFunction() {
    const [gridData, setGridData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://localhost:44463/grid/get");
            //console.log("response grid: ", response);
            return response.data;
        }
        const data = getData();

        data.then((responseData) => {
            setGridData(responseData);
        });
    }, []);

    return (
        <Layout>
            <div className="topRow">
                <div className="headerItem">Id</div>
                <div className="headerItem">Column 1</div>
                <div className="headerItem">Column 2</div>
                <div className="headerItem">Column 3</div>
            </div>
            <div className="GridContainer">
                {Object.keys(gridData).map(data => <GridRow rowData={gridData[data]} />)}
            </div>
        </Layout>

    );
}
export default GridFunction;