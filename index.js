const Notification = props => {
  const {className, iconUrl, message} = props
  const containerClassname = `notification-container ${className}`

  return (
    <div className={containerClassname}>
      <img className='icon' src={iconUrl} />
      <p className='message'>{message}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='notfication-app-contaner'>
    <h1 className='title'>Notification</h1>
    <div className='notfication-list-container'>
      <Notification
        className='blue-card'
        iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='infromation Message'
      />

      <Notification
        className='green-card'
        iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        message='success Message'
      />

      <Notification
        className='yellow-card'
        iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        message='warning Message'
      />

      <Notification
        className='red-card'
        iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        message='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
