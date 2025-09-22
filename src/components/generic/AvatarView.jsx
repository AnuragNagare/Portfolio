import "./AvatarView.scss"
import React, { useEffect, useState } from 'react'
import ImageView from "/src/components/generic/ImageView.jsx"

function AvatarView({ src = "", alt = "", faIcon = "", className = "", id = null, style = null }) {
    return (
        <div className={`avatar-view ${className}`} onClick={() => {
            if (src) {
                window.open("/react-portfolio-template/"+src, '_blank')
            }
        }}
            id={id}
            style={style}>

            <div className={`avatar-icon-view`}>
                <i className={`${faIcon}`} />
            </div>
        </div>
    )
}

export default AvatarView