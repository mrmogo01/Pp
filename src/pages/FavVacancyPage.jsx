import Header from '../components/Header';
import defaultAccountImg from '../img/defaultAccountImage.png';
import defaultTCImage from '../img/defaultTCImage.png';
import TestCase from '../components/TestCase';
import ALink from '../components/ALink';

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
    }]

export default function FavVacancyPage() {
    return (
        <div className="page-container FavVacancyPage">
            <Header></Header>
            <div className='account-container'>
                <div className='account-interface'>
                    <div className='account-image'>
                        <img alt='account' src={defaultAccountImg}></img>
                    </div>
                </div>
                <div className='fav-vacancy-list'>
                    <div className='fav-vacancy-list-btns'>
                        <ALink linkClass='buttons' Text="ТЕСТЫ"></ALink>
                        <ALink linkClass='buttons active' Text="СТАЖИРОВКИ"></ALink>
                    </div>
                    {data.map(x => <TestCase tsTitle={x.title} tsCompany={x.company} tsImage={x.img}></TestCase>) }
                </div>
            </div>
        </div>
    )
}