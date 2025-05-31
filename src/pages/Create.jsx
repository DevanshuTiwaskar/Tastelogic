import React from 'react'
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';


const Create = () => {
const {data , setData} = useContext(recipecontext)
const Navigate = useNavigate();
const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
} = useForm()


const submitHandler = (recipe) => {
  recipe.id = nanoid();
  setData([...data, recipe]);
  toast.success('New recipe created');
  reset();
  Navigate(-1);
};

  return (
    <form className='text-xl' onSubmit={handleSubmit(submitHandler)}>
          <input
                {...register("image")}
                className="w-full block mb-3 outline-0 border-b p-2 "
                type="url"
                placeholder="Recipe Image URL"
            />
            <input
                {...register("title")}
                className="w-full block mb-3 outline-0 border-b p-2 "
                type="text"
                placeholder="Recipe Title"
            />
            <input
                {...register("chef")}
                className="w-full block mb-3 outline-0 border-b p-2 "
                type="text"
                placeholder="Chef Name"
            />
            <textarea
                {...register("desc")}
                className="w-full block mb-3 outline-0 border-b p-2 "
                placeholder="recipe descriotion here..."
            ></textarea>
            <textarea
                {...register("ingr")}
                className="w-full block mb-3 outline-0 border-b p-2 "
                placeholder="recipe ingredients here (seperated by comma)..."
            ></textarea>
            <textarea
                {...register("inst")}
                className="w-full block mb-3 outline-0 border-b p-2 "
                placeholder="recipe instructions here (seperated by comma)..."
            ></textarea>
            <select
                {...register("category")}
                className="w-full block mb-3 outline-0 border-b p-2 "
            >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
            </select>
            <button className="mt-5 px-4 py-2 bg-green-400 rounded">
                Create Recipe
            </button>

    </form>
  )
}

export default Create