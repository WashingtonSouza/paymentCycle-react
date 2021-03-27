import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return dispatch => {
    axios.post(`${BASE_URL}/billingCycles`, values)
      .then(resp => {
        toastr.success('Sucess', 'Operation saved successfully')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Error', error));
      })
  }
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabEdit'),
    selectTab('tabEdit'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabAdd'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}