import http from '@/http-common'

/* eslint-disable */
class JobsService {
  getAll(): Promise<any> {
    return http.get('/jobs')
  }

  get(id: any): Promise<any> {
    return http.get(`/jobs/${id}`)
  }

  create(data: any): Promise<any> {
    return http.post('/jobs', data)
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/jobs/${id}`, data)
  }

  delete(id: any): Promise<any> {
    return http.delete(`/jobs/${id}`)
  }
}

export default new JobsService()
