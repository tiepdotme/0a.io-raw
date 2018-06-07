_.each(document.getElementsByClassName("ArchyItem"),function(item){
    var aLink = item.querySelector(".ArchyItemTitle a")
    var date = item.querySelector(".ArchyItemDate")
    var img =  item.querySelector(".ArchyItemImg")
    if(date == null){
        date = item.querySelector(".ArchyItemSubtitle")
    }
    _.each([aLink,img],function(x){
    x.addEventListener("mouseover",function(){
        aLink.classList.add("hover")
        date.classList.add("ArchyItemDateHover")
    })
    x.addEventListener("mouseout",function(){
        aLink.classList.remove("hover")
        date.classList.remove("ArchyItemDateHover")
    })})
})
