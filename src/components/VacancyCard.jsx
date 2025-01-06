import phone from '../img/phone.svg';
import starFull from '../img/star-full.svg';
import Button from './Button';

export default function VacancyCard(props) {
    return (
        <div className='vacancy-card'>
            <div className='vacancy-card-header'>
                <p className='vacancy-name'>{props.vTitle}</p>
                <div>
                    <img alt="phone" src={phone}></img>
                    <img alt="starFull" src={starFull}></img>
                </div>
            </div>
            <h3>УРОВЕНЬ ДОХОДА</h3>
            <p className='company-name'>{props.vCompany}</p>
            <div className='interface-container'>
                <div>
                    <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                    <Button buttonText="ГИБКИЙ ГРАФИК" buttonClass="info-btn"></Button>
                </div>
                <Button buttonText="ОТКЛИКНУТЬСЯ" buttonClass="submit-btn"></Button>
            </div>
        </div>
    )
}