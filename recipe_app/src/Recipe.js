import style from "./recipe.module.css"

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p className={style.bold}> Ingredients: </p>
            <ol>
                {ingredients.map((ingredient)=>{
                    return <li>{ingredient.text}</li>
                })}
            </ol>
            <p className={style.bold}>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe;