//Search
    let form = document.querySelector('#form');

    let inputSearch = form.querySelector('input');
    let searchButton = form.querySelector('button');

    inputSearch.onkeyup = (e) => {
        e.preventDefault();
        let inputSearch = document.querySelector('#inputSearch');

        let table = document.querySelector('#table');
        let trs = table.querySelectorAll('tbody tr')
        console.log(trs)

        trs.forEach(tr => {
            let rows = tr.querySelectorAll('td');
            tr.hidden = true;
            if(rows.length >= 1 && rows[2].innerText.includes(inputSearch.value))
              tr.hidden = false;
        })
    }
