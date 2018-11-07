/**
 * dva 通过 model 的概念把一个领域的模型管理起来，
 * 包含同步更新 state 的 reducers，
 * 处理异步逻辑的 effects，
 * 订阅数据源的 subscriptions
 */

export default {
  namespace: 'products', // 全局 state 上的 key
  state: [], // 初始状态
  reducers: {
    // 等同于 redux 里的 reducer，接收 action，同步更新 state
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    }
  }
};
