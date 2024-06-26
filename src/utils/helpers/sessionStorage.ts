const SessionStorage = {
  setSessionStorage: function (key: string, value: string | number | boolean) {
    return typeof window !== "undefined"
      ? sessionStorage.setItem(key, JSON.stringify(value))
      : null;
  },

  getSessionStorage: function (
    key: string,
    defaultValue: string | number | boolean | undefined,
  ) {
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } else {
      return null;
    }
  },

  setObjectSessionStorage: function (key: string, value: object) {
    return typeof window !== "undefined"
      ? sessionStorage.setItem(key, JSON.stringify(value))
      : null;
  },

  getObjectSessionStorage: function (key: string) {
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : null;
    } else {
      return null;
    }
  },

  removeSessionStorage: function (key: string) {
    return typeof window !== "undefined"
      ? sessionStorage.removeItem(key)
      : null;
  },

  clearSessionStorage: function () {
    return typeof window !== "undefined" ? sessionStorage.clear() : null;
  },
};

export default SessionStorage;
