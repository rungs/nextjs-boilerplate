'use client'
import React, { useEffect } from 'react'
import { getAllUser } from '@apis/user'
import { useMutation } from 'react-query'
const User = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      let _payload = {}
      //  setData([])
      //   if (payload) {
      //     _payload = {
      //       numberOfObjectsPerPage: payload.pageSize,
      //       pageNumber: payload.page,
      //       startDate: convertDateToStartDay(payload.dCreate_date_from),
      //       endDate: convertDateToEndDay(payload.dCreate_date_to),
      //       policyNumber: payload.policy_number || '',
      //       insuredName: payload.insured_name || '',
      //       insuredSurName: payload.insured_surname || '',
      //       plateNumber: payload.plate_number || '',
      //       gSendMessage: payload.gSend_message?.id || 'All',
      //       orderBy: payload.sortField,
      //       orderAsc: payload.sortOrder !== 'desc',
      //     }
      //   }

      const response = await getAllUser()
      console.log('🚀 ~ mutationFn: ~ response:', response)

      return response
    },
    onSuccess: res => {
      console.log('res', res)
      //setData(res)
    },
    onError: () => {
      //   openAlertNoti(
      //     dispatch,
      //     translator.premium_quotation.common.api.error,
      //     'error',
      //     SNACK_ANCHOR_ORIGIN,
      //   )
    },
  })

  useEffect(() => {
    mutate()
    // async function getData() {
    //   let data = await getAllUser()
    //   return data
    // }

    // getData().then(data => {
    //   console.log('data', data)
    // })
    // return () => {
    //   second
    // }
  }, [])

  return <div>page</div>
}

export default User
