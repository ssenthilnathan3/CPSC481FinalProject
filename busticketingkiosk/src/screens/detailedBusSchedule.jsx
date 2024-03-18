import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import {useTable} from 'react-table';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const DetailedBusSchedule = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { routeData } = location.state;
    const { nextDeparture } = routeData;
    const { t } = useTranslation();

    const  generateBusSchedule = (nextDepartureTime, lastDeparture, numStops, rideDuration) => {
      
        // Calculate the last stop time based on the rideDuration
        const lastStopTime = new Date(nextDepartureTime.getTime() + rideDuration * 60 * 1000);
      
        // Calculate the time difference in minutes between nextDeparture and lastDeparture
        const timeDifference = (lastStopTime - nextDepartureTime) / (1000 * 60);
      
        // Calculate the time interval between each stop
        const timeInterval = timeDifference / numStops;
      
        // Generate the schedule
        const schedule = [];
        let currentStopTime = nextDepartureTime;
      
        for (let i = 0; i < numStops; i++) {
          // Format the time as HH:mm AM/PM
          const formattedTime = currentStopTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
          // Add the formatted time to the schedule
          schedule.push(formattedTime);
      
          // Update currentStopTime for the next iteration
          currentStopTime = new Date(currentStopTime.getTime() + timeInterval * 60 * 1000);
        }
      
        return schedule;
    }

    const addMinutes = (timeStr,minutesToAdd) => {
        const [hh, mm, period] = timeStr.match(/(\d+):(\d+) (AM|PM)/).slice(1);
        let totalMinutes = (parseInt(hh) % 12) * 60 + parseInt(mm) + minutesToAdd;
        const newHH = ((totalMinutes / 60) | 0) % 12 || 12;
        const newMM = totalMinutes % 60;
        const newPeriod = totalMinutes < 720 ? period : period === 'AM' ? 'PM' : 'AM';
        return `${newHH}:${String(newMM).padStart(2, '0')} ${newPeriod}`;
    }

    const parseTime = (timeString) => {
        const [time, period] = timeString.split(' ');
        const [hours, minutes] = time.split(':');
        let result = new Date('2000-01-02');
        result.setHours(parseInt(hours, 10));
        result.setMinutes(parseInt(minutes, 10));
      
        // Adjust for AM/PM
        if (period.toLowerCase() === 'pm' && result.getHours() !== 12) {
          result.setHours(result.getHours() + 12);
        } else if (period.toLowerCase() === 'am' && result.getHours() === 12) {
          result.setHours(0);
        }
      
        return result;
      }
      
    const randomDepartureTimes = [nextDeparture];

    for(let i = 0; i < 20; i++){

        const departureTime = randomDepartureTimes.at(randomDepartureTimes.length - 1);
        randomDepartureTimes.push(addMinutes(departureTime, 15));
    }

    const arrayOfSchedules = randomDepartureTimes.map(randomTime => generateBusSchedule(parseTime(randomTime), null, 25, 30))


    const getSchedules = () => {
        let scheduleToReturn = [];
        scheduleToReturn = arrayOfSchedules.map((schedule,i) => {
            let objectToReturn = {stop: i+1};
            for(let index = 0; index< 25; index ++)
            {
                objectToReturn[`departure${index+1}`] = schedule[index]
            }
            return objectToReturn;
        });
        return scheduleToReturn;
    }

    const data = React.useMemo(() => getSchedules(),[]);

    const getTableHeaders = () => {
        let arr = [{
            Header: "Stop#",
            accessor: 'stop'
        }];
        for(let i=0; i<20;i++)
        {
            arr.push({
                Header: "",
                accessor: `departure${i+1}`
            })
        }
        return arr;
    }

    const columns = React.useMemo(
        () => getTableHeaders(),
        []
      )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
    })

    const Styles = styled.div`
    padding: 1rem;

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1rem;
      overflow: hidden;
      border-radius: 0.25rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
  
    th,
    td {
      padding: .75rem;
      width: 5rem
    }
  
    thead {
      background-color: #d6350c; // Dark bluish background for headers
      color: #fff;
    }
  
    tbody {
      tr:nth-child(even) {
        background-color: #f2f2f2; // Alternating color for even rows
      }
  
      tr:nth-child(odd) {
        background-color: #fff; // Alternating color for odd rows
      }
    }
  
    th {
      text-align: left;
    }
    `


    return (
        <Styles>
            <p className="ticket-validity-note">
                {t('The schedules are valid from Monday to Sunday.')}
            </p>
             <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            <Button style={{width: "250px"}} className="button button-light-blue" block onClick={() => navigate('/routeInformation',{state: {...location.state}})}>{t('Return to Route Information')}</Button>
        </Styles>
    )
}

export default DetailedBusSchedule