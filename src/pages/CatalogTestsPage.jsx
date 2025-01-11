import defaultImage from '../img/default-img.png';
import { Link } from 'react-router-dom';
import Yandex from '../img/yandex-img.png';
import ifellow from '../img/ifellow-img.png';
import Header from '../components/Header';
import Option from '../components/Option';
import Search from '../components/Search';
import starFull from '../img/star-full.svg';
import peopleApprove from '../img/people-approve.svg';

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
                <div className='testcase-card'>
                    <img alt='img' src={Yandex}></img>
                    <div className='catalog-testcase-info-container'>
                        <div>
                            <Link to="/testcase_yandex1" className='testcase-title'>Бэкенд-разработка №1 </Link>
                            <img alt='favorite' src={starFull}></img>
                        </div>
                        <p className='testcase-card-company'>Yandex</p>
                        <p className='testcase-card-description'>Задача квалификации чемпионата по програм­мированию 2019 среди бэкенд-разработчиков</p>
                        <div className='people-approve-container'>
                            <img alt='people' src={peopleApprove}></img>
                            <span>12</span>
                        </div>
                    </div>
                </div>
                <div className='testcase-card'>
                    <img alt='img' src={Yandex}></img>
                    <div className='catalog-testcase-info-container'>
                        <div>
                            <Link to="/testcase_yandex2" className='testcase-title'>Бэкенд-разработка №2 </Link>
                            <img alt='favorite' src={starFull}></img>
                        </div>
                        <p className='testcase-card-company'>Yandex</p>
                        <p className='testcase-card-description'>Задача квалификации чемпионата по програм­мированию 2019 среди бэкенд-разработчиков</p>
                        <div className='people-approve-container'>
                            <img alt='people' src={peopleApprove}></img>
                            <span>16</span>
                        </div>
                    </div>
                </div>
                <div className='testcase-card'>
                    <img alt='img' src={ifellow}></img>
                    <div className='catalog-testcase-info-container'>
                        <div>
                            <Link to="/testcase_ifellow" className='testcase-title'>Вопросы для тестировщика</Link>
                            <img alt='favorite' src={starFull}></img>
                        </div>
                        <p className='testcase-card-company'>iFellow</p>
                        <p className='testcase-card-description'>Базовые вопросы для тестировщиков на собеседованиях</p>
                        <div className='people-approve-container'>
                            <img alt='people' src={peopleApprove}></img>
                            <span>7</span>
                        </div>
                    </div>
                </div>
                <div className='testcase-card'>
                    <img alt='img' src={ifellow}></img>
                    <div className='catalog-testcase-info-container'>
                        <div>
                            <Link to="/testcase_ifellow2" className='testcase-title'>Задачи на frontend</Link>
                            <img alt='favorite' src={starFull}></img>
                        </div>
                        <p className='testcase-card-company'>iFellow</p>
                        <p className='testcase-card-description'>Практические заданя на определение hard-skills fronrend разработчика</p>
                        <div className='people-approve-container'>
                            <img alt='people' src={peopleApprove}></img>
                            <span>7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}