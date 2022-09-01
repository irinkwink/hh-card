import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';
import style from './ImageCard.module.css'

const ImageCard = () => {
  const {img} = useContext(imgContext);

  return (
    <img className={style.img} src={img} alt="Фон открытки" width={840} height={520} />
)}

export default ImageCard;
