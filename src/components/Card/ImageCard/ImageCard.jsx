import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';
import style from './ImageCard.module.css'

const ImageCard = (props) => {
  const img = useContext(imgContext);
  console.log(img);
  
  return (
    <img className={style.img} src={props.img} alt="Фон открытки" width={840} height={520} />
)}

export default ImageCard;
