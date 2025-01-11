import Button from '../components/Button';
import Header from '../components/Header';
import Option from '../components/Option';
import Search from '../components/Search';
import phone from '../img/phone.svg';
import starFull from '../img/star-full.svg';
import { Link } from 'react-router-dom';

export default function CatalogVacancyPage() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <Search searchClass="main-search"></Search>
            <div className='select-container'>
                <Option optionText="Направление"></Option>
                <Option optionText="Работодатель"></Option>
            </div>
            <div className='vacancy-card-list'>
                <div className='vacancy-card'>
                    <div className='vacancy-card-header'>
                        <Link to="/vacancy" className='vacancy-name'>IT-практикан</Link>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <img alt="starFull" src={starFull}></img>
                        </div>
                    </div>
                    <h3>ОТ 50.000р</h3>
                    <p className='company-name'>ОАО "РЖД"</p>
                    <div className='interface-container'>
                        <div>
                            <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                            <Button buttonText="ГИБКИЙ ГРАФИК" buttonClass="info-btn"></Button>
                        </div>
                        <Button buttonText="ОТКЛИКНУТЬСЯ" buttonClass="submit-btn"></Button>
                    </div>
                </div>

                <div className='vacancy-card'>
                    <div className='vacancy-card-header'>
                        <Link to="/vacancy2" className='vacancy-name'>Аналитик - стажер 1С</Link>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <img alt="starFull" src={starFull}></img>
                        </div>
                    </div>
                    <h3>ДО 60.000р</h3>
                    <p className='company-name'>ПЕРВЫЙ БИТ</p>
                    <div className='interface-container'>
                        <div>
                            <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                            <Button buttonText="ГИБРИД" buttonClass="info-btn"></Button>
                        </div>
                        <Button buttonText="ОТКЛИКНУТЬСЯ" buttonClass="submit-btn"></Button>
                    </div>
                </div>

                <div className='vacancy-card'>
                    <div className='vacancy-card-header'>
                        <Link to="/vacancy3" className='vacancy-name'>Java-разработчик</Link>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <img alt="starFull" src={starFull}></img>
                        </div>
                    </div>
                    <h3>ДО 60.000р</h3>
                    <p className='company-name'>ООО Ренью</p>
                    <div className='interface-container'>
                        <div>
                            <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                            <Button buttonText="ГИБРИД" buttonClass="info-btn"></Button>
                        </div>
                        <Button buttonText="ОТКЛИКНУТЬСЯ" buttonClass="submit-btn"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}