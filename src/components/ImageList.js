import React from 'react'

const ImageList = props => {
    return (
        props.images.map(({id, urls, description}) => {
            return (
                <div className='col-lg-4 col-md-6 mb-4' key={id}>
                    <img className='img-fluid' src={urls.small} alt={description}/>
                </div>
            )
        })
    )
}

export default ImageList
