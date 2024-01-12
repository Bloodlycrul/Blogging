import { Link } from 'react-router-dom';
import ErrorImage from '../assets/error-image.png';

const Error = () => {
  return (
    <div className="h-screen m-auto flex items-center justify-center flex-col">
      <img src={ErrorImage} alt="" />
      <h1 className='my-[30px] text-[40px] font-Inter font-extrabold'>Something Broke</h1>
      <Link  to={'/'}> <button className='border px-[20px] py-[10px] rounded-lg'>Go Home</button></Link>
    </div>
  )
}

export default Error
