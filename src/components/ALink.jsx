export default function ALink(props) {
    return (
        <a href="#a" className={'ALink ' + props.linkClass}>{props.Text}</a>
    )
}