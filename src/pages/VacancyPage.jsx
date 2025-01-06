import Header from '../components/Header';
import starFull from '../img/star-full.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import phone from '../img/phone.svg';
import defaultTCImage from '../img/defaultTCImage.png';
import TestCase from '../components/TestCase';

const data =[{
    'title': "НАЗВАНИЕ СТАЖИРОВКИ",
    'company': "от кого стажировка",
    'img': defaultTCImage
}, 
{
    'title': "НАЗВАНИЕ СТАЖИРОВКИ",
    'company': "от кого стажировка",
    'img': defaultTCImage
},  
{
    'title': "НАЗВАНИЕ СТАЖИРОВКИ",
    'company': "от кого стажировка",
    'img': defaultTCImage
}, 
{
    'title': "НАЗВАНИЕ СТАЖИРОВКИ",
    'company': "от кого стажировка",
    'img': defaultTCImage
}];

const data2 = ['НАЗВАНИЕ СТАЖИРОВКИ', 'описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки описание стажировки',
    ['пункт 1', 'пункт 2', 'пункт 3', 'пункт 4', 'пункт 5', 'пункт 6'], ['информация о компании', 'информация о компании', 'информация о компании', 'информация о компании', 'информация о компании', 'информация о компании']
]

export default function VacancyPage() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <p className="main-title">{data2[0]}</p>
            <div className='vacancy-container'>
                <div className='vacancy-info-container'>
                    <div>
                        <Button buttonText="НАПРАВЛЕНИЕ" buttonClass="info-btn"></Button>
                        <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                        <Button buttonText="ГРАФИК РАБОТЫ" buttonClass="info-btn"></Button>
                    </div>
                    <img alt="star" src={starFull}></img>
                </div>
                <textarea rows={4}>{data2[1]}</textarea>
                <h3>УРОВЕНЬ ДОХОДА</h3>
                <Button buttonText="ОТКЛИКНУТЬСЯ"></Button>
                <div className='vacancy-company-info-container'>
                    <div className='skills-container'>
                        <h4>ЧЕМУ НАУЧИТЕСЬ:</h4>
                        <ul>
                            {data2[2].map(x => <li>{x}</li>) }
                        </ul>
                    </div>

                    <div className='company-info'>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <h4>КОМПАНИЯ</h4>
                        </div>
                        <ul>
                            {data2[3].map(x => <li>{x}</li>) }
                        </ul>
                    </div>
                </div>
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>

            <div className='popup'>
                <div className='popup-info'>
                    {data.map(x => <TestCase tsTitle={x.title} tsCompany={x.company} tsImage={x.img}></TestCase>) }
                    <Button buttonText='УВИДЕТЬ ЕЩЁ'></Button>
                </div>
            </div>
        </div>
    )
}