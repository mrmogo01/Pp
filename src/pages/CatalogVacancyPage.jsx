import Header from '../components/Header';
import Option from '../components/Option';
import Search from '../components/Search';
import VacancyCard from '../components/VacancyCard';

const data = [
    {
        'title': 'НАЗВАНИЕ СТАЖИРОВКИ',
        'company': 'КОМПАНИЯ'
    },
    {
        'title': 'НАЗВАНИЕ СТАЖИРОВКИ',
        'company': 'КОМПАНИЯ'
    }
]

export default function CatalogVacancyPage() {
    return (
        <div className="page-container CatalogVacancyPage">
            <Header></Header>
            <Search searchClass="main-search"></Search>
            <div className='select-container'>
                <Option optionText="Направление"></Option>
                <Option optionText="Работодатель"></Option>
            </div>
            <div className='vacancy-card-list'>
                {data.map(x => <VacancyCard vTitle={x.title} vCompany={x.company}></VacancyCard>) }
            </div>
        </div>
    )
}