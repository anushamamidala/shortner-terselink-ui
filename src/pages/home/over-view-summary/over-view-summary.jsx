import React from 'react'
import ImgLink from '../../../assets/icons/link.png'
import ImgClick from '../../../assets/icons/click.png'
import ImgTop from '../../../assets/icons/top.png'
import ImgLoading from '../../../assets/icons/loading.svg'
import "./over-view-summary.scss"

const OverViewSummary = props => {
    const { overallStatsLoading, overallStats } = props

    return (
        <div id="overViewSummaryContainer">
            <h6 className="overview-title">Overview</h6>
            {
                overallStatsLoading ?
                    <img src={ImgLoading} className='loader-image' alt="loader" /> :
                    <div className="row over-view-cards-container">
                        <div className="card-container d-flex">
                            <div>
                                <h3 className="total-count">{overallStats?.totalLinksCount || 0}</h3>
                                <div className="category">Links Created</div>
                            </div>
                            <div className="image-container d-flex justify-content-center align-items-center">
                                <img src={ImgLink} alt='links' className="over-view-card-icon" />
                            </div>
                        </div>
                        <div className="card-container d-flex">
                            <div>
                                <h3 className="total-count">{overallStats?.collectiveTotalClicks || 0}</h3>
                                <div className="category">Links Clicked</div>
                            </div>
                            <div className="image-container d-flex justify-content-center align-items-center orange-filter">
                                <img src={ImgClick} alt='clicks' className="over-view-card-icon" />
                            </div>
                        </div>
                        <div className="card-container d-flex">
                            <div>
                                <h3 className="total-count">{overallStats?.topPerformingLinkClicks || 0}</h3>
                                <div className="category">Top link clicks</div>
                            </div>
                            <div className="image-container d-flex justify-content-center align-items-center pink-filter">
                                <img src={ImgTop} alt='High performing' className="over-view-card-icon" />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default OverViewSummary
