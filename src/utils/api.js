import http from 'request'

export default{
  // 获取转盘奖品信息
  getRewardList (data) {
    return http({
      method: 'get',
      url: '../../static/lukyspin.json',
      params: data
    })
  }
}