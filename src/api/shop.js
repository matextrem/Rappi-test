
/**
 * Mocking client-server processing
 */
import _products from './products.json'
import _categories from './categories.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products.products), timeout || TIMEOUT),
  getCategories: (cb, timeout) => setTimeout(() => cb(_categories.categories), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}