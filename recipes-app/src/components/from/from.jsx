import "./from.css"
 

export default function From() {
  const ingredients = ["chicken", "orange", "apple"]

const addIngredients =ingredients.map((items) => {
  return <li key={items}>{items}</li>
})

function handleSubmit(event){
  event.preventDefault()
 const formData = new FormData(event.currentTarget)
 const newIngredient = formData.get("in")
  ingredients.push(newIngredient)
  console.log(ingredients)
}

  return (
    <main> 
    <form  onSubmit={handleSubmit}    className="addIngre">
      <input aria-label="Add ingredient"
      type="text" 
      placeholder="e.g. oregano"
      name="in"
      />
      <button> + Add ingredient</button>
    </form>
    <ul>
      {addIngredients}
    </ul>
    </main>
  )
}