import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput} label='Name' cols='12 4' placeholder='Type name' readOnly={readOnly} />
          <Field name='month' component={labelAndInput} label='Month' cols='12 4' placeholder='Type month' type='number' readOnly={readOnly} />
          <Field name='year' component={labelAndInput} label='Year' cols='12 4' placeholder='Type year' type='number' readOnly={readOnly} />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)