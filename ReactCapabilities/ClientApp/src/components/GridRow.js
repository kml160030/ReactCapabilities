import GridItem from "./GridItem";


const GridRow = (props) => {

    const rowData = props.rowData;
    return (
        <div className="GridRow">
            {Object.keys(rowData).map(data => <GridItem row={rowData} item={rowData[data]} />)}
        </div>
    );

}
export default GridRow;