import openAlertNoti from './alertNoti/openAlertNoti'
import { StripedDataGrid } from './table/stripedDataGrid'
import {
  TABLE_MAIN_MENU_HEADER,
  TABLE_SUB_MENU_HEADER,
  TABLE_PROGRAM_MENU_HEADER,
} from './tableHeader/menu-management/menuManagementHeader'
import { TABLE_COMPANY_HEADER } from './tableHeader/organization/companyHeader'
import {
  TABLE_COMPANY_MANAGEMENT_HEADER,
  TABLE_CHANNEL_HEADER,
  TABLE_REGION_HEADER,
  TABLE_DISTRICT_HEADER,
  TABLE_BRANCH_HEADER,
} from './tableHeader/organization/organizationManagementHeader'
import { TABLE_REFERENCE_HEADER } from './tableHeader/reference/ReferenceHeader'
import { getAppPermission } from './permission'
import { TABLE_USER_MANAGEMENT_HEADER } from './tableHeader/user-management/userManagementHeader'
import { TABLE_ROLE_MANAGEMENT_HEADER } from './tableHeader/role-management/roleManagementHeader'
import { TABLE_RENEW_MANAGEMENT_HEADER } from './tableHeader/renew-management/renewManagementHeader'
import { GET_MSAL_CONFIG } from './authConfig/getEnv'
import { menuManagementSchema } from './validation/menuManagement/menuManagementSchema'
import { subMenuManagementSchema } from './validation/menuManagement/subMenuManagementSchema'
import { programManagementSchema } from './validation/menuManagement/programManagementSchema'
import { replaceValue, translateByKey } from './string'
export {
  openAlertNoti,
  StripedDataGrid,
  TABLE_COMPANY_HEADER,
  TABLE_COMPANY_MANAGEMENT_HEADER,
  TABLE_REFERENCE_HEADER,
  TABLE_SUB_MENU_HEADER,
  getAppPermission,
  TABLE_MAIN_MENU_HEADER,
  TABLE_PROGRAM_MENU_HEADER,
  TABLE_USER_MANAGEMENT_HEADER,
  TABLE_ROLE_MANAGEMENT_HEADER,
  TABLE_CHANNEL_HEADER,
  TABLE_REGION_HEADER,
  TABLE_DISTRICT_HEADER,
  TABLE_BRANCH_HEADER,
  TABLE_RENEW_MANAGEMENT_HEADER,
  GET_MSAL_CONFIG,
  menuManagementSchema,
  subMenuManagementSchema,
  programManagementSchema,
  replaceValue,
  translateByKey,
}
