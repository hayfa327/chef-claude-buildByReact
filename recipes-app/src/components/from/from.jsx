import "./from.css"


export default function From() {
  return (
    <main> 
    <form className="addIngre">
      <input aria-label="Add ingredient"
      type="text" 
      placeholder="e.g. oregano"
      />
      <button>Add ingredient</button>
    </form>
    </main>
  )
}