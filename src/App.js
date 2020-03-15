import React, { Component } from 'react'
import unsplash from './api/unsplash'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends Component {
  state = {
    images: []
  }

  onSearchSubmit = async (search) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: search },
    })

    this.setState({ images: response.data.results })

  }

  render() {
    const imgLength = this.state.images.length

    return (
      <div className='container mt-5'>
        <SearchBar onSubmit={this.onSearchSubmit} />

        <div className='mt-4'>
          {
            !imgLength ?
              <h3 className='text-center'>Search and submit to show any images!</h3> :
              <div className='row'>
                <ImageList images={this.state.images} />
              </div>
          }
        </div>


      </div>
    )
  }
}


export default App;

