function ChangeLocation(props){
    return (
        <div className="card">
            <div className="card-heading">
                <h3>{props.coords.lat ? "Change" : "Enter"} Location</h3>
            </div>
            <form onSubmit={props.submitLocation} className="side-location-form">
                <input 
                    className="location-field"
                    type="text"
                    onChange={props.updateLocation}
                    value={props.location}
                />
                <input
                    className="search-btn"
                    type="submit"
                    value="Search" 
                />
            </form>
            {props.showError ? <p className="location-error">Error location not found</p> : null}
        </div>
    )
}

export default ChangeLocation