import React, { useState } from 'react';
import Header from '../components/Header';
import star from '../img/star.svg';
import peopleApproveIcon from '../img/people-approve.svg';
import Button from '../components/Button';
import nextIcon from '../img/next.svg';
import { Link } from 'react-router-dom';

export default function TestCasePage_yandex1_answer() {
    const [showSolution, setShowSolution] = useState(false);

    const toggleSolution = () => {
        setShowSolution(!showSolution);
    };

    return (
        <div className="page-container TestCasePage">
            <Header></Header>
            <p className="main-title">ОТВЕТ: ТУРНИР <br></br>ПО ШАХМАТАМ</p>
            <div className='testcase-container'>
                <div className='testcase-info-container'>
                    <div className='testcase-info'>
                        <img alt="people-approve" src={peopleApproveIcon}></img>
                        <p>12</p>
                    </div>
                    <img alt="star" src={star}></img>
                </div>
                <textarea rows={7}>Эту задачу можно решить, восстанавливая граф игр турнира. Начнём с того, что для каждого участника ясно, до какой стадии турнира он дошёл: это определяется по количеству игр с его участием. После этого можно распределить игры по турам. Скажем, во всех играх первого тура один из участников вылетел в первом туре, а другой вылетел не раньше чем во втором. При обработке игры тура с номером необходимо проверить, что все участники этой игры на текущий момент сыграли одинаковое количество игр, соответствующее номеру, в противном случае турнир невалиден. После восстановления схемы турнира остаётся только вывести ответ.</textarea>
                <div className='similar'>
                    <img alt="next" src={nextIcon}></img>
                    <p>ПОХОЖЕЕ</p>
                </div>
            </div>
        </div>
    )
}
