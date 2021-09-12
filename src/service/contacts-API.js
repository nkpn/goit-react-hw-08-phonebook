const BASE_URL = 'http://localhost:3030/contacts';

export const APIfetchContacts = async () => {
  try {
    const PromiseResult = await fetch(`${BASE_URL}`);
    const result = await PromiseResult.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const APIAddContacts = async data => {
  try {
    const PromiseResult = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await PromiseResult.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const APIDeleteContacts = async id => {
  try {
    const PromiseResult = await fetch(`${BASE_URL}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await PromiseResult.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
