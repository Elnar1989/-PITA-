import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { signOut } from "../../../../redux/actions/userAC"

const SignOut = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    localStorage.clear()
    dispatch(signOut())
    history.push('/')
    // history.replace("/");
  }, [])

  return null
}

export default SignOut
