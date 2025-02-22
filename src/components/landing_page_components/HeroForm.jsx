'use client';
import React, { useState } from 'react';
import PrimaryBtn from './PrimaryBtns/PrimaryBtn';
import { usePathname } from 'next/navigation';

const HeroForm = () => {
  const pathname = usePathname();
  // Fixed the path checking logic
  const defaultMinBudget = pathname.includes('branding') ? 100 : pathname.includes('seo') ? 200 : 500;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: defaultMinBudget,
    project: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleBudgetChange = (e) => {
    const newBudget = parseInt(e.target.value);
    setFormData(prev => ({
      ...prev,
      budget: newBudget
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: defaultMinBudget,
          project: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-3">Have any questions?</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-md font-medium mb-1">
            Your name*
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-transparent border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 text-white`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-md font-medium mb-1">
            Your email*
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-transparent border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 text-white`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-md font-medium mb-1">
            Your number*
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-transparent border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 text-white`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-md font-medium mb-1">
            What is your budget?
          </label>
          <div className="flex items-center">
            <span className="text-sm mr-2">USD {defaultMinBudget}</span>
            <input
              type="range"
              id="budget"
              min={defaultMinBudget}
              max="100000"
              step="1000"
              value={formData.budget}
              onChange={handleBudgetChange}
              className="flex-grow appearance-none bg-gray-300 h-1 rounded-full outline-none"
            />
            <span className="text-sm ml-2">USD 100K+</span>
          </div>
          <p className="text-sm my-1">
            Selected budget: USD {formData.budget.toLocaleString()}
          </p>
        </div>

        <div>
          <label htmlFor="project" className="block text-md font-medium mb-1">
            Tell us about the project
          </label>
          <textarea
            id="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Type Here"
            className="w-full bg-transparent border border-gray-300 rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500 resize-none h-16"
          />
        </div>

        <PrimaryBtn
          text={isSubmitting ? 'Submitting...' : 'Submit'}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default HeroForm;