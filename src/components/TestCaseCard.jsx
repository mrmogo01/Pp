import starFull from '../img/star-full.svg';
import peopleApprove from '../img/people-approve.svg';

export default function TestCaseCard(props) {
    return (
        <div className='testcase-card'>
            <img alt='img' src={props.tccImage}></img>
            <div className='catalog-testcase-info-container'>
                <div>
                    <p className='testcase-title'>{props.tccTitle}</p>
                    <img alt='favorite' src={starFull}></img>
                </div>
                <p className='testcase-card-company'>{props.tccCompany}</p>
                <p className='testcase-card-description'>{props.tccDesc}</p>
                <div className='people-approve-container'>
                    <img alt='people' src={peopleApprove}></img>
                    <span>{props.tccPeople}</span>
                </div>
            </div>
        </div>
    )
}