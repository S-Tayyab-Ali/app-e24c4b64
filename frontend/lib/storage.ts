export const STORAGE_KEYS = {
  QUIZ_ANSWERS: 'aging_at_home_quiz_answers',
  QUIZ_HISTORY: 'aging_at_home_quiz_history',
  USER_PROFILE: 'aging_at_home_user_profile',
};

export const saveQuizAnswers = (answers: Record<string, string>) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.QUIZ_ANSWERS, JSON.stringify(answers));
  
  // Also save to history
  const history = getQuizHistory();
  const newEntry = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    answers
  };
  localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify([newEntry, ...history]));
};

export const getQuizAnswers = (): Record<string, string> | null => {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(STORAGE_KEYS.QUIZ_ANSWERS);
  return data ? JSON.parse(data) : null;
};

export const getQuizHistory = (): any[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
  return data ? JSON.parse(data) : [];
};

export const clearAllData = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.QUIZ_ANSWERS);
  localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
  localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
};

