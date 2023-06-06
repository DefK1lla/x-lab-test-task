import { AxiosPromise } from 'axios'

import { address_api } from '..'
import { SuggestionsResponse } from 'shared/types/suggestions'

export const searchAddress = (
  query: string
): AxiosPromise<SuggestionsResponse> => {
  return address_api.post('', {
    query,
  })
}
