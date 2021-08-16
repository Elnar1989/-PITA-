import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { disableLoader, enableLoader } from "../../../redux/actions/loaderAC"
import Loader from "../Loader/Loader";
import * as endPoints from '../../components/config/endPoints'
import { editUser } from "../../../redux/actions/userAC"

const UserEdit = () => {
  const [userEdit, setUserEdit] = useState({})

  const loader = useSelector(state => state.loader)
  const user = useSelector(state => state.user)
  let history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(enableLoader())
    fetch(endPoints.getUser(user.id), { credentials: 'include' })
      .then(response => response.json())
      .then(user => setUserEdit(prev => ({
        ...prev,
        email: user.email,
        userName: user.userName,
        password: user.password
      })))
      .finally(() => {
        dispatch(disableLoader())
      })
  }, [])

  const changeHandler = (e) => {
    setUserEdit(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let payload = Object.entries(userEdit).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(editUser(payload, history))
    }
  }



  return (
    <>
      {
        loader ? <Loader /> :
          <div className="d-flex justify-content-center">
            <form onSubmit={submitHandler} className="d-flex flex-column align-items-center bg-light text-dark p-3 border rounded-3">
              <legend className="text-center mb-4">User Edit</legend>
              <div className="mb-3">
                <input onChange={changeHandler} className="form-control" value={userEdit.email} type="email" name="email" placeholder='Email' />
              </div>

              <div className="mb-3">
                <input onChange={changeHandler} className="form-control" value={userEdit.userName} type="text" name="userName" placeholder='Name' />
              </div>

              <div className="mb-3">
                <input onChange={changeHandler} className="form-control" value={userEdit.password} type="password" name="password" placeholder='Pass' />
              </div>

              <button type="submit" className="btn btn-primary">Edit</button>
            </form>
          </div>
      }
    </>

  )
}

export default UserEdit
