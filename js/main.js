const url = `../data.json`;
const summaryContainer = document.querySelector('.summary_container')
window.addEventListener('DOMContentLoaded',() => {
  loadData()
})

async function  loadData(){

  const response = await fetch(url)
  const data = await response.json()
  showData(data)
}
function showData(data){
  const summary = document.createElement('DIV');
  summary.classList.add('summary')
  data.forEach(element => {
    const {category,score,icon} = element
    summary.innerHTML += `
      <div class="summary_item">
        <p><img src="${icon}" alt="${category} icon">${category}</p>
        <div>
          <p>${score}<span class="light"> / 100</span></p>
        </div>
      </div>
  
    `
    
  });
  summaryContainer.appendChild(summary)
  const btn = document.createElement('DIV');
  btn.classList.add('btn');
  btn.innerHTML = `
    <input type="button" value="Continue">
  `
  summaryContainer.appendChild(btn)
}
