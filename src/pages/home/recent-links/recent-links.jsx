import React from 'react';
import './recent-links.scss'
import LinksTable from '../../../controls/links-table'

const RecentLinks = ({ links, loading }) => {
    return (
        <div id="recentLinksContainer">
            <h6 className='recent-links-title'>Recent Links</h6>
            <LinksTable links={links} isLoading={loading} />
        </div>
    )
}

export default RecentLinks
