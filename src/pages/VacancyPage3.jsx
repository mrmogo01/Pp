import Header from '../components/Header';
import starFull from '../img/star-full.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import phone from '../img/phone.svg'

export default function VacancyPage3() {
    return (
        <div className="page-container VacancyPage">
            <Header></Header>
            <p className="main-title">Java-разработчик</p>
            <div className='vacancy-container'>
                <div className='vacancy-info-container'>
                    <div>
                        <Button buttonText="НАПРАВЛЕНИЕ" buttonClass="info-btn"></Button>
                        <Button buttonText="ТРЕБУЕМЫЙ ОПЫТ" buttonClass="info-btn"></Button>
                        <Button buttonText="ГРАФИК РАБОТЫ" buttonClass="info-btn"></Button>
                    </div>
                    <img alt="star" src={starFull}></img>
                </div>
                <textarea rows={4}>Приглашаем студентов старших курсов IT-специальностей ВУЗа на оплачиваемую стажировку Java-разработчиков. Наши стажеры в течение 3 месяцев интенсивного обучения под руководством наставника изучают все основы, необходимые для разработки распределенных отказоустойчивых и нагруженных информационных систем.</textarea>
                <h3>ОТ 60.000р</h3>
                <Button buttonText="ОТКЛИКНУТЬСЯ"></Button>
                <div className='vacancy-company-info-container'>
                    <div className='skills-container'>
                        <h4>Мы предлагаем:</h4>
                        <ul>
                            <li>перспективу дальнейшей постоянной работы в компании;</li>
                            <li>работу в команде с опытными наставниками;</li>
                            <li>реальные интересные задачи;</li>
                            <li>современные средства командной разработки;</li>
                            <li>оплачиваемую стажировку на 3 месяца.</li>
                        </ul>
                    </div>

                    <div className='company-info'>
                        <div>
                            <img alt="phone" src={phone}></img>
                            <h4>ООО Ренью</h4>
                        </div>
                        <ul>
                            <li>Мы Renue — мы команда, которая имеет большой и успешный опыт разработки комплексных, высоконагруженных решений для крупных российских заказчиков и государства. Сильные профессионалы работают над сильными задачами. Мы реализуем масштабные и глобальные проекты, которые напрямую влияют на улучшение жизни миллионов людей.</li>
                            <li>+7 (343) 287 54 44</li>
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