import React from 'react'
import { AreaChart, XAxis, YAxis, Area, Tooltip, ResponsiveContainer } from 'recharts'
import "./clicks-summary-chart.scss"
import { CLICK_SUMMARY_TYPE } from '../../../constants/global.constants'
import v4 from 'uuid/v4'

const summaryChartButtons = [
    {
        name: "One Week",
        value: CLICK_SUMMARY_TYPE.WEEK
    },
    {
        name: "One Month",
        value: CLICK_SUMMARY_TYPE.MONTH
    },
    {
        name: "One Year",
        value: CLICK_SUMMARY_TYPE.YEAR
    },
]

const ClickSummaryChart = props => {

    const {
        clickSummaryType,
        clicksSummary = [],
        handleClickSummaryTypeChange } = props

    return (
        <div id="clicksSummaryContainer">
            <div className="chart-container row">
                <div className="col-lg-12 chart-main-container">
                    <h6 className="header">Clicks Summary</h6>
                    <div className='click-summary-chart-container d-flex justify-content-center align-items-center flex-column'>
                        <ResponsiveContainer width='100%' height={200}>
                            <AreaChart data={clicksSummary}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                                <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                                <Tooltip />
                                <Area type="monotone" dataKey="count" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                        <div className='period-buttons-container d-flex align-items-center justify-content-around'>
                            {
                                summaryChartButtons.map(item => {
                                    return <button
                                        key={v4()}
                                        className={`period-button${clickSummaryType === item.value ? ' Selected' : ''}`}
                                        onClick={() => handleClickSummaryTypeChange(item.value)}>
                                        {item.name}
                                    </button>
                                })
                            }
                        </div>
                        <div className="note">*Data is generated in UTC time zone</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClickSummaryChart
