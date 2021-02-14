import http from "../HTTP/http";

class propertyDataService {
  getAllProperties() {
    return http.get("/api/get/properties");
  }

  getSingleProperty(id) {
    return http.get(`/api/get/property/:id/${id}`);
  }

  create(data) {
    return http.post("/api/post/property", data);
  }

  update(id, data) {
    return http.put(`/api/update/property/:id/${id}`, data);
  }

  deleteProperty(id) {
    return http.delete(`/api/property/delete/:id/${id}`);

}
}
export default new propertyDataService();
