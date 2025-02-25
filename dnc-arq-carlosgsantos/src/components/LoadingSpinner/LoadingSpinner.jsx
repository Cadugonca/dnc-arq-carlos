import './LoadingSpinner.css'
import LoadingHand from '../../assets/Loading.gif'

function  LoadingSpinner(){
    return (
        <div className="d-flex la-center jc-center loading-overlay-container">
              <img src={LoadingHand} alt="Loading" height="80px" />
               
        </div>
    )
}

export default LoadingSpinner