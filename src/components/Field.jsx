export default function Field(props) {
    return (
        <div className={"Field " + props.fieldClass}>
            <label>{props.labelText}</label>
            <input></input>
        </div>
    )
}