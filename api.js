const image_container = document.querySelector(".image_container");



// fetch api

url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4898630f183f4b9e90de2ebbdc18063d&pageSize=100`
fetch(url)
    .then(response => {
        return response.json();
    }).then((data) => {
        // console.log(data)
        let storeddata = "";
        data.articles.forEach(element => {
            // console.log(element.content)
            storeddata += `
            <div class="flex flex-wrap flex-row m-10">
            <div class="p-0 m-0 md:w-1/1 set_width">
                <div class=" border-2 border-gray-200
                    border-opacity-60 rounded-lg overflow-hidden
                    addinsertclass">
                    <img class="lg:h-48 md:h-36 w-full object-cover
                        object-center img_continer"
                        src=${element.urlToImage}
                        alt="blog">
                    <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font
                            font-medium mb-1 text-white">${element.publishedAt}</h2>
                        <h1 class="title-font text-lg font-medium
                            text-white mb-3">${element.title}</h1>
                        <p class="leading-relaxed mb-3 text-yellow-400">${element.description}.</p>
                        <div class="flex items-center flex-wrap">
                            <a href=${element.url} target="_Blank" class="text-red-500 inline-flex
                                items-center md:mb-2 lg:mb-0
                                cursor-pointer">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0
                                    24 24" stroke="currentColor"
                                    stroke-width="2" fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
        });
        image_container.innerHTML = storeddata;

    });