import { useContext, useState } from 'react';
import { holidayContext } from '../../../context/holidayContext';
import style from './Choices.module.css';

const holidays = {
  newyear: 'Новый год',
  birthdayWoman: 'День рождения  Ж',
  birthdayMan: 'День рождения  М',
  womanday: '8 марта',
  knowledgeday: 'День знаний',
}

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const {holiday, setHoliday} = useContext(holidayContext);

  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices)
  }

  const changeHoliday = title => {
    setHoliday(title);
    toggleChoices();
  }

  return (
    <div className={style.wrapper}>
      <button 
        className={style.button}
        onClick={toggleChoices}
      >
      {holiday}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map(item => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                changeHoliday(item[1])
              }}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Choices;