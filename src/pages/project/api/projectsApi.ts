export const projectsApi = {
    async getProjects() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      return await res.json()
    },
    
    async getProject(id: string) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`)
      return await res.json()
    }
}