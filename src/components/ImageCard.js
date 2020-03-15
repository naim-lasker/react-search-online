import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props) {
        super(props)

        this.imgRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.imgRef.current.clientHeight);

    }


    render() {
        const { urls, description } = this.props.image

        return (
            <li className="image-element-class" style={{margin: 10, listStyle: 'none'}}>
                <img ref={this.imgRef} src={urls.thumb} alt={description} />
            </li>
        )
    }
}

export default ImageCard
