// Navigation
document.querySelector(".bars").addEventListener("click", () => {
    document.querySelector(".navbar_background").classList.add("active_navbar_background")  
    document.querySelector(".navbar").classList.add("active_navbar");
})

const close_navigation = () => {
    document.querySelector(".navbar_background").classList.remove("active_navbar_background")  
    document.querySelector(".navbar").classList.remove("active_navbar");
}

document.querySelector(".back").addEventListener("click", close_navigation);
document.querySelector(".navbar_background").addEventListener("click",close_navigation);



// Image Slider
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

nextBtn.addEventListener("click", () => {
    const active = document.querySelector(".active");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if(next.nextElementSibling){
        // Active --> Prev
        active.classList.remove("active");
        active.classList.add("prev");
        // Next --> Active
        next.classList.remove("next");
        next.classList.add("active");
        // NextNext --> Next
        next.nextElementSibling.classList.add("next")
        // Prev --> PrevPrev
        prev.classList.remove("prev")
    } else if (active.nextElementSibling){
        // Next --> Active
        next.classList.remove("next");
        next.classList.add("active");
        // Active --> Prev
        active.classList.remove("active");
        active.classList.add("prev");
        // Prev --> PrevPrev
        prev.classList.remove("prev")
    }
});

prevBtn.addEventListener("click", () => {
    const active = document.querySelector(".active");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if(prev.previousElementSibling){
        // Active --> next
        active.classList.remove("active");
        active.classList.add("next");
        // Next --> Active
        prev.classList.remove("prev");
        prev.classList.add("active");
        // NextNext --> Next
        prev.previousElementSibling.classList.add("prev")
        // Prev --> PrevPrev
        next.classList.remove("next")
    } else if (active.previousElementSibling){
        // Next --> Active
        prev.classList.remove("prev");
        prev.classList.add("active");
        // Active --> Prev
        active.classList.remove("active");
        active.classList.add("next");
        // Prev --> PrevPrev
        next.classList.remove("next")
    }
});


// Dropdown Handle
const timeDropdown = document.querySelector(".time")
const flavoursDropdown = document.querySelector(".flavours")

const drop_time = () => {
    timeDropdown.parentElement.classList.remove("dropdown_hide")
    flavoursDropdown.parentElement.classList.add("dropdown_hide")

    timeDropdown.children[1].innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    flavoursDropdown.children[1].innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
};

const drop_flavours = () => {
    flavoursDropdown.parentElement.classList.remove("dropdown_hide")
    timeDropdown.parentElement.classList.add("dropdown_hide")

    timeDropdown.children[1].innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    flavoursDropdown.children[1].innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
};

timeDropdown.addEventListener("click", drop_time)
flavoursDropdown.addEventListener("click", drop_flavours)

// GET details
const arr = document.querySelectorAll(".dropdown_items p")

arr.forEach(ar => {
    ar.addEventListener("click", (e) => {
        if (ar.parentElement.parentElement.className == "dropdown_container time_p"){
            document.querySelector(".time span").innerText = e.target.innerText;
        }  else if(ar.parentElement.parentElement.className == "dropdown_container flavours_p"){
            document.querySelector(".flavours span").innerText = e.target.innerText;
        }
        
    })
});

// Search Results
document.querySelector(".input_and_btn button").addEventListener("click", () => {
    document.querySelector(".search_result_wrapper").classList.add("bg_active");

    setTimeout(() => {
        document.querySelector(".animation").classList.add("animate")
    }, 500);

    setTimeout(() => {
        document.querySelector(".search_result").classList.add("search_result_large")
        document.querySelector(".animation").classList.remove("animate")
    }, 1500);

    setTimeout(() => {
        document.querySelector(".search_results_section").classList.add("show_search_result")
    }, 2000);

    document.querySelector(".result_flavour").innerText = document.querySelector(".flavours span").innerText;
    document.querySelector(".result_time").innerText = document.querySelector(".time span").innerText;
    document.querySelector(".result_keywords").innerText = document.querySelector(".input_and_btn input").value;
});

const removeSearchSection = () => {
    document.querySelector(".search_result_wrapper").classList.remove("bg_active");
    document.querySelector(".search_result").classList.remove("search_result_large");
    document.querySelector(".search_results_section").classList.remove("show_search_result")
}

document.querySelector("#close_btn").addEventListener("click", removeSearchSection)
document.querySelector(".search_result_wrapper").addEventListener("click", removeSearchSection)