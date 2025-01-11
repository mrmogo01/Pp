import Header from '../components/Header';
import starFull from '../img/star-full.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import phone from '../img/phone.svg'

export default function VacancyPage() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <p className="main-title">IT-практикант</p>
            <div className='vacancy-container'>
                <div className='vacancy-info-container'>
                    <div>
                        <Button buttonText="НАПРАВЛЕНИЕ" buttonClass="info-btn"></Button>
                        <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                        <Button buttonText="ГРАФИК РАБОТЫ" buttonClass="info-btn"></Button>
                    </div>
                    <img alt="star" src={starFull}></img>
                </div>
                <textarea rows={4}>Приглашаем на оплачиваемую практику и стажировку выпускников, а также студентов 3-4 курсов в области информационных технологий высших учебных заведений (с возможным последующим трудоустройством). С нами ты будешь разрабатывать и внедрять технологические процессы, участвовать в разработке, работать с сетями и роботизированными программами!</textarea>
                <h3>ОТ 50.000р</h3>
                <Button buttonText="ОТКЛИКНУТЬСЯ"></Button>
                <div className='vacancy-company-info-container'>
                    <div className='skills-container'>
                        <h4>Мы предлагаем:</h4>
                        <ul>
                            <li>Оформление в соответствии с ТК РФ </li>
                            <li>Полную или частичную занятость</li>
                            <li>Получение практических навыков и опыта работы</li>
                            <li>Возможность попробовать свои силы в различных направлениях - у нас много ИТ-подразделений и развита горизонтальная мобильность!</li>
                        </ul>
                    </div>

                    <div className='company-info'>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <h4>ОАО "РЖД"</h4>
                        </div>
                        <ul>
                            <li>Екатеринбургский информационно-вычислительный центр (ИВЦ) отвечает за информационное обеспечение эксплуатационной работы компании по основным видам её деятельности, функционал корпоративных IT-систем, программно-технических комплексов, сетей передачи данных и инженерных систем.</li>
                            <li>+7 (499) 605-20-00</li>
                        </ul>
                    </div>
                </div>
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>
        </div>
    )
}