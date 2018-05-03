import fetch from '../utils/fetch';
/**
 * xx
 */
export const getNew = () => fetch({
  url: '/api/goods/list/newProduct',
  method: 'get',
});