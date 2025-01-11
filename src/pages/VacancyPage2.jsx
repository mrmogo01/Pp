import Header from '../components/Header';
import starFull from '../img/star-full.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import phone from '../img/phone.svg'

export default function VacancyPage2() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <p className="main-title">Аналитик - стажер 1С</p>
            <div className='vacancy-container'>
                <div className='vacancy-info-container'>
                    <div>
                        <Button buttonText="НАПРАВЛЕНИЕ" buttonClass="info-btn"></Button>
                        <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                        <Button buttonText="ГРАФИК РАБОТЫ" buttonClass="info-btn"></Button>
                    </div>
                    <img alt="star" src={starFull}></img>
                </div>
                <textarea rows={4}>Что будет входить в твои задачи: Работа в проектах автоматизации регламентированного учета на промышленных предприятиях на позиции аналитика, впоследствии ведущего аналитика; Анализ бизнес-процессов заказчика (обследование предприятия), написание отчетов об обследовании; Составление функциональных требований и технических заданий; Обучение пользователей, написание инструкций; Работа в крупных проектах в составе команды (руководитель проекта, ведущий программист, технический архитектор и другие коллеги).</textarea>
                <h3>ОТ 60.000р</h3>
                <Button buttonText="ОТКЛИКНУТЬСЯ"></Button>
                <div className='vacancy-company-info-container'>
                    <div className='skills-container'>
                        <h4>Мы предлагаем:</h4>
                        <ul>
                            <li>Работа в аккредитованной IT-компании с более чем 27-летним опытом на рынке;</li>
                            <li>Возможность влиять на свой доход, прозрачная схема мотивации;</li>
                            <li>Регулярная обратная связь от руководителя;</li>
                            <li>Множество активностей для сотрудников: корпоративы, конференции, спортивные турниры, интеллектуальные игры, пикники и выездные мероприятия;</li>
                            <li>Льготное ДМС для сотрудников и членов их семей.</li>
                        </ul>
                    </div>

                    <div className='company-info'>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <h4>Первый БИТ</h4>
                        </div>
                        <ul>
                            <li>Компания «Первый БИТ» — интегратор IT-решений. Мы являемся крупнейшей региональной сетью среди 1С:Франчайзи и представлены более чем в 100 офисах в 60 городах 9 стран мира. За 27 лет работы на рынке автоматизации бизнес-процессов мы приобрели богатый опыт в решении IT-задач любого уровня сложности.</li>
                            <li>+7 (495) 748-07-77</li>
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