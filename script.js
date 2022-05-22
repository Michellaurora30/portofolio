let listPorto = document.getElementById("listPorto");
let modalBody = document.getElementById("modal-bodi");
initialData();

function initialData() {
    fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .then((jsondata) => showCards(jsondata));

    function showCards(jsonData) {
        let tampung = "";
        for (let i = 0; i < jsonData.length; i++) {
            tampung += `<div class="item col-lg-4 col-xl-3 col-md-6 ${jsonData[i]["section"]}">
                <a class="portfolio-item" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showModal(${jsonData[i]["id"]})">
                    <figure class="portfolio-thumb">
                        <img src="${jsonData[i]["thumbnail"]}" alt="portfolio Item ">
                    </figure>

                    <div class="overlay-wrapper">
                        <div class="overlay"></div>
                        <div class="portfolio-info ">
                            <p class="cat">${jsonData[i]["kategori"]}</p>
                            <h3 class="heading">${jsonData[i]["nama_project"]}</h3>
                        </div>
                    </div>
                </a>
            </div>`
        }

        listPorto.innerHTML = tampung;
    }
}

function showModal(id) {
    fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .then((jsondata) => modal(jsondata));

    function modal(jsonData) {
        let modal = "";
        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i]["id"] == id) {
                modal = `<div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h2 class="heading">${jsonData[i]["nama_project"]}</h2>
                                <img src="${jsonData[i]["gambar_heading_modal"]}" class="img-fluid">
                                <div class="my-2">
                                    <div class="row">
                                        <div class="col-6">
                                            <p><span class="fw-bold">Company :</span><br> ${jsonData[i]["company"]} <br><span class="fw-bold">Year : </span><br> ${jsonData[i]["year"]} <br><span class="fw-bold">Duration : </span><br> ${jsonData[i]["duration"]} <br><span class="fw-bold">Tools : </span><br> ${jsonData[i]["tools"]}
                                                <br><span class="fw-bold">Team : </span><br> ${jsonData[i]["team"]} </p>
                                        </div>
                                        <div class="col-6">
                                            <p><span class="fw-bold">Role : </span><br> ${jsonData[i]["role"]} <br><span class="fw-bold">Responsibility : </span><br> ${jsonData[i]["responsibilty"]} <br><span class="fw-bold">Platform : </span><br> ${jsonData[i]["platform"]}</p>
                                        </div>
                                    </div>
                                </div>
                                <p style="text-align: justify; text-justify: inter-word;">
                                ${jsonData[i]["description"]}
                                </p>
                                <img src="${jsonData[i]["description_image"]}" class="img-fluid">
                                <h4 class="heading mt-3" style="color: #A80216;">Project Overview
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["project_overview"]}</p>
                                <img src="${jsonData[i]["project_overview_image"]}" class="img-fluid">
                                <h4 class="heading mt-3" style="color: #A80216;">The Problem
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["problem"]}</p>
                                <img src="${jsonData[i]["problem_image"]}" class="img-fluid">
                                <h4 class="heading mt-3" style="color: #A80216;">Goals
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["goal"]}.</p>
                                <img src="${jsonData[i]["goal_image"]}" class="img-fluid">
                                <h4 class="heading mt-3" style="color: #A80216;">Scope and Constraints
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["scope_and_constrain"]}</p>
                                <img src="${jsonData[i]["scope_and_constrain_image"]}" class="img-fluid">
                                <h4 class="heading mt-3" style="color: #A80216;">The Proccess
                                </h4>
                                <h4 style="font-size: 20px;"><b>Research and Collecting Data</b>
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["research_and_collecting_data"]}</p>
                                <img src="${jsonData[i]["research_and_collecting_data_image"]}" class="img-fluid"></p>
                                <h4 style="font-size: 20px;"><b>Understanding and Analyze</b>
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["understanding_and_analyze"]}</p>
                                <img src="${jsonData[i]["understanding_and_analyze_image"]}" class="img-fluid"></p>
                                <h4 style="font-size: 20px;"><b>Ideation</b>
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["ideation"]}</p>
                                <img src="${jsonData[i]["ideation_image"]}" class="img-fluid"></p>
                                <h4 style="font-size: 20px;"><b>Solution</b>
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["solution"]}</p>
                                <img src="${jsonData[i]["solution_image"]}" class="img-fluid"></p>
                                <h4 class="heading mt-3" style="color: #A80216;">The Results
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;"> ${jsonData[i]["result"]}</p>
                                <img src="${jsonData[i]["result_image"]}" class="img-fluid"></p>
                                <h4 style="font-size: 20px;"><b>Screenshoot</b>
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;">${jsonData[i]["screenshots"]}</p>
                                <img src="${jsonData[i]["screenshots_image"]}" class="img-fluid ">
                            </div>
                        </div>
                    </div>`
            }
        }

        modalBody.innerHTML = modal;
    }
}