import './Footer.css'
import { IconBrandLinkedin, IconBulb } from '@tabler/icons-react';

const footer = () => {
    return (
        <div className='footer animate__animated animate__backInRight'>
            <a href='https://www.linkedin.com/in/maira-julian-768a001b0/' target={'_blank'} className='linkedin-click'>
                <IconBrandLinkedin />
                Maira
            </a>
            <IconBulb className='ideas' />
            <a href='https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/' target={'_blank'} className='linkedin-click'>
                Mathi
                <IconBrandLinkedin />
            </a>
        </div>
    )
}

export default footer