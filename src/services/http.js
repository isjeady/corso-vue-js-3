import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "Accept-Language": "it",
};

export const LOCAL_STORAGE_TOKEN_PROPS = "token";

const injectToken = (config) => {
  try {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_PROPS);
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    // console.log(error)
    return config;
  }
};

class Http {
  istance = null;

  constructor() {
    return this.istance != null ? this.istance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
      headers,
      withCredentials: true,
    });

    http.interceptors.request.use(
      (config) => {
        return injectToken(config);
        // config.headers.Authorization = `Bearer 12345`;
        // return config;
      },
      (error) => {
        const { response } = error;
        return Promise.reject(response);
      }
    );

    http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { response } = error;
        this.handleError(response);
        return Promise.reject(response);
      }
    );

    this.istance = http;
    return http;
  }

  request(config) {
    return this.http.request(config);
  }

  get(url, config) {
    return this.http.get(url, config);
  }

  post(url, data, config) {
    return this.http.post(url, data, config);
  }

  patch(url, data, config) {
    return this.http.patch(url, data, config);
  }

  put(url, data, config) {
    return this.http.put(url, data, config);
  }

  delete(url, config) {
    return this.http.delete(url, config);
  }

  handleError(error) {
    console.log("handleError");
    if (error) {
      const { status } = error;

      switch (status) {
        case 500: {
          // Handle InternalServerError
          break;
        }
        case 403: {
          // Handle Forbidden
          break;
        }
        case 401: {
          // Handle Unauthorized
          break;
        }
        case 429: {
          // Handle TooManyRequests
          break;
        }
      }
    } else {
      console.warn(
        "🆘 No internet connection found. App is running in offline mode."
      );
    }
  }
}

export const http = new Http();
