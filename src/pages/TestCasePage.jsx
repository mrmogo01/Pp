import Header from '../components/Header';
import star from '../img/star.svg';
import peopleApproveIcon from '../img/people-approve.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import defaultTCImage from '../img/defaultTCImage.png';
import TestCase from '../components/TestCase';

const data =[{
    'title': "НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ",
    'company': "от кого тестовое",
    'img': defaultTCImage
}, 
{
    'title': "НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ",
    'company': "от кого тестовое",
    'img': defaultTCImage
},  
{
    'title': "НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ",
    'company': "от кого тестовое",
    'img': defaultTCImage
}, 
{
    'title': "НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ",
    'company': "от кого тестовое",
    'img': defaultTCImage
}];

const data2 = ['НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ', 15, 'текстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстексттекстекстекстекст']

export default function TestCasePage() {
    return (
        <div className="page-container TestCasePage">
            <Header></Header>
            <p className="main-title">{data2[0]}</p>
            <div className='testcase-container'>
                <div className='testcase-info-container'>
                    <div className='testcase-info'>
                        <img alt="people-approve" src={peopleApproveIcon}></img>
                        <p>{data2[1]}</p>
                    </div>
                    <img alt="star" src={star}></img>
                </div>
                <textarea rows={7}>{data2[2]}</textarea>
                <Button buttonText="ПОСМОТРЕТЬ ОТВЕТ"></Button>
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