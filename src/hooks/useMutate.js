import React from 'react'
import { useMutation } from '@tanstack/react-query'
//import { instanceAxios, syncDataToServer } from '@Apis'

const useMutate = ({ fn }) => {
  //const setIsLoadingState = useSetRecoilState(isLoadingState);

  const mutate = useMutation({
    mutationFn: async payload => {
      const res = await fn(payload)
      return res
    },
  })

//   React.useEffect(() => {
//     setIsLoadingState(mutate.isPending)
//   }, [mutate.isPending, setIsLoadingState])

  return mutate
}

export default useMutate
