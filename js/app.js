const loadPhones = async(searchText )=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones=phones=>{
    const phoneContianer = document.getElementById('phone-container');
    phoneContianer.innerText = ``
    phones.forEach(phone =>{
    const phoneDiv =document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
        <div class="card h-100 p-4 border-2 rounded-3">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                    ${phone.slug}
                </p>
            </div>
        </div>
    
    `;
    phoneContianer.appendChild(phoneDiv)
    })    
}


document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    loadPhones(searchText)


})

loadPhones()