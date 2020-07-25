import React from 'react'

function Search({getWeather}) {
    return (
        <div>
            <form onSubmit={getWeather}>
                <input
                    type='text'
                    placeholder='city'
                    name='city'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search
