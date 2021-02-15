import HeaderAvatar from '../components/HeaderAvatar'
import { useState } from 'react'
import DialogModal from '../components/DialogModal'
import SignInContainer from './SignInContainer'
import { getUserInitials, getAuthenticated } from '../redux/authSelector'
import { useSelector } from 'react-redux'

const HeaderAvatarContainer = () => {
  const initials = useSelector(getUserInitials)
  const isAuthenticated = useSelector(getAuthenticated)

  const ModalAnchor = () => {
    return (
      <HeaderAvatar letter={initials} isAuthenticated={isAuthenticated}>
      </HeaderAvatar>
    )
  }

  const [isOpen, setIsOpen] = useState(null)

  const closeModal = () => {
    setIsOpen(false)
  }

  // auth Selectors: To return initials of user, auth status

  return (
    <DialogModal
      anchor={ModalAnchor()}
      dialogTitle="Sherlock Authentication"
      isOpen={isOpen}
    >
      <SignInContainer closeModal={closeModal} isAuthenticated={isAuthenticated}/>
    </DialogModal>
  )
}

export default HeaderAvatarContainer