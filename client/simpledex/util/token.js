
export function getAuthHeaders() {
    const token = localStorage.getItem('jwt');
    let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return config
}
