export const API_TOKEN = '5de07fed78085f1b78374cbeeee15e';

export const query = {
  query: `
    {
        allQuestions {
          id
          question
          image {
            url
          }
        }
      }
    `
}

export const query02 = {
  query: `
    {
      allLevelseconds {
        id
        question
        image {
          url
        }
      }
    }
    
    `
}

export const headers = {
  headers: {
    authorization: `Bearer ${API_TOKEN}`,
  },
}

