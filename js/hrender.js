const key="aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2hlYWxlci1vcC9IZWFsQ2xvdWQvbWFpbi9qc29uL2NvdXJzZXMuanNvbg=="

fetch(`${atob(key)}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {
      var video = data.ListBucketResult.Contents;
      
      const html = video.map((img, i) =>{
        var lv = video[i].Key;
        var lb = lv;
        var lv = encodeURIComponent(lv.trim());
        return `
                <div class="col-sm-6" id="${lb}">
                    <div class="card text-white bg-dark mb-3">
                      <div class="card-body">
                        <h5 class="card-title">${lb}</h5>
                        <p class="card-text">
                        Learn ${lb}
                        </p>
                        <a href="video.html?link=${lv}" class="btn btn-light">Watch Now</a>
                      </div>
                    </div>
                  </div>`;
    }).join('');
    document.querySelector("#row").insertAdjacentHTML("afterbegin", html);

    })