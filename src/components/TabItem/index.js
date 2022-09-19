// Write your code here
import './index.css'

const TabItem = props => {
  const {item, id, toDisplayBasedOnTab, isActive} = props

  const tabChange = () => {
    toDisplayBasedOnTab(id)
  }

  const effects = isActive ? 'blue' : ''
  const effects1 = isActive ? 'blue1' : ''

  return (
    <li className="istItems" onClick={tabChange}>
      <button type="button" className={`para ${effects}`}>
        {item}
      </button>
      <hr className={`h ${effects1}`} />
    </li>
  )
}

export default TabItem
