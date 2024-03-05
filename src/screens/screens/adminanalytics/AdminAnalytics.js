import React, { useState, useEffect } from 'react';
import { AnalyticsContainer, VisitorContainer, VisitorTopContainer } from './AdminAnalytics.styles';
import { getVisitorsDay, getVisitorsMonth, getVisitorsWeek } from '../../../api/visitor';

const AdminAnalytics = () => {
  const [todaysVisitors, setTodaysVisitors] = useState(0);
  const [weeklyVisitors, setWeeklyVisitors] = useState(0);
  const [monthlyVisitors, setMonthlyVisitors] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todayRes = await getVisitorsDay();
        const weeklyRes = await getVisitorsWeek()
        const monthlyRes = await getVisitorsMonth();

        console.log(todayRes)
        console.log(weeklyRes)
        console.log(monthlyRes)

        setTodaysVisitors(todayRes.data)
        setWeeklyVisitors(weeklyRes.data)
        setMonthlyVisitors(monthlyRes.data)

      } catch(err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <AnalyticsContainer>
    <h2>Site Visitors: </h2>
      <VisitorTopContainer>
        <VisitorContainer>
          <h3>Daily</h3>
          <h3>{todaysVisitors}</h3>
        </VisitorContainer>
        <VisitorContainer>
          <h3>Weekly</h3>
          <h3>{weeklyVisitors}</h3>
        </VisitorContainer>
        <VisitorContainer>
          <h3>Monthly</h3>
          <h3>{monthlyVisitors}</h3>
        </VisitorContainer>
      </VisitorTopContainer>
    </AnalyticsContainer>
  )
}

export default AdminAnalytics