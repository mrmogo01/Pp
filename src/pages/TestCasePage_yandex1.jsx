import React, { useState } from 'react';
import Header from '../components/Header';
import star from '../img/star.svg';
import peopleApproveIcon from '../img/people-approve.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import { Link } from 'react-router-dom';

export default function TestCasePage_yandex1() {
    const [showSolution, setShowSolution] = useState(false);

    const toggleSolution = () => {
        setShowSolution(!showSolution);
    };

    return (
        <div className="page-container TestCasePage">
            <Header></Header>
            <p className="main-title">ТУРНИР <br></br>ПО ШАХМАТАМ</p>
            <div className='testcase-container'>
                <div className='testcase-info-container'>
                    <div className='testcase-info'>
                        <img alt="people-approve" src={peopleApproveIcon}></img>
                        <p>12</p>
                    </div>
                    <img alt="star" src={star}></img>
                </div>
                <textarea rows={7}>Пока Маша была в отпуске, её коллеги организовали турнир по шахматам по олимпийской системе. За отдыхом Маша не обращала особого внимания на эту затею, так что она еле может вспомнить, кто с кем играл (про порядок игр даже речи не идёт). Внезапно Маше пришла в голову мысль, что неплохо бы привезти из отпуска сувенир победителю турнира. Маша не знает, кто победил в финальной игре, но сможет без труда вычислить, кто в нём играл, если только она правильно запомнила играющие пары. Помогите ей проверить, так ли это, и определить возможных кандидатов в победители.</textarea>
                <Link to="/testcase_yandex1_answer">
                    <Button buttonText="ПОСМОТРЕТЬ ОТВЕТ" onClick={toggleSolution}></Button>
                </Link>
                {showSolution && <div className="solution-text">Текст с решением задачи...</div>}
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>
        </div>
    )
}
