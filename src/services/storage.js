export function setSessionStorageItem(key, value) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  }
  
  export function getSessionStorageItem(key) {
    return sessionStorage.getItem(key);
  }
  
  export function removeSessionStorageItem(key) {
    sessionStorage.removeItem(key);
  }