export default function Option(props) {
    return (
        <select className={"Option " + props.optionClass}>
            <option default>{props.optionText}</option>
            <option>2</option>
            <option>3</option>
        </select>
    )
}