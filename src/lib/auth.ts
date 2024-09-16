import { addToCookie } from "@/shared/functions/cookie.functions";

async function fetchWithHeaders(url: string, body: object) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || response.status.toString());
  }
  return response.json();
}

export async function AuthSignIn(email: string, password: string): Promise<void> {
  try {
    const data = await fetchWithHeaders(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
    if (data && data.access_token) {
      addToCookie("currentUser", JSON.stringify(data));
      addToCookie("loggedIn", "true");
    } else {
      // console.error("Access token is missing or invalid.");
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function AuthSignUp(email: string, password: string, firstName: string, lastName: string): Promise<void> {
  try {
    const data = await fetchWithHeaders(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, { email, password, firstName, lastName });
    if (data && data.access_token) {
      // Uncomment if you want to store user data in cookies after signup
      // addToCookie("currentUser", JSON.stringify(data));
      // addToCookie("loggedIn", "true");
    } else {
      // console.error("Access token is missing or invalid.");
    }
  } catch (error) {
    // console.error(error);
    throw error;
  }
}
