import logo from '../img/logo.png'
import {useEffect, useState} from "react";

export const Header = () => {
    const [actualTime, setActualTime] = useState()

    useEffect(() => setActualTime(getOurTime()),[actualTime])

    useEffect(() => {
        const interval = setInterval(() => {
            setActualTime(getOurTime());
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getOurTime = () => {
        let ourDate = new Date();
        const hours = `${ourDate.getHours()}`;
        const minutes = `${ourDate.getMinutes()}`;
        let finalCountdown;
        minutes.length < 2 ?
            finalCountdown = `${hours}:0${minutes}` :
            finalCountdown = `${hours}:${minutes}`;
        return finalCountdown;
    }


    return (
        <header className={'header__container'}>
            <div className={'header__wrapper'}>
                <div className={'header__time'}>{actualTime}</div>
                <div className={'header__logo'}>
                    <img src={logo} alt={'logo'} />
                </div>
            </div>
        </header>
    )
}