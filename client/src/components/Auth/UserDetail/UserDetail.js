import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { disableLoader, enableLoader } from "../../../redux/actions/loaderAC"
import Loader from "../Loader/Loader"

const UserDetail = () => {
  const { id } = useParams()
  const [currentUser, setCurrentUser] = useState(null)

  const dispatch = useDispatch()
  const loader = useSelector(state => state.loader)


  useEffect(() => {
    dispatch(enableLoader())
    fetch(`http://localhost:3001/api/v1/users/${id}`, { credentials: 'include' })
      .then(response => response.json())
      .then(user => setCurrentUser(user))
      .catch((e) => console.error(e))
      .finally(() => {
        dispatch(disableLoader())
      })
  }, [])


  return (
    <>
      {
        loader ? <Loader /> :
          currentUser &&
          <div className="d-flex justify-content-center">
            <div className="card text-center" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{currentUser.userName}</h5>
                <p className="card-text">{currentUser.email}</p>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default UserDetail
