'use client';

import { useState, useEffect } from 'react';

async function fetchMealIdeas() {
  const response = await fetch('/api/meal-ideas');
  const data = await response.json();
  return data;
}