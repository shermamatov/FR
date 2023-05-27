import './block6.scss';
import img1 from './img1.svg';
import img2 from './img2.png';
import Image from 'next/image';

export default function HomeBlock6(){
    return(
        <div className="block6">
        <div>
            <Image src={img1} alt="" />
        </div>
        <div>
            <Image src={img2} alt="" />
        </div>
    </div>
    )
}
