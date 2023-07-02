import React, { useState } from 'react'

function Folder({ explorer }) {

    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand((prev) => !prev)
    }

    if (explorer.isFolder) {
        return (
            <div>
                <span onClick={handleExpand} style={{ cursor: 'pointer' }}>{explorer.name}</span>
                <br />
                <div style={{ display: expand ? 'block' : 'none', paddingLeft: '20px', cursor: 'pointer' }}>
                    {
                        explorer?.items?.map((item) => {
                            return (
                                <Folder explorer={item} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <span>{explorer.name}<br /></span>
        )
    }

}

export default Folder