import React from 'react'
import { NextPageWithLayout } from '../_app'
import { DashboardLayout } from '@/components'

const Transactions: NextPageWithLayout = () => {
  return <div className="">This is the transactions page</div>
}

Transactions.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
export default Transactions
