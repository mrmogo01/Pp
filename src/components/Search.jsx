import Button from "./Button";

export default function Search(props) {
    return (
        <div className={"Search " + props.searchClass}>
            <input placeholder="Поиск..."></input>
            <div className="button-container">
                <Button buttonText="ИСКАТЬ"></Button>
            </div>
        </div>
    )
}