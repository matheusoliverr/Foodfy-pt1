const modalOverlay = document.querySelector('.modal_overlay')
const modal = document.querySelector('.modal')
const recipes = document.querySelectorAll('.recipe')

for(let recipe of recipes){
    
    recipe.querySelector('.recipe_img').addEventListener("click", function(){

        const recipeImg = recipe.querySelector('.recipe_img').getAttribute("alt")
        const recipeName = recipe.querySelector('.recipe_name').getAttribute("id")
        const recipeAuthor = recipe.querySelector('.recipe_author').getAttribute("id")

        modalOverlay.classList.add('active')
        modal.querySelector('.recipe_img').src = `images/${recipeImg}.png`
        modal.querySelector('.recipe_name').innerHTML = `${recipeName}`
        modal.querySelector('.recipe_author').innerHTML = `por ${recipeAuthor}`
    })
}

modal.querySelector('.close_modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modal.querySelector('.recipe_img').src = ''
    modal.querySelector('.recipe_name').innerHTML = ''
    modal.querySelector('.recipe_author').innerHTML = ''
})
