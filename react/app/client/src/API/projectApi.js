import axios from 'axios';
import store from '../index';
import { getProjectsSuccess, setProjectSuccess, removeProjectSuccess, editingProjectSuccess, editProjectSuccess } from '../actions/projectActions';

export const setupInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      // eslint-disable-next-line
      config.headers = {
        ...config.headers,
        'access-token': localStorage.getItem('access-token'),
        client: localStorage.getItem('client'),
        uid: localStorage.getItem('uid'),
         
      "Content-Security-Policy": "default-src 'self'; script-src https://static.ads-twitter.com https://www.google-analytics.com 'sha256-q2sY7jlDS4SrxBg6oq/NBYk9XVSwDsterXWpH99SAn0='; img-src 'self' https://s3.amazonaws.com https://twitter.com https://pbs.twimg.com; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com; frame-ancestors 'none';",
      "Referrer-Policy": "no-referrer, strict-origin-when-cross-origin",
      "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
  
      };

      return config;
    },
    error =>
      // Do something with request error
      Promise.reject(error),
  );
};

export function getProjects() {
  setupInterceptors();
  return axios.get('/api/v1/projects.json')
    .then(response => {
      store.dispatch(getProjectsSuccess(response.data));
    })
    .catch((error) => {console.log(error)})
}

export function addNewProject(name) {
  axios.post( '/api/v1/projects', { project: {name} })
  .then(response => {
    store.dispatch(setProjectSuccess(response.data));
  })
  .catch((error) => {console.log(error)})
}

export function removeProject(id) {
  axios.delete( '/api/v1/projects/' + id )
  .then(response => {
    store.dispatch(removeProjectSuccess(id));
  })
  .catch((error) => {console.log(error)})
}

export function editProject(id, name) {
  axios.put( '/api/v1/projects/' + id, { project: {name} })
  .then((response) => {
    store.dispatch(editProjectSuccess(response.data.id, response.data.name));
    store.dispatch(editingProjectSuccess(null));
  })
  .catch((error) => {console.log(error)})
}

export function editingProject(id) {
  store.dispatch(editingProjectSuccess(id));
}