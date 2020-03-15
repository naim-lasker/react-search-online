import React, { Component } from 'react'
import Masonry from 'react-masonry-component';
import ImageCard from './ImageCard'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class ImageList extends Component {
    render() {
        const childElements = this.props.images.map(image => {
            return <ImageCard key={image.id} image={image} />
        })

        return (
            <Masonry
            style={{padding: 0}}
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>


        )
    }
}

export default ImageList

