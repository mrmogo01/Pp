import defaultImage from '../img/default-img.png';
import Header from '../components/Header';
import Option from '../components/Option';
import Search from '../components/Search';
import TestCaseCard from '../components/TestCaseCard';

const data = [
    {
        'title': 'НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ',
        'company': 'от кого тестовое',
        'desc': 'Описание задания и немного данных о нем', 
        'people': 15, 
        'img': defaultImage
    },
    {
        'title': 'НАЗВАНИЕ ТЕСТОВОГО ЗАДАНИЯ',
        'company': 'от кого тестовое',
        'desc': 'Описание задания и немного данных о нем', 
        'people': 15, 
        'img': defaultImage
    }
]

export default function CatalogTestsPage() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <Search searchClass="main-search"></Search>
            <div className='select-container'>
                <Option optionText="Направление"></Option>
                <Option optionText="Работодатель"></Option>
            </div>
            <div className='testcase-card-list'>
                {data.map(x => <TestCaseCard tccTitle={x.title} tccCompany={x.company} tccImage={x.img} tccDesc={x.desc} tccPeople={x.people}></TestCaseCard>) }
            </div>
        </div>
    )
}