// Write your code here
import './index.css'

const AppItem = props => {
  const {imageUrl, appName, name} = props

  return (
    <li className="list">
      <img src={imageUrl} alt={name} className="image" />
      <p className="appNames">{name}</p>
    </li>
  )
}

export default AppItem
