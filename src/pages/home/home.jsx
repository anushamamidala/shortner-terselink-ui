import React, { useEffect, useState } from 'react'
import OverViewSummary from './over-view-summary'
import ClicksSummaryChart from './clicks-summary-chart'
import RecentLinks from './recent-links'
import OverViewChart from './over-view-chart'
import Banner from '../../controls/banner'
import { CLICK_SUMMARY_TYPE } from '../../constants/global.constants'

const Home = props => {

  const { getOverAllStats,
    overallStats,
    getClicksSummary,
    clicksSummary,
    getRecentLinks,
    recentLinks } = props

  const [overallStatsLoading, setOverallStatsLoading] = useState(false)
  const [clickSummaryType, setClickSummaryType] = useState(CLICK_SUMMARY_TYPE.YEAR)
  const [recentLinksLoading, setRecentLinksLoading] = useState(false)

  const loadOverAllStats = async () => {
    try {
      setOverallStatsLoading(true);
      await getOverAllStats()
      setOverallStatsLoading(false)
    }
    catch (error) {
      setOverallStatsLoading(false)
    }
  }

  const loadData = () => {
    loadOverAllStats();
    loadRecentLinks();
  }

  const loadRecentLinks = async () => {
    try {
      setRecentLinksLoading(true)
      await getRecentLinks();
      setRecentLinksLoading(false)
    }
    catch (error) {
      setRecentLinksLoading(false)
    }
  }

  const loadClicksSummary = () => {
    try {
      getClicksSummary(clickSummaryType)
    }
    catch (error) {
    }
  }

  const handleClickSummaryTypeChange = value => {
    setClickSummaryType(value)
  }

  useEffect(() => {
    if (clickSummaryType) {
      loadClicksSummary();
    }
    // eslint-disable-next-line
  }, [clickSummaryType])

  useEffect(() => {
    document.title = "Home"
    loadData()
    // eslint-disable-next-line
  }, [])

  return <div>
    <Banner />
    <div className='row'>
      <div className="col-lg-8 p-0">
        <OverViewSummary
          overallStatsLoading={overallStatsLoading}
          overallStats={overallStats} />
        <ClicksSummaryChart
          clickSummaryType={clickSummaryType}
          clicksSummary={clicksSummary}
          handleClickSummaryTypeChange={handleClickSummaryTypeChange} />
      </div>
      <div className='col-lg-3 p-0'>
        <OverViewChart
          overallStats={overallStats}
          overallStatsLoading={overallStatsLoading} />
      </div>
    </div>
    <RecentLinks links={recentLinks} loading={recentLinksLoading}/>
  </div>
}

export default Home
