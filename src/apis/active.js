export default{
  /**
   * 登录
   * @param {username,password}
   */
  login: {
    url: '/login',
    method: 'post'
  },
  /**
   * 获取列表
   * @param {pageIndex,pageSize }
   */
  getList: {
    url: '/list',
  },
  /**
   * 新增或更新
   * @param {content }
   */
  addOrEditSomething: {
    url: '/update',
    method: 'post'
  }
}
