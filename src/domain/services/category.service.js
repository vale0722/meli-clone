import service from "./service";
import config from "../config";

export function getCategories(paging, setIsLoading) {
  setIsLoading(true);
  return service.get(`/sites/${config.country}/categories`)
    .then((response) => {
      setIsLoading(false);
      return response.data;
    })
    .catch((e) => {
      setIsLoading(false);
      const error = (e && e.message) || e.statusText;
      return Promise.reject(error);
    });
}