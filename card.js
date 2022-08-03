function gernerateManagerCard ({name,id,email,officeNumber}) 
{ 
    return `
    <div class="card p-3 m-3" style="width: 18rem;">
                    
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text"> Manager </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">Office Number: ${officeNumber}</li>
    </ul>
    
  </div>`
}

function gernerateEngineerCard ({name,id,email,gitHub})
{
    return `
    <div class="card p-3 m-3" style="width: 18rem;">
                    
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text"> Engineer </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">GitHub: ${gitHub}</li>
    </ul>
    
  </div>`
}

function gernerateInternCard ({name,id,email,school})
{
    return `
    <div class="card p-3 m-3" style="width: 18rem;">
                    
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Intern </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">School: ${school}</li>
    </ul>
    
  </div>`
}

module.exports = {gernerateEngineerCard, gernerateInternCard, gernerateManagerCard}

// using {} when creating module exports for mutiple functions
