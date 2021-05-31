import React, { useMemo } from 'react'
import ImgLoading from '../../../assets/icons/loading.svg'
import ProgressBar from '../../../controls/progress-bar'
import './over-view-chart.scss'

const OverViewChart = (props) => {
    const { overallStatsLoading, overallStats } = props

    const activeLinksPercent = useMemo(() => {
        const totalLinksCount = overallStats?.totalLinksCount || 0;
        if (totalLinksCount > 0) {
            const activeLinksCount = overallStats?.activeLinksCount || 0;
            return Math.round(activeLinksCount / totalLinksCount * 100);
        }
        return 0;
    }, [overallStats])

    const deactivatedLinksPercent = useMemo(() => {
        const totalLinksCount = overallStats?.totalLinksCount || 0;
        if (totalLinksCount > 0) {
            const deactivatedLinksCount = overallStats?.deactivatedLinksCount || 0;
            return Math.round(deactivatedLinksCount / totalLinksCount * 100);
        }
        return 0;
    }, [overallStats])
    return (
        <div id="overviewChartContainer">
            <div className="chart-main-container">
                <h6 className="header">Links Summary</h6>
                <div className='click-summary-progress-container d-flex flex-column align-items-center justify-content-center'>
                    {
                        overallStatsLoading ?
                            <img src={ImgLoading} alt="loading" className="loading-icon" /> :
                            <>
                                <div className='d-flex flex-column justify-content-center align-items-center progress-container mt-0'>
                                    <div className="col-12 d-flex align-items-center justify-content-center ">
                                        <ProgressBar
                                            percentage={activeLinksPercent}
                                            className="top-performing-progress"
                                            progressText={`${activeLinksPercent}%`}
                                            pathColor={`rgb(47 189 179)`}
                                            textColor={'rgb(0 0 0 / 38%)'}
                                            trailColor={'rgb(201 232 229)'}
                                        />
                                    </div>
                                    <div className="row align-items-end progress-text">
                                        <h1>{overallStats?.activeLinksCount || 0}</h1>
                                        <h6 className="status-category-title">Active Links</h6>
                                    </div>
                                </div>
                                <div className='d-flex flex-column justify-content-center align-items-center progress-container mb-0'>
                                    <div className='col-12 d-flex align-items-center justify-content-center mb-0'>
                                        <ProgressBar
                                            percentage={deactivatedLinksPercent}
                                            className="top-performing-progress"
                                            progressText={`${deactivatedLinksPercent}%`}
                                            pathColor={`rgb(218 95 95)`}
                                            trailColor={'rgb(241 212 212)'}
                                        />
                                    </div>
                                    <div className="row align-items-end progress-text">
                                        <h1>{overallStats?.deactivatedLinksCount || 0}</h1>
                                        <h6 className="status-category-title">Inactive Links</h6>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default OverViewChart
