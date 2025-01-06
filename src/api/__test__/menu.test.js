import api from '../service'
import {
  getMenuLinkById,
  getMenuLinks,
  getSubMenuLinks,
  getProgramLinks,
  getProgramByParentId,
  addMenuLink,
  getSubMenuLinkByParentId,
  updateMenuLink,
  addSubMenuLink,
  addProgramLink,
  deleteMenuLink,
} from '../menu'

const URL = `${process.env.NEXT_PUBLIC_APP_API_URL}`
const VERSION = `${process.env.NEXT_PUBLIC_APP_API_VERSION}`

jest.mock('../service')

describe('API Feature', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call api getMenuLinks status is 200', async () => {
    const response = {
      status: 200,
      data: [
        {
          menu_link_id: 'menu-link-id',
          menu_link_code: 'menu-link-code',
          menu_link_name: 'menu-link-name',
        },
      ],
    }

    api.get.mockResolvedValue(response)
    const res = await getMenuLinks()

    expect(api.get).toHaveBeenCalledWith(`${URL}/api/v${VERSION}/Ux/menu-links`)
    expect(res).toEqual([
      {
        menu_link_id: 'menu-link-id',
        menu_link_code: 'menu-link-code',
        menu_link_name: 'menu-link-name',
      },
    ])
  })

  it('should call api getMenuLinkById status is 200', async () => {
    const menuId = 'mock-menuId'

    const response = {
      status: 200,
      data: {
        menu_link_id: 'menu-link-id',
        menu_link_code: 'menu-link-code',
        menu_link_name: 'menu-link-name',
      },
    }

    api.get.mockResolvedValue(response)
    const res = await getMenuLinkById(menuId)

    expect(api.get).toHaveBeenCalledWith(`${URL}/api/v${VERSION}/Ux/menu-links/${menuId}`)
    expect(res).toEqual({
      menu_link_id: 'menu-link-id',
      menu_link_code: 'menu-link-code',
      menu_link_name: 'menu-link-name',
    })
  })

  it('should call api getSubMenuLinkByParentId status is 200', async () => {
    const menuId = 'menuId'
    const response = {
      status: 200,
      data: [
        {
          menu_link_id: 'menu-link-id',
          menu_link_code: 'menu-link-code',
          menu_link_name: 'menu-link-name',
        },
      ],
    }

    api.get.mockResolvedValue(response)
    const res = await getSubMenuLinkByParentId(menuId)

    expect(api.get).toHaveBeenCalledWith(
      `${URL}/api/v${VERSION}/Ux/menu-links/${menuId}/sub-menu-links`,
    )
    expect(res).toEqual([
      {
        menu_link_id: 'menu-link-id',
        menu_link_code: 'menu-link-code',
        menu_link_name: 'menu-link-name',
      },
    ])
  })

  it('should call api getSubMenuLinks status is 200', async () => {
    const type = 'MENU'

    const response = {
      status: 200,
      data: [
        {
          menu_link_id: 'menu-link-id',
          menu_link_code: 'menu-link-code',
          menu_link_name: 'menu-link-name',
          feature_code: 'SM-code',
        },
      ],
    }

    api.get.mockResolvedValue(response)
    const res = await getSubMenuLinks()

    expect(res).toEqual([
      {
        feature_code: 'SM-code',
        menu_link_code: 'menu-link-code',
        menu_link_id: 'menu-link-id',
        menu_link_name: 'menu-link-name',
      },
    ])
  })

  it('should call api getProgramLinks status is 200', async () => {
    const response = {
      status: 200,
      data: [
        {
          menu_link_id: 'menu-link-id',
          menu_link_code: 'menu-link-code',
          menu_link_name: 'menu-link-name',
          feature_code: 'P-code',
        },
      ],
    }

    api.get.mockResolvedValue(response)
    const res = await getProgramLinks()

    expect(res).toEqual([
      {
        menu_link_id: 'menu-link-id',
        menu_link_code: 'menu-link-code',
        menu_link_name: 'menu-link-name',
        feature_code: 'P-code',
      },
    ])
  })

  it('should call api getProgramByParentId status is 200', async () => {
    const subMenuId = 'subMenuId'
    const response = {
      status: 200,
      data: [
        {
          sub_menu_link_id: 'sub-menu-link-id',
          sub_menu_link_code: 'sub-menu-link-code',
          sub_menu_link_name: 'sub-menu-link-name',
        },
      ],
    }

    api.get.mockResolvedValue(response)
    const res = await getProgramByParentId(subMenuId)

    expect(api.get).toHaveBeenCalledWith(
      `${URL}/api/v${VERSION}/Ux/menu-links/sub-menu-links/${subMenuId}/program`,
    )
    expect(res).toEqual([
      {
        sub_menu_link_id: 'sub-menu-link-id',
        sub_menu_link_code: 'sub-menu-link-code',
        sub_menu_link_name: 'sub-menu-link-name',
      },
    ])
  })

  it('should call api addMenuLink status is 200', async () => {
    const featureId = 'featureId'
    const menuCode = 'menuCode'
    const menuName = 'menuName'
    const response = {
      status: 200,
      data: {
        sub_menu_link_id: 'sub-menu-link-id',
        sub_menu_link_code: 'sub-menu-link-code',
        sub_menu_link_name: 'sub-menu-link-name',
      },
    }

    api.post.mockResolvedValue(response)
    const res = await addMenuLink(featureId, menuCode, menuName)

    expect(api.post).toHaveBeenCalledWith(`${URL}/api/v${VERSION}/Ux/menu-links`, {
      feature_id: 'featureId',
      menu_link_code: 'menuCode',
      menu_link_name: 'menuName',
    })
    expect(res).toEqual({
      sub_menu_link_id: 'sub-menu-link-id',
      sub_menu_link_code: 'sub-menu-link-code',
      sub_menu_link_name: 'sub-menu-link-name',
    })
  })

  it('should call api addSubMenuLink status is 200', async () => {
    const featureId = 'featureId'
    const menuCode = 'menuCode'
    const menuName = 'menuName'
    const parentMenuId = 'parentMenuId'
    const response = {
      status: 200,
      data: {
        sub_menu_link_id: 'sub-menu-link-id',
        sub_menu_link_code: 'sub-menu-link-code',
        sub_menu_link_name: 'sub-menu-link-name',
      },
    }

    api.post.mockResolvedValue(response)
    const res = await addSubMenuLink(featureId, menuCode, menuName, parentMenuId)

    expect(api.post).toHaveBeenCalledWith(`${URL}/api/v${VERSION}/Ux/menu-links`, {
      feature_id: 'featureId',
      menu_link_code: 'menuCode',
      menu_link_name: 'menuName',
      parent_menu_id: 'parentMenuId',
    })
    expect(res).toEqual({
      sub_menu_link_id: 'sub-menu-link-id',
      sub_menu_link_code: 'sub-menu-link-code',
      sub_menu_link_name: 'sub-menu-link-name',
    })
  })

  it('should call api addProgramLink status is 200', async () => {
    const featureId = 'featureId'
    const menuCode = 'menuCode'
    const menuName = 'menuName'
    const parentMenuId = 'parentMenuId'
    const response = {
      status: 200,
      data: {
        sub_menu_link_id: 'sub-menu-link-id',
        sub_menu_link_code: 'sub-menu-link-code',
        sub_menu_link_name: 'sub-menu-link-name',
      },
    }

    api.post.mockResolvedValue(response)
    const res = await addProgramLink(featureId, menuCode, menuName, parentMenuId)

    expect(api.post).toHaveBeenCalledWith(`${URL}/api/v${VERSION}/Ux/program-links`, {
      feature_id: 'featureId',
      menu_link_code: 'menuCode',
      menu_link_name: 'menuName',
      parent_menu_id: 'parentMenuId',
    })
    expect(res).toEqual({
      sub_menu_link_id: 'sub-menu-link-id',
      sub_menu_link_code: 'sub-menu-link-code',
      sub_menu_link_name: 'sub-menu-link-name',
    })
  })

  it('should call api updateMenuLink status is 200', async () => {
    const menuId = 'menuId'
    const menuCode = 'menuCode'
    const menuName = 'menuName'

    const response = {
      status: 200,
      data: {
        menu_link_code: 'menu-link-code',
        menu_link_name: 'menu-link-name',
      },
    }

    api.put.mockResolvedValue(response)
    const res = await updateMenuLink(menuId, menuCode, menuName)

    expect(api.put).toHaveBeenCalledWith(`${URL}/api/v${VERSION}/Ux/menu-links/${menuId}`, {
      menu_link_code: 'menuCode',
      menu_link_name: 'menuName',
    })
    expect(res).toEqual({
      menu_link_code: 'menu-link-code',
      menu_link_name: 'menu-link-name',
    })
  })

  it('should call api deleteMenuLink status is 200', async () => {
    const menuLinkId = 'menuLinkId'

    const response = {
      status: 200,
      data: 0,
    }

    api.delete.mockResolvedValue(response)
    const res = await deleteMenuLink(menuLinkId)

    expect(api.delete).toHaveBeenCalledWith(`${URL}/api/v${VERSION}/Ux/menu-links/${menuLinkId}`)
    expect(res).toEqual(0)
  })
})
