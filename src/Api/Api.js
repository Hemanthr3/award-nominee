const api = {
  getBallotData() {
    return fetch('/api/getBallotData').then(res => {
      return res.json();
    }).catch(error => {
       console.log(error)
    });;
  }
};

export default api;