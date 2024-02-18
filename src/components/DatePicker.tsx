import React, {useState} from "react";
import {PopupCalendar} from "./PopupCalendar";

export const DatePicker: React.FC = () => {

    const [modalActive, setModalActive] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');


    return (
        <>
            <form className={'form__container'}>
                <div className={'form__wrapper'}>
                    <div className={'form__input-container'}>
                        <input placeholder={'mm/dd/yyyy'}
                               value={date}
                               className={'form__input'}
                               onClick={() => setModalActive(!modalActive)} />
                    </div>
                </div>
            </form>
            <PopupCalendar active={modalActive} setActive={setModalActive}
                           date={date} setDate={setDate}/>
        </>

    )
}