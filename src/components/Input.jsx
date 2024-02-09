import {useState} from "react";
import {PopupCalendar} from "./PopupCalendar";

export const Input = () => {

    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useState('');


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