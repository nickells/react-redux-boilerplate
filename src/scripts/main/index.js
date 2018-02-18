import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Button = () => {
  console.log('buton')

  return (
    <div className="button">
      Click Me
    </div>
  )
}

const Main = () => (
  <div>
    <Button />
  </div>
)

const mapStateToProps = ( state ) => ({
})

const mapDispatchToProps = ( dispatch ) => bindActionCreators({
}, dispatch )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Main )