export default function TestCase(props) {
    return (
        <div className={"TestCase " + props.testCaseClass}>
            <img src={props.tsImage}></img>
            <div>
                <p className="test-case-title">{props.tsTitle}</p>
                <p className="test-case-company">{props.tsCompany}</p>
            </div>
        </div>
    )
}