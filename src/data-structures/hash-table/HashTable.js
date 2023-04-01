class HashTable {
  constructor() {
    this.buckets = new Array(100);
  }
  hash(key) {
    let hash = 5381;
    for (let i = 0; i < key.lenght; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % this.buckets.length;
  }
  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    // check if the key already exists in the bucket
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }
    // if key doesn't exist, add a new key-value pair
    this.buckets[index].push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }
    return null;
  }
  delete(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return true;
      }
    }
    return false;
  }

  getValue() {
    const values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          values.push(this.buckets[i][j][1]);
        }
      }
    }
    return values;
  }
}
module.exports = HashTable;
