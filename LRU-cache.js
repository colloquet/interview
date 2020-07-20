class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let cache = this.cache;
    if (cache.has(key)) {
      let temp = cache.get(key);
      cache.delete(key);
      cache.set(key, temp);
      return temp;
    } else {
      return -1;
    }
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    let cache = this.cache;
    if (cache.has(key)) {
      cache.delete(key);
    } else if (cache.size >= this.capacity) {
      cache.delete(cache.keys().next().value);
    }
    cache.set(key, value);
  }
}

const cache = new LRUCache(2);

cache.put('test', 1);
cache.put('test2', 2);

console.log(cache.get('test'));
console.log(cache.get('test2'));

cache.put('test3', 3);

console.log(cache.get('test'));
console.log(cache.get('test3'));
