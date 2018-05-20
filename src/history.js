import createHistory from 'history/createBrowserHistory';

const isBrowser = typeof window !== 'undefined';

const history = isBrowser ? createHistory() : {};

const { location } = history;

const onChangeListeners = [];

function push(pathname) {
  window.history.pushState({}, '', pathname);

  onChangeListeners.forEach(cb => cb(pathname));
}

function onChange(cb) {
  onChangeListeners.push(cb);
}

export default { history, location, push, onChange };
