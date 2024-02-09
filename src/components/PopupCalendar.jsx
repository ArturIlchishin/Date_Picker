import left_arrow from '../img/Arrow _ Left.png'
import right_arrow from '../img/Arrow _ Right.png'

export const PopupCalendar = (props) => {

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ]
    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const inactiveDates = [1,2,3,4,5,6,7,8,9,10];
    const soldOutDates = [12,14,20,26,30];

    return (
        <div className={`popup__container ${props.active ? '' : 'hidden'}`}>
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
                            ${inactiveDates.includes(date) ? 'disabled' : ''} 
                            ${soldOutDates.includes(date) ? 'sold' : ''}
                            `}
                            onClick={(event) => {
                                props.setDate(`August ${event.currentTarget.textContent},2020`);
                                props.setActive(false);
                            }}>{soldOutDates.includes(date) ? 'sold out' : date}
                        </div> )}
                    </div>
                </div>
            </div>
        </div>
    )
}