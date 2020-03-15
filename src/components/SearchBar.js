import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        search: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.search)
    }

    render() {
        return (
            <div className='row'>
                <form className='w-100' onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search image"
                            value={this.state.search}
                            onChange={e => this.setState({ search: e.target.value })}
                        />

                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
