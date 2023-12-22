'use client'
import React from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import { useParams } from 'next/navigation';
import DashboardContent from '../DashboardContent';
import Fashion from '../Fashion';
import Electronics from '../Electronics';
import NotFound from '../NotFound';
import DailyNeeds from '../DailyNeeds';
import Blog from '../Blog';

const AgentDashboard = () => {
    const params = useParams();
    const pathName = params.slug[0];
    console.log('params', params);

    console.log('pathName', pathName);

    const loadComponent = () => {
        if (pathName === 'dashboard') {
            return <DashboardContent />
        } else if (pathName === 'fashion') {
            return <Fashion />
        } else if (pathName === 'electronics') {
            return <Electronics />
        } else if (pathName === 'dailyneeds') {
            return <DailyNeeds />
        } else if (pathName === 'blog') {
            return <Blog />
        } else {
            return <NotFound />
        }

    }
    return (
        <DashboardLayout >
            {loadComponent()}
        </DashboardLayout>
    )
}

export default AgentDashboard