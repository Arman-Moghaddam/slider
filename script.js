let $ = document
let items = [1,2,3]
let container = $.querySelector(".container")

function create_el(){
    container.innerHTML = null
    for (i in items){
        let new_item = $.createElement("div")
        let class_name = "item i" + items[i]
        new_item.setAttribute("class", class_name)
        new_item.innerHTML = items[i]
        container.append(new_item)
        // new_item.style.transform = "translateX(-82px)"
    }
}
create_el()
setInterval(function(){
    items.push(items.shift())
    create_el()
}, 4000)


