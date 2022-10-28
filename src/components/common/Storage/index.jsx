export const localStorageKey = 'com.drpanda.distribute.'


export class SessionStorage {

  constructor(key, defaultValue) {
    this.key = localStorageKey + key
    this.defaultValue = defaultValue
  }

  setItem(value) {
    sessionStorage.setItem(this.key, window.btoa(encodeURIComponent(JSON.stringify(value))))
  }

  getItem() {
    const value =
      sessionStorage[this.key] && decodeURIComponent(window.atob(sessionStorage.getItem(this.key)))
    if (value === undefined) return this.defaultValue
    try {
      return value && value !== 'null' && value !== 'undefined'
        ? (JSON.parse(value))
        : this.defaultValue
    } catch (error) {
      return value && value !== 'null' && value !== 'undefined'
        ? (value)
        : this.defaultValue
    }
  }

  removeItem() {
    sessionStorage.removeItem(this.key)
  }
}

/** 管理token */
export const tokenStorage = new SessionStorage('authToken', '')

/** 只清除当前项目所属的本地存储 */
export const clearSessionStorage = () => {
  for (const key in sessionStorage) {
    if (key.includes(localStorageKey)) {
      sessionStorage.removeItem(key)
    }
  }
}
