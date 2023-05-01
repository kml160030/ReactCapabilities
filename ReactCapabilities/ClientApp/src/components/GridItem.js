//import "../GridFunction.css";

import axios from "axios";
import { useEffect, useState } from "react";

const GridItem = (props) => {
    const row = props.row;
    const item = props.item;

    //const oldGridItem = item;
    const [gridItem, setGridItem] = useState(item);
    const [oldGridItem, setOldGridItem] = useState(props.item);
    const [itemChanged, setItemChanged] = useState(false);

    function click(event) {
        setGridItem(event.target.textContent);
        setItemChanged(true);
    }

    useEffect(() => {
        if (itemChanged) {
            // find the key associated
            var payload = new FormData();
            Object.entries(row).map(([key,value]) => {
                if (value === oldGridItem) {
                    row[key] = gridItem;
                    
                }
            })
            payload.append("id", row["id"]);
            payload.append("column1", row["col1"]);
            payload.append("column2", row["col2"]);
            payload.append("column3", row["col3"]);

            axios({
                method: "put",
                url: "https://localhost:44463/grid/put",
                data: {
                    id: payload.get("id").toString(),
                    column1: payload.get("column1").toString(),
                    column2: payload.get("column2").toString(),
                    column3: payload.get("column3").toString(),

                },
                headers: { 'Content-Type': 'application/json' }
            });

            setItemChanged(false);
        }
    }, [itemChanged]);

    return (
        <div className="itemContainer">
            {(Number.isInteger(item)) ? <div className="item"> { item} </div>
                : <div contentEditable="true" suppressContentEditableWarning="true" onInput={click} className="item">
                    {item}
                </div>
            }

        </div>
    );

}
export default GridItem;