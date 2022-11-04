import React from 'react'
import DarkTheme, {createTheme} from "react-dark-theme"

import '../../styles/Calender.css'



function Calender() {
    let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    let dates = Array.from(Array(31).keys())
    let prevMonth = [26, 27, 28, 29, 30]
    let nextMonthDates = [1, 2, 3, 4, 5, 6]
    const [onHover, setOnHover] = React.useState(false)


    const darkTheme = {
        background: '#1b1b3a',
        text: 'white',
        icons: 'black',
        guideBackground: '#29294d',
        cardBackground: '#29294D',
        prevDates: 'gray'
    }
    const lightTheme = {
      background: 'white',
      text: 'black',
      icons: 'black',
      guideBackground: 'white',
      cardBackground: '#EBEBFC',
      prevDates: 'rgb(219, 219, 219)'
    }
  
    const myTheme = createTheme(lightTheme, darkTheme)


    return (
        <div className='calender-container' style={{color: myTheme.text}}>
            <div className="d-flex calender-label" style={{color: myTheme.text}}>
                <h5 style={{ fontSize: 15, color: myTheme.text}}>Track Your Progress</h5>
                <div className="d-flex" style={{ flexDirection: 'column'}}>
                    {onHover && <div className="d-flex popover-container" style={{padding: 0, position: 'absolute', top: '-6%', left: '21.8%', fontSize: 15, fontWeight: 'bold', color: 'white', flexDirection: 'column', height: 5, textAlign: 'center'}}>
                        <div className="popover-top p-2" style={{backgroundColor: 'gray', borderRadius: 5}}>For Premium Users</div>
                        <i className="bi bi-caret-down-fill" style={{position: 'absolute', color: 'gray', top: 30, left: 80}}/>
                    </div>}
                    <i className="bi bi-question-circle for-premium-user" style={{ fontSize: 15, width: 25, height: 25, backgroundColor: '#EBEBFC', color: myTheme.icons}} onMouseEnter={()=> setOnHover(true)} onMouseLeave={()=> setOnHover(false)}/>
                </div>
            </div>
            <div className="calender" style={{backgroundColor: myTheme.cardBackground}}>
                <div className="streaks d-flex">
                    <p className="current-streak" style={{color: myTheme.text}}>Current Streak: 4</p>
                    <p className="largest-streak" style={{color: myTheme.text}}>Largest Streak: 7</p>
                </div>
                <table style={{ flexWrap: 'wrap' }}>
                    <thead>
                        <tr>
                            {
                                days.map(day => (
                                    <th style={{ fontSize: 10, padding: 18, color: myTheme.text}}>{day}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tr>
                        {
                            prevMonth.map(date => (
                                <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.prevDates }}>{date}</td>
                            ))
                        }
                        {
                            dates.map(date => (
                                (date < 2) && <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.text}}>{date + 1}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            dates.map(date => (
                                (date < 9 && date >= 2) && <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.text}}>{date + 1}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            dates.map(date => (
                                (date >= 9 && date < 16) && <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.text}}>{date + 1}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            dates.map(date => (
                                (date >= 16 && date < 23) && <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.text}}>{date + 1}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            dates.map(date => (
                                (date >= 23 && date < 30) && <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.text}}>{date + 1}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.text}}>31</td>
                        {
                            nextMonthDates.map(date => (
                                <td style={{ fontSize: 15, padding: 18, fontWeight: 'bold', color: myTheme.prevDates }}>{date}</td>
                            ))
                        }
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Calender