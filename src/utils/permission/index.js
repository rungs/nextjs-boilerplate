import { getFeaturePermission } from '../../api'
import { FEATURE_PERMISSION } from '@constants'

export const getAppPermission = async () => {
  const permission = await getFeaturePermission(FEATURE_PERMISSION?.MENU)
  const menuPermission = permission?.features?.[0]?.scopes

  return menuPermission
}
