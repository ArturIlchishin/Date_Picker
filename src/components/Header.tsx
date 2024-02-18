import logo from '../img/logo.png'
import React, {useEffect, useState} from "react";

export const Header: React.FC = () => {
    const [actualTime, setActualTime] = useState<string>('')

    useEffect(() => setActualTime(getOurTime()),[actualTime])

    useEffect(() => {
        const interval = setInterval(() => {
            setActualTime(getOurTime());
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getOurTime = ():string => {
        let ourDate = new Date();
        const hours: string = `${ourDate.getHours()}`;
        const minutes: string = `${ourDate.getMinutes()}`;
        let finalCountdown: string;
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