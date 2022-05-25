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
            tampung += `<div class="item col-lg-6 col-xl-6 col-md-6 ${jsonData[i]["section"]}">
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
                                <img src="${jsonData[i]["gambar_heading_modal"]}" class="img-fluid col-12">
                                <div class="my-2">
                                    <div class="row">
                                        <div class="col-6">
                                            <p><span class="fw-bold">Role : </span><br> ${jsonData[i]["role"]} <br><span class="fw-bold">Responsibility : </span><br> ${jsonData[i]["responsibilty"]} <br><span class="fw-bold">Platform : </span><br> ${jsonData[i]["platform"]}</p>
                                        </div>
                                        <div class="col-6">
                                            <p><span class="fw-bold">Year : </span><br> ${jsonData[i]["year"]} <br><span class="fw-bold">Duration : </span><br> ${jsonData[i]["duration"]} <br><span class="fw-bold">Tools : </span><br> ${jsonData[i]["tools"]}
                                                <br><span class="fw-bold">Team : </span><br> ${jsonData[i]["team"]} </p>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="heading mt-3" style="color: #A80216;">Project Overview
                                </h4>
                                <!-- Project Overview -->
                                ${jsonData[i]["project_overview"]}
                                <h4 class="heading mt-3" style="color: #A80216;">The Problem
                                </h4>
                                <!-- The Problem -->
                                ${jsonData[i]["problem"]}
                                <h4 class="heading mt-3" style="color: #A80216;">Scope and Constraints
                                </h4>
                                <img src="${jsonData[i]["scope_and_constrain_image"]}" class="img-fluid col-12">
                                <!-- Scope & Constraints -->
                                ${jsonData[i]["scope_and_constrain"]}
                                <h4 class="heading mt-3" style="color: #A80216;">The Proccess
                                </h4>
                                <h4 style="font-size: 20px;"><b>Design Process</b>
                                </h4>
                                <img src="${jsonData[i]["design_proses_image"]}" class="img-fluid col-12">
                                <p></p>
                                <h4 style="font-size: 20px;"><b>1. Research and Collecting Data</b>
                                </h4>
                                <!-- Research & Collecting Data -->
                                ${jsonData[i]["research_and_collecting_data"]}
                                <img src="${jsonData[i]["research_and_collecting_data_image"]}" class="img-fluid col-12">
                                <p></p>
                                <h4 style="font-size: 20px;"><b>2. Understanding and Analyze</b>
                                </h4>
                                <!-- Understanding & Analyze -->
                                ${jsonData[i]["understanding_and_analyze"]}
                                <img src="${jsonData[i]["understanding_and_analyze_image"]}" class="img-fluid col-12">
                                <p></p>
                                <h4 style="font-size: 20px;"><b>3. Ideation</b>
                                </h4>
                                <!--Ideation -->
                                ${jsonData[i]["ideation"]}
                                <img src="${jsonData[i]["ideation_image"]}" class="img-fluid col-12">
                                <p></p>
                                <h4 style="font-size: 20px;"><b>4. Design Decisions</b></h4>
                                <!-- Design Decision -->
                                ${jsonData[i]["design_decision"]}
                                <h4 class="heading mt-3" style="color: #A80216;">The Results
                                </h4>
                                <p style="text-align: justify; text-justify: inter-word;"> ${jsonData[i]["result"]}</p>
                                <img src="${jsonData[i]["result_image"]}" class="img-fluid col-12"></p>
                                <h4 style="font-size: 20px;"><b>Screenshoot</b>
                                </h4>
                                <img src="${jsonData[i]["screenshots_image"]}" class="img-fluid col-12">
                            </div>
                        </div>
                    </div>`
            }
        }

        modalBody.innerHTML = modal;
    }
}