const userInfo = info => {
    fetch("https://randomuser.me/api/?results=50")
        .then(res => res.json())
        .then(data => userData(data.results))
    
}
userInfo()
const userData = data =>{
    const displayUser = document.getElementById("display-user")
    data.forEach(userInformation => {
        console.log(userInformation)
      const {gender,name,location,email,cell,phone,picture} = userInformation;
      const div = document.createElement("div")
      div.innerHTML =`
      <div class="col">
    <div class="card">
      <img src="${picture.large}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name.title + " " + name.first + " " +  name.last}</h5>
        <h6>${gender}</h6>
        <h6>${email}</h6>
        <p class="card-text">Country: ${location.country} || City: ${location.city}</p>
        <p class="card-text">Phone: ${phone}</p>
      </div>
    </div>
  </div>
      `

       displayUser.appendChild(div) 
    })

}