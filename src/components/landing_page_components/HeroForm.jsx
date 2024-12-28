'use client';
import React, {useState} from 'react'
import PrimaryBtn from './PrimaryBtns/PrimaryBtn';

const HeroForm = () => {
  const [budget, setBudget] = useState(5000)

  const handleBudgetChange = (e) => {
    const newBudget = parseInt(e.target.value)
    setBudget(newBudget)
    console.log("Budget changed to:", newBudget)
  };

  return (
    <>
      <div className="w-full">
          <h2 className="text-2xl font-bold mb-3">Have any questions?</h2>

          <form className="space-y-0">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your name*</label>
              <input
                type="text"
                id="name"
                // placeholder="John Doe"
                className="w-full bg-transparent border border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Your email*</label>
              <input
                type="email"
                id="email"
                // placeholder="Your email"
                className="w-full bg-transparent border border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Your number*</label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-transparent border border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-1">What is your budget?</label>
              <div className="flex items-center">
                <span className="text-sm mr-2">USD 5K</span>
                <input
                  type="range"
                  id="budget"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={budget}
                  onChange={handleBudgetChange}
                  className="flex-grow appearance-none bg-gray-300 h-1 rounded-full outline-none"
                />
                <span className="text-sm ml-2">USD 100K+</span>
              </div>
              <p className="text-sm my-1">Selected budget: USD {budget.toLocaleString()}</p>
            </div>
            

            <div>
              <label htmlFor="project" className="block text-sm font-medium mb-1">Tell us about the project</label>
              <textarea
                id="project"
                placeholder="Type Here"
                className="w-full bg-transparent border border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 resize-none h-16"
              ></textarea>
            </div>
            <PrimaryBtn text={'Submit'} />
          </form>
        </div>
    </>
  )
}

export default HeroForm