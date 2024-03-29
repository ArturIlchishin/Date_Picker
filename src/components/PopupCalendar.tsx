import left_arrow from '../img/Arrow _ Left.png'
import right_arrow from '../img/Arrow _ Right.png'
import {useEffect} from "react";

interface IPopularCalendar {
    active: boolean
    setActive: (isActive: boolean) => void
    setDate: (date: string) => void
    date: string
}
export const PopupCalendar = ({active, setActive, setDate}: IPopularCalendar) => {

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ]

    const generateDates = (firstDate: number, lastDate: number) => {
        const randomDates: number[] = [];
        for( let i = 0; i < 6; i++ ) {
            const randomDate = Math.floor( firstDate + Math.random() * (lastDate + 1 - firstDate) )
            console.log(randomDate)
            randomDates.push(randomDate)
        }
        return () => {
                return randomDates;
        }
    }

    let inactiveDates = generateDates(1,31);
    let soldOutDates = generateDates(1,31);
    useEffect(() => {inactiveDates(); soldOutDates()}, [])

    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

    return (
        <div className={`popup__container ${active ? '' : 'hidden'}`}>
            <div className={'popup__content'}>
                <div className={'popup__header'}>
                    <div className={'popup__month__container'}>
                        August 2020
                    </div>
                    <div className={'popup__arrows__container'}>
                        <a href={'#!'} className={'popup__arrow'}>
                            <img src={left_arrow} alt={'Влево'} />
                        </a>
                        <a href={'#!'} className={'popup__arrow'}>
                            <img src={right_arrow} alt={'Вправо'} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={'calendar__wrap'}>
                <div className={'popup__calendar'}>
                    <div className={'calendar__days-of-week'}>
                        {daysOfWeek.map((day) => <div
                            key={day}
                            className={'week__day'}>
                            {day}</div>)}
                    </div>
                    <div className={'calendar__container'}>
                        {dates.map((date) => <div
                            key={date}
                            className={`calendar__date 
                            ${inactiveDates().includes(date) && !soldOutDates().includes(date)  ? 'disabled' : ''} 
                            ${soldOutDates().includes(date) ? 'sold' : ''}
                            `}
                            onClick={(event) => {
                                setDate(`August ${event.currentTarget.textContent},2020`);
                                setActive(false);
                            }}>{soldOutDates().includes(date) ? 'sold out' : date}
                        </div> )}
                    </div>
                </div>
            </div>
        </div>
    )
}