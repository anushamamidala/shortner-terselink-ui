import React from 'react'
import "./links-table.scss"
import ImgLoading from '../../assets/icons/loading.svg'
import moment from 'moment'

const LinksTable = (props) => {
    const { links = [], isLoading = false } = props
    return (
        <div id="LinksTableContainer">
            {
                isLoading ?
                    <img src={ImgLoading} className='loader-image' alt="loader" /> :
                    <div className="links-table">
                        {
                            links?.length > 0 ?
                                <div>
                                    {
                                        links?.map((item, index) => {
                                            return (
                                                <div className="table-item">
                                                    <div className="table-item-section">
                                                        <div className="table-category">
                                                            <div className="table-item-name">NO</div>
                                                            <div>{index + 1}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">SHORTEN URL</div>
                                                            <div>{item?.shortenUrl}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">CREATED AT</div>
                                                            <div>{moment(item?.createdAt).format("YYYY-MM-DD HH:mm")}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">UPDATED AT</div>
                                                            <div>{moment(item?.updatedAt).format("YYYY-MM-DD HH:mm")}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">CLICKS</div>
                                                            <div>{item?.clickCount || 0}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">TOTAL CLICKS</div>
                                                            <div>{item?.thresholdClickCount || 0}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">PASSWORD PROTECTED</div>
                                                            <div>{item?.isPasswordProtected ? "Yes" : "No"}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">PASSWORD</div>
                                                            <div>{item?.password || "-"}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">STATUS</div>
                                                            <div>{item?.isDeactivated ? <span className='deactivated'>Deactivated</span> : <span className="active">Active</span>}</div>
                                                        </div>
                                                        <div className="table-category">
                                                            <div className="table-item-name">ORIGINAL URL</div>
                                                            <div>{item?.url}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div> :
                                <div>No Recent Links</div>
                        }
                    </div>
            }
        </div>
    )
}

export default LinksTable
