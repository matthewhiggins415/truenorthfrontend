import React from 'react';
import { AnalyticsContainer, VisitorContainer, VisitorTopContainer } from './AdminAnalytics.styles';

const AdminAnalytics = () => {
  return (
    <AnalyticsContainer>
    <h2>Site Visitors: </h2>
      <VisitorTopContainer>
        <VisitorContainer>
          <h3>Daily</h3>
        </VisitorContainer>
        <VisitorContainer>
          <h3>Weekly</h3>
        </VisitorContainer>
        <VisitorContainer>
          <h3>Monthly</h3>
        </VisitorContainer>
      </VisitorTopContainer>
    </AnalyticsContainer>
  )
}

export default AdminAnalytics