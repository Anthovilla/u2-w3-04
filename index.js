fetch('https://api.pexels.com/v1/search?query=kitten', {
    headers: {
        Authorization: 'chV79HQ3iWw0z9DHzupQG05wzaDPCckGTNUJqscvg2ZJfSScCrHPkgFz'
    }
})
.then((res) => {
    console.log(res)
    if (res.ok) {
        return res.json()
    }
})

//2

.then((data) => {
    console.log(data)
    let cardsGroup = document.getElementsByClassName('.row')
    data.forEach((item) => {
        let cards = document.createElement('div')
        cards.classList.add('col-md-4')
        cards.innerHTML = `
        <div class="card mb-4 shadow-sm">
         <img scr="${item.photos}" class-img-top>       
        <div class="card-body">
          <h5 class="card-title">1</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
        `
        cardsGroup.appendChild(cards)
    })


    // let row = document.getElementsByClassName('.card')
    // details.forEach((item) => {
    //      let cards = document.createElement('img')
    //     cards.innerHTML = `
    //     <img src=${item.photos} />
    //     `
    //     row.appendChild(cards)
    // })
})


//3
.catch((err) => {
    console.log(err)
})

