import {connect} from "react-redux";

let Locale = (props) => {
    return (
        <div>
            Погода в стране {props.location.country} в городе {props.location.city}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        location: state.search.location
    }
}

export default connect(mapStateToProps, {})(Locale);