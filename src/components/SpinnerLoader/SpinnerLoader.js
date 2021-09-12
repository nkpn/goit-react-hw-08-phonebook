import style from './SpinnerLoader.module.css';
import Loader from 'react-loader-spinner';

const CustomLoader = () => (
  <div className={style.Loader}>
    <Loader
      type="MutatingDots"
      color="#475dd6"
      secondaryColor="#16e8f9"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </div>
);

export default CustomLoader;
