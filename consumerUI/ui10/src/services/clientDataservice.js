import http from "../HTTP/http";

class TenantDataService {

  getAllTenants() {
    return http.get("/api/get/clients");
  }

  getSingleTenant(id) {
    return http.get(`/api/get/client/:id/${id}`);
  }

  createTenant(data) {
    return http.post("/api/create/client", data);
  }

  updateTenant(id, data) {
    return http.put(`/api/client/update/:id/${id}`, data);
  }
  getAllClientLeases(){
    return http.get('/api/leasedclients');
  }

  getSingleClientLeases(id){
    return http.get(`/api/get/leasedproperty/client/:id/${id}`);
  }
}



export default new TenantDataService();
